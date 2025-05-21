import { atom } from "nanostores";
import type { AnyBot } from "../../cambria/bot";
import {
	MealItem,
	ModalTypes,
	NpcType,
	SkillType,
	StaffItem,
	StrongholdName,
	SwordItem,
} from "../../cambria/room_schemas";
import { ServerMessage } from "../../cambria";

/* ---------- Типы ---------- */

export type StageKind =
	| "Idle"
	| "EscapeTest"
	| "Autofarm"
	| "RepairEquipment"
	| "Finished";

export type EscapeTestSub = "sellBread" | "leaveFromTest";
export type AutofarmSub = "equipWeapon" | "killingMob" | "findingMob";

export type BotStage =
	| { kind: "Idle" }
	| { kind: "EscapeTest"; subStage: EscapeTestSub }
	| { kind: "Autofarm"; subStage: AutofarmSub }
	| { kind: "RepairEquipment" }
	| { kind: "Finished" };

export const stageAtom = atom<BotStage>({ kind: "Idle" });

/* ---------- Вспом‑утилиты ---------- */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const log = (...args: any[]) => console.log("[Stage]", ...args);

type Handler<T extends BotStage> = (
	bot: AnyBot,
	stage: T,
	signal: AbortSignal,
	transition: (s: BotStage) => void,
) => Promise<void>;

type HandlerMap = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[K in StageKind]?: Record<string, Handler<any>>;
};

const handlers: HandlerMap = Object.create(null); // единый реестр

export function register<K extends StageKind>(
	kind: K,
	sub: string,
	handler: Handler<Extract<BotStage, { kind: K }>>,
) {
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	(handlers[kind] ||= Object.create(null))[sub] = handler;
}

class StageRunner {
	private current?: {
		ctrl: AbortController;
		running: Promise<void>;
		stage: BotStage;
	};

	constructor(private bot: AnyBot) {
		stageAtom.subscribe((stage) => this.handleStage(stage));
	}

	private async handleStage(next: BotStage) {
		// ---------- 1. останавливаем предыдущий ----------
		if (this.current) {
			const { ctrl, running, stage: prev } = this.current;

			// формируем понятное описание причины
			const cause = `transition → ${fmt(next)}`;

			ctrl.abort(); // посылаем сигнал отмены
			await running.catch(() => {}); // ждём, игнорируя AbortError

			log(`stopped (${cause})`, fmt(prev));
		}

		// ---------- 2. ищем обработчик ----------
		const map = handlers[next.kind];
		const h =
			next.kind === "Idle" ||
			next.kind === "RepairEquipment" ||
			next.kind === "Finished"
				? map?.["*"]
				: // biome-ignore lint/suspicious/noExplicitAny: <explanation>
					map?.[(next as any).subStage];

		if (!h) {
			log("Нет обработчика для", fmt(next));
			return;
		}

		// ---------- 3. запускаем новый ----------
		const ctrl = new AbortController();
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const running = h(this.bot, next as any, ctrl.signal, transition)
			.then(() => log("finished", fmt(next)))
			.catch((err) => {
				if (err.name === "AbortError") return; // штатная отмена
				log(`stopped (error: ${err.message})`, fmt(next));
				console.error(err);
			});

		this.current = { ctrl, running, stage: next };
	}
}

/* ---------- маленький помощник ---------- */
function fmt(s: BotStage) {
	return s.kind === "Autofarm" || s.kind === "EscapeTest"
		? `${s.kind}:${s.subStage}`
		: s.kind;
}

function transition(s: BotStage) {
	log("→", s);
	stageAtom.set(s);
}

/* ---------- Реализация конкретных под‑стейджей ---------- */
/* Ниже показаны только изменённые / самые длинные обработчики
   В остальных достаточно добавить (bot, stage, signal, transition) и
   периодически проверять `signal.aborted` либо подписаться на `signal`.
*/

// EscapeTest:sellBread
register("EscapeTest", "sellBread", async (bot, stage, signal, trans) => {
	if (signal.aborted) throw new DOMException("aborted", "AbortError");

	const [bread] = bot.inventory.getItemsByType(MealItem.Bread);
	const gold = bot.inventory
		.getItemsByType("gold")
		.reduce((a, i) => a + i.quantity, 0);

	if (!bread && gold < 100) return log("ЧО за пиздец");

	if (!bread) {
		trans({ kind: "EscapeTest", subStage: "leaveFromTest" });
		return;
	}

	const npcId = bot.findNearNpc("name", "Cyril");
	if (!npcId) return log("Нет NPC Cyril");

	bot.sendMessage("interactNpc", { npcId: npcId.id, action: "Talk-to" });

	await waitInterface(bot, signal);
	await bot.sendRequest("sellToGeneralStore", {
		itemId: bread.id,
		amount: bread.quantity,
		itemType: MealItem.Bread,
	});

	trans({ kind: "EscapeTest", subStage: "leaveFromTest" });
});

// EscapeTest:leaveFromTest
register("EscapeTest", "leaveFromTest", async (bot, stage, signal, trans) => {
	const npcId = bot.findNearNpc("name", "Fong");

	if (!npcId) return log("Нет NPC Fong");

	console.log("Отправляем запрос на взаимодействие с NPC...");

	bot.sendMessage("interactNpc", {
		npcId: npcId.id,
		action: "Talk-to",
	});

	await waitInterface(bot, signal);

	console.log("Отправляем запрос на подтверждение...");

	bot.sendMessage("confirmationModalResponse", {
		subject: "suat",
		response: true,
	});

	await delay(5000, signal);

	trans({
		kind: "Autofarm",
		subStage: "equipWeapon",
	});
});

