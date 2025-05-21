import type {
	Account,
	Chain,
	RpcSchema,
	RpcTransaction,
	Transport,
	WalletClient,
} from "viem";
import { Privy } from "../privy";

// @ts-ignore - Assuming pino and pino-pretty are installed
import pino, { type Logger } from "pino";
// @ts-ignore
import pretty from "pino-pretty"; // Import pino-pretty
import { type StatemanjsAPI, createState } from "@persevie/statemanjs";
import { createPublicClient, createWalletClient, http } from "viem";
import { createClient, type KyInstance } from "../client";
import { mainnet } from "viem/chains";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { Cambria, solveChallenge } from ".";
import { Solver } from "capsolver-npm";
import { setTimeout as promisedSetTimeout } from "node:timers/promises";
import { MatchMakeError, type Room } from "colyseus.js";
import { v4 as uuidv4 } from "uuid";
// import  from "./room_schemas";
import { ClientMessage, ServerMessage } from "./messages";
import { EventEmitter } from "node:events";
import {
	BackpackItem,
	ClientMessageSettings,
	type ClientRequestSettings,
	EquipmentSlot,
	getItemConfig,
	handleLoginStage,
	LoginStage,
	type ModalTypes,
	SkillType,
	StaffItem,
} from "./room_schemas";
import type { z } from "zod";

import {
	map,
	atom,
	computed,
	type PreinitializedWritableAtom,
	type ReadableAtom,
} from "nanostores";
import {
	capitalize,
	difference,
	inventoryOrder,
	orderInventory,
	setInventoryOrder,
} from "./utils";
import { Inventory } from "./inventory";
import { LevelSkills } from "./level_skills";
import { ArraySchema, type MapSchema, Schema } from "@colyseus/schema";
import { Position } from "./position";
import { LevelCap } from "./level_cap";
import { Interface } from "./interface";
import UserAgent from "user-agents";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type AnyBot = Bot<any, any, any, any>;

export class Bot<
	transport extends Transport,
	chain extends Chain,
	account extends Account,
	rpcSchema extends RpcSchema,
> extends EventEmitter<{
	ready: [];
	guildChestChange: [];
	guildInvite: [
		{
			inviteId: string;
			ownerId: string;
			guildName: string;
			ownerName: string;
			inviterId: string;
			inviterName: string;
			points: number;
			feePercentage: number;
		}[],
	];
	cookingComplete: [];
	openInterface: [{ type: ModalTypes }];
}> {
	totalWeight: ReadableAtom<number>;
	weightPercentage: ReadableAtom<number>;
	private lastValidWeightPercentage = 0;
	inventory: Inventory<transport, chain, account, rpcSchema>;
	guildChest: Inventory<transport, chain, account, rpcSchema>;
	levelSkills: LevelSkills<transport, chain, account, rpcSchema>;
	levelCap: LevelCap<transport, chain, account, rpcSchema>;
	currentPosition: Position;
	interface: Interface;

	constructor(
		public readonly cambria: Cambria<transport, chain, account, rpcSchema>,
		public readonly walletClient: WalletClient<
			transport,
			chain,
			account,
			rpcSchema
		>,
		public readonly room: Room<{
			players: MapSchema<
				{
					x: number;
					y: number;
					direction: string;
					slowedDownLevel: string;
					intoxicated: boolean;
					attackable: boolean;
					dummy: boolean;
					pfpVerified: boolean;
					inSafeZone: boolean;
					hasEyeGlow: boolean;
					wearingBlackMask: boolean;
					hidden: boolean;
					combatLevel: number;
					stress: number;
					fatigue: number;
					hitpoints: number;
					maximumHitpoints: number;
					totalPvPKills: number;
					rewardMultiplier: number;
					partyColour: number;
					skulled_at: number;
					appearanceHash: number;
					equipmentHash: number;
					wagonId: string;
					pfpUrl: string;
					twitterUsername: string;
					discordUsername: string;
					partyName: string;
					name: string;
					title: string;
					torch: string;
					overheadIconId: string;
					connectedChainId: string;
					petData: string;
					guildName: string;
					totalPvPFame: string;
					statusMap: object;
					appearanceLayers: object;
					equipmentLayers: object;
					roles: object;
					duelPreference: object;
				},
				string
			>;
			npcs: MapSchema<
				{
					x: number;
					y: number;
					direction: string;
					slowedDownLevel: string;
					dangerIndicator: boolean;
					attackable: boolean;
					isCarcass: boolean;
					isInCombat: boolean;
					hidden: boolean;
					isNamedNpc: boolean;
					combatLevel: number;
					maximumHitpoints: number;
					hitpoints: number;
					npcId: string;
					skin: string;
					textureState: string;
					stateGraphic: string;
					name: string;
					glowColor: string;
					tintColor: string;
					overheadIconId: string;
				},
				string
			>;
			timeStamp: number;
			isOnline: boolean;
		}>,
		public readonly logger: Logger<never, boolean>,
		public canPlay = false,
		public readonly inventoryAtom = atom<
			{
				id: string;
				owner: string;
				quantity: number;
				type: string;
				location: string;
				created_by: string;
				created_at: number;
				durability: number;
				x?: number;
				y?: number;
				protected: boolean;
				dropped_at?: number;
				removed?: boolean;
			}[]
		>([]),
		public readonly equipment = map<
			Record<
				EquipmentSlot,
				{
					id: string;
					owner: string;
					quantity: number;
					type: string;
					location: string;
					created_by: string;
					created_at: number;
					durability: number;
					x?: number;
					y?: number;
					protected: boolean;
					dropped_at?: number;
					removed?: boolean;
				}
			>
		>(
			{} as Record<
				EquipmentSlot,
				{
					id: string;
					owner: string;
					quantity: number;
					type: string;
					location: string;
					created_by: string;
					created_at: number;
					durability: number;
					x?: number;
					y?: number;
					protected: boolean;
					dropped_at?: number;
					removed?: boolean;
				}
			>,
		),
		public readonly guildChestAtom = atom<
			{
				id: string;
				owner: string;
				quantity: number;
				type: string;
				location: string;
				created_by: string;
				created_at: number;
				durability: number;
				x?: number;
				y?: number;
				protected: boolean;
				dropped_at?: number;
				removed?: boolean;
			}[]
		>([]),
	) {
		super();

		this.levelCap = new LevelCap(this);
		this.levelSkills = new LevelSkills(this);
		this.currentPosition = new Position(this);
		this.inventory = new Inventory(this, this.inventoryAtom);
		this.guildChest = new Inventory(this, this.guildChestAtom);
		this.interface = new Interface(this);

		process.on("SIGINT", () => {
			this.room.leave();
		});

		this.totalWeight = computed(
			[this.inventoryAtom, this.equipment],
			(inventory, equipment) => {
				const items = inventory.filter((r) => !r.removed);
				const items2 = Array.from(Object.values(equipment));

				const totalWeight = [...items, ...items2].reduce((acc, item) => {
					const itemType = getItemConfig(item.type);
					const weight = "weight" in itemType ? itemType.weight || 0 : 0;
					const totalWeight = item.quantity * weight;

					return acc + totalWeight;
				}, 0);

				return Math.round(totalWeight * 10 ** 2) / 10 ** 2;
			},
		);

		this.weightPercentage = computed(
			[this.equipment, this.totalWeight],
			(equipment, totalWeight) => {
				let maxLoadLimit = 50;
				const backpack = equipment[EquipmentSlot.Backpack];

				if (backpack?.type === BackpackItem.NoviceBasic) {
					maxLoadLimit += 5;
				} else if (backpack?.type === BackpackItem.ExpertTactical) {
					maxLoadLimit += 15;
				} else if (backpack?.type === BackpackItem.SeasonedAdventurer) {
					maxLoadLimit += 25;
				} else if (backpack?.type === BackpackItem.AvasAccumulator) {
					maxLoadLimit += 15;
				}

				if (maxLoadLimit > 0) {
					const percentage = Math.floor((totalWeight / maxLoadLimit) * 100);

					if (Number.isNaN(percentage)) {
						return this.lastValidWeightPercentage;
					}

					this.lastValidWeightPercentage = percentage;
					return percentage;
				}

				return this.lastValidWeightPercentage;
			},
		);

		this.room.onMessage("*", (...args) => {
			// console.log(args);
		});

		this.room.onMessage(ServerMessage.StopCooking, (message) => {
			if (message === this.walletClient.account.address) {
				this.emit("cookingComplete");
			}
		});

		this.room.onMessage(ServerMessage.UpdatePlayerBoostedLevel, (cn) => {
			for (const [skill, value] of Object.entries(cn)) {
				if (capitalize(skill) in SkillType) {
					this.levelSkills.setBoostedLevel(skill as SkillType, value as number);
				}
			}
		});

		this.room.onMessage(ServerMessage.LoginQueuePosition, async (message) => {
			if (message.position === 0) {
				this.canPlay = true;
				this.emit("ready");
			} else {
				for (
					let i = LoginStage.ROLES_AND_PERMISSIONS;
					i <= LoginStage.INTERFACE_CONFIGS;
					i++
				) {
					await handleLoginStage(this, i);
				}
			}
		});

		this.room.onMessage(ServerMessage.GuildInvites, (message) => {
			this.emit("guildInvite", message);
		});

		this.room.onMessage(ServerMessage.RaisePlayerLevelCap, (message) => {
			// console.log(message);
		});

		this.room.onMessage(ServerMessage.OpenInterface, (message) => {
			this.emit("openInterface", message);
		});

		this.room.onMessage(ServerMessage.SendInventory, (message) => {
			if (message.location === "inventory") {
				const inv = orderInventory(message.items);

				const ids = inv.map((r) => r.id) as string[];

				let realInv = this.inventoryAtom.get();
				const realIds = realInv.map((r) => r.id);

				const diff1 = difference(ids, realIds);
				const diff2 = difference(realIds, ids);
				const diff3 = difference(realIds, diff2);

				for (let index = 0; index < diff3.length; index++) {
					const element = diff3[index];

					const filtered = realInv.map((item) =>
						item.id === element
							? inv.find((invItem) => invItem.id === element)
							: item,
					);

					realInv = filtered;
				}

				for (let index = 0; index < diff2.length; index++) {
					const element = diff2[index];

					realInv = realInv.map((item) => {
						if (item.id === element) {
							item.quantity = 0;
							item.removed = true;
						}

						return item;
					});
				}

				for (let index = 0; index < diff1.length; index++) {
					const element = diff1[index];

					const removedItem = realInv.find((item) => item.removed);
					const foundItem = inv.find((item) => item.id === element);

					if (removedItem) {
						realInv = realInv.map((item) =>
							item.id === removedItem.id ? foundItem : item,
						);
					} else {
						realInv = [...realInv, foundItem];
					}
				}

				this.inventoryAtom.set(realInv);

				setInventoryOrder(realInv);
			} else if (message.location === "guildChest") {
				this.guildChestAtom.set(message.items);
				this.emit("guildChestChange");
				// this.emit("guildChest", message);
			} else if (message.location === "equipment") {
				for (const item of message.items) {
					const typeItem = getItemConfig(item.type);

					if (typeItem.equipmentSlot) {
						this.equipment.setKey(
							typeItem.equipmentSlot as EquipmentSlot,
							item,
						);
					}
				}
			}
		});

		this.room.onError((code, message) => {
			console.log(code, message);
		});

		this.room.onLeave((code, reason) => {
			console.log(code, reason);
		});

		this.sendMessage(ClientMessage.Heartbeat, {
			focus: true,
		});

		setInterval(() => {
			this.sendMessage(ClientMessage.Heartbeat, {
				focus: true,
			});
		}, 5e3);
	}

	openGuildChest() {
		this.sendMessage("interactObject", "7269");

		return new Promise<void>((resolve) => {
			this.once("guildChestChange", () => {
				resolve();
			});
		});
	}

	async withdrawFromGuildChest(itemType: string, quantity: number) {
		const items = this.guildChest.getItemsByType(itemType);

		if (!items.length) {
			return null;
		}

		this.sendMessage("withdrawFromGuildChest", {
			itemType,
			quantity,
			location: "guildChest",
		});

		return await new Promise<{
			id: string;
			owner: string;
			quantity: number;
			type: string;
			location: string;
			created_by: string;
			created_at: number;
			durability: number;
			x?: number;
			y?: number;
			protected: boolean;
			dropped_at?: number;
			removed?: boolean;
		} | null>((resolve) => {
			let remove = () => {};

			remove = this.inventory.subscribe((items) => {
				const item = items.find((item) => item.type === itemType);

				if (item) {
					remove();
					resolve(item);
				}
			});
		});
	}

	findNearNpc(kind: "name" | "type", nameOrType: string) {
		const player = this.currentPosition.get();

		let minDistance = 100000000;
		let nearestNpc: {
			id: string;
			data: {
				x: number;
				y: number;
				direction: string;
				slowedDownLevel: string;
				dangerIndicator: boolean;
				attackable: boolean;
				isCarcass: boolean;
				isInCombat: boolean;
				hidden: boolean;
				isNamedNpc: boolean;
				combatLevel: number;
				maximumHitpoints: number;
				hitpoints: number;
				npcId: string;
				skin: string;
				textureState: string;
				stateGraphic: string;
				name: string;
				glowColor: string;
				tintColor: string;
				overheadIconId: string;
			};
		} | null = null;

		for (const [npcId, npcData] of this.room.state.npcs.entries()) {
			if (
				((kind === "name" && npcData.name === nameOrType) ||
					(kind === "type" && npcData.npcId === nameOrType)) &&
				npcData.hitpoints > 0
			) {
				// Calculate distance between player and NPC
				const dx = player.x - npcData.x;
				const dy = player.y - npcData.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < minDistance) {
					minDistance = distance;
					nearestNpc = { id: npcId, data: npcData };
				}
			}
		}

		return nearestNpc;
	}

	sendRequest<T, K extends keyof typeof ClientRequestSettings>(
		messageType: K,
		data: z.infer<(typeof ClientRequestSettings)[K]["payload"]>,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	): Promise<{ response: any; error?: any }> {
		const timeout = 10 * 1e3;

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		return new Promise<{ response: any; error?: any }>((resolve, reject) => {
			const reqId = uuidv4();

			// TODO: Consider logging requests/responses using the bot's logger if available
			// console.log("Sending request:", messageType, data); // Keep console.log for now or integrate logger later

			this.room?.send(messageType, {
				payload: data,
				reqId,
			});

			const timer = setTimeout(() => {
				listener?.();
				reject(new Error("TIMED_OUT"));
			}, timeout);

			const listener = this.room?.onMessage(reqId, (response) => {
				// console.log("Received response:", response); // Keep console.log for now or integrate logger later
				listener?.();
				clearTimeout(timer);
				resolve(response);
			});
		});
	}

	sendMessage<K extends keyof typeof ClientMessageSettings>(
		messageType: K,
		data: z.infer<(typeof ClientMessageSettings)[K]["payload"]>,
	): void {
		const response = ClientMessageSettings[messageType].payload.safeParse(data);
		if (!response.success) {
			// TODO: Consider logging invalid messages using the bot's logger
			console.warn("Invalid message type", messageType, response.error);
			return;
		}

		// TODO: Consider logging sent messages
		this.room.send(messageType, response.data);
	}

	static async prepareFromClient(
		world: number,
		client: {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			cambria: Cambria<any, any, any, any>;
			logger: Logger<never, boolean>;
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			walletClient: WalletClient<any, any, any, any>;
		},
	) {
		const room = await client.cambria.joinWorld(world);
		return new Bot(client.cambria, client.walletClient, room, client.logger);
	}

	static async prepare(botName: string, world: number, proxyUrl?: string) {
		const client = await Bot.createCharacter(botName, proxyUrl);
		return Bot.prepareFromClient(world, client);
	}

	static async createCharacter(botName: string, proxyUrl?: string) {
		const prettyStream = pretty({
			colorize: true,
			translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
			ignore: "pid,hostname",
			messageFormat: (
				log: { botName?: string; [key: string]: unknown },
				messageKey: string,
			) => {
				const msg = log[messageKey];
				const bot = log.botName || "BOT";
				return `${bot} - ${msg}`;
			},
		});

		const logger = pino(
			{
				level: process.env.LOG_LEVEL || "info",
				base: {
					botName,
				},
			},
			prettyStream,
		);
		const client = createClient(
			`./data/characters/${botName}/cookies.json`,
			{
				"User-Agent": new UserAgent().toString(),
			},
			proxyUrl,
		);

		const dataFilePath = `./data/characters/${botName}/data.json`;
		const file = Bun.file(dataFilePath);
		let accountData = {} as { privateKey: `0x${string}`; proxy?: string };

		logger.info(`${proxyUrl}`);

		if (await file.exists()) {
			logger.info(`Loading existing account data from ${dataFilePath}`);
			accountData = await file.json();
			if (proxyUrl && accountData.proxy !== proxyUrl) {
				logger.info(`Updating proxy in ${dataFilePath}`);
				accountData.proxy = proxyUrl;
				await Bun.write(dataFilePath, JSON.stringify(accountData, null, 2));
			}
		} else {
			logger.info(`Generating new account data, saving to ${dataFilePath}`);
			accountData = {
				privateKey: generatePrivateKey(),
				proxy: proxyUrl,
			};
			await Bun.write(dataFilePath, JSON.stringify(accountData, null, 2));
		}

		const walletClient = createWalletClient({
			chain: mainnet, // Or configure appropriate chain
			transport: http(),
			account: privateKeyToAccount(accountData.privateKey),
		});

		// Create Cambria instance, passing the logger and null for initial userProfile
		const cambria = new Cambria(walletClient, client, logger);

		try {
			// Attempt login using the new Cambria method
			const loginSuccess = await cambria.login(botName);

			if (!loginSuccess) {
				// Error already logged within cambria.login
				throw new Error(`Login failed for bot ${botName}. Check logs.`);
			}

			return { cambria, logger, walletClient };
		} catch (error) {
			// Error should have been logged by Cambria methods, but log here too for prepare context
			logger.error({ err: error }, `Failed to prepare bot ${botName}`);
			// Re-throw or handle the error appropriately
			throw error;
		}
	}
}