// Autofarm:equipWeapon
register("Autofarm", "equipWeapon", async (bot, stage, signal, trans) => {
	const weaponReady = new Promise<boolean>((res) => {
		let remove = () => {};

		remove = bot.equipment.subscribe((e) => {
			if (e.weapon) {
				remove();
				res(true);
			}
		});
		signal.addEventListener("abort", () => remove());
	});

	let [staff] = bot.inventory.getItemsByType(StaffItem.Standard);
	if (!staff) {
		await bot.openGuildChest();
		staff =
			(await bot.withdrawFromGuildChest(StaffItem.Standard, 1)) ?? undefined;
	}
	if (staff) bot.sendMessage("equipItem", staff.id);

	await weaponReady;
	if (signal.aborted) throw new DOMException("aborted", "AbortError");

	trans({ kind: "Autofarm", subStage: "findingMob" });
});

register("RepairEquipment", "*", async (bot, stage, signal, trans) => {
	// bot.sendMessage("interactObject", "6")

	await bot.interface.openAndWait("6293");
	await waitUntil(
		() => Boolean(bot.interface.get(ModalTypes.REPAIR_SCREEN)?.data),
		signal,
	);

	const data = bot.interface.get(ModalTypes.REPAIR_SCREEN)?.data as {
		totalCost: number;
		repairCost: number;
	};

	const pieces = bot.inventory
		.getItemsByType("gold")
		.reduce((acc, item) => acc + item.quantity, 0);

	const cost = data.totalCost || data.repairCost;

	console.log("Стоимость ремонта:", cost);
	console.log("Количество золота:", pieces);

	if (pieces < cost) {
		const item = await bot.withdrawFromGuildChest("gold", cost - pieces);

		if (!item) {
			return console.log("ЧО за пиздец");
		}
	}

	bot.sendMessage("interfaceInteractionMessage", {
		type: ModalTypes.REPAIR_SCREEN,
		data: { repairAll: true },
	});

	trans({ kind: "Autofarm", subStage: "findingMob" });
});

// Autofarm:findingMob (сокращённая версия)
register("Autofarm", "findingMob", async (bot, stage, signal, trans) => {
	bot.sendMessage("moveTo", { x: 23051, y: 22620 });

	await waitUntil(
		() => {
			const pos = bot.currentPosition.get();
			return Math.hypot(pos.x - 23051, pos.y - 22620) < 300;
		},
		signal,
		200,
		10000,
	);

	while (!signal.aborted) {
		const cow = bot.findNearNpc("type", NpcType.COW);
		if (cow) {
			bot.sendMessage("attackToNpc", cow.id);
			await waitUntil(() => {
				const npc = bot.room.state.npcs.get(cow.id);
				return !npc || npc.hitpoints <= 0;
			}, signal);
		}
		await delay(250, signal);
	}
});

/* ---------- Хелперы ---------- */

function waitInterface(bot: AnyBot, signal: AbortSignal) {
	return new Promise<void>((res, rej) => {
		bot.once("openInterface", () => {
			res();
		});
		signal.addEventListener("abort", () => {
			rej(new DOMException("aborted", "AbortError"));
		});
	});
}

function waitUntil(
	cond: () => boolean,
	signal: AbortSignal,
	step = 200,
	timeout?: number,
) {
	return new Promise<void>((res, rej) => {
		const i = setInterval(() => {
			if (cond()) {
				clearInterval(i);
				res();
			}
		}, step);

		const t = timeout
			? setTimeout(() => {
					clearInterval(i);
					res();
				}, timeout)
			: null;

		signal.addEventListener("abort", () => {
			clearInterval(i);
			t && clearTimeout(t);
			rej(new DOMException("aborted", "AbortError"));
		});
	});
}

function delay(ms: number, signal: AbortSignal) {
	return new Promise<void>((res, rej) => {
		const t = setTimeout(res, ms);
		signal.addEventListener("abort", () => {
			clearTimeout(t);
			rej(new DOMException("aborted", "AbortError"));
		});
	});
}

/* ---------- Запуск ---------- */

export function startWorker(bot: AnyBot) {
	new StageRunner(bot); // одна строка вместо гигантского subscribe

	// примеры внешних триггеров:
	bot.equipment.subscribe((eq) => {
		if (
			eq.weapon &&
			eq.weapon.durability < 95 &&
			stageAtom.get().kind !== "RepairEquipment"
		) {
			transition({ kind: "RepairEquipment" });
		}
	});

	bot.levelSkills.subscribe((skills) => {
		console.log(skills);
		if (Object.values(skills).every((s) => s.currentLevel >= 60)) {
			transition({ kind: "Finished" });
		}
	});

	bot.on("ready", async () => {
		await waitUntil(
			() => bot.inventory.get().length > 0,
			new AbortController().signal,
		);

		const me = await bot.cambria.getMe();
		transition(
			me.tutorial_island_completed
				? { kind: "Autofarm", subStage: "equipWeapon" }
				: { kind: "EscapeTest", subStage: "sellBread" },
		);
	});
}
