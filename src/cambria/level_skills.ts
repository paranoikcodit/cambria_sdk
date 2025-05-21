import { atom, map } from "nanostores";
import { ServerMessage, type Bot } from ".";
import type { Account, Chain, RpcSchema, Transport } from "viem";
import { SkillType, type SkillType$1 } from "./room_schemas";
import { capitalize } from "./utils";

const calculateExperienceForLevel = (ln: number) => {
	const level = Math.max(1, Math.min(99, ln));
	let sn = 0;
	for (let cn = 1; cn < level; cn++) sn += Math.floor(cn + 300 * 2 ** (cn / 7));
	return Math.floor(sn / 4);
};

const getExperienceArray = () => {
	const ln = [...Array(99).keys()];
	const sn = Array(99);

	for (const cn of ln) {
		sn[cn] = calculateExperienceForLevel(cn + 1);
	}

	return sn;
};

const experienceArray = getExperienceArray();

const findLevel = (
	experience: number,
	start = 0,
	end = experienceArray.length,
): number => {
	const mid = Math.floor(start + (end - start) / 2);
	return end - start <= 1 || experience === experienceArray[mid]
		? mid + 1
		: (experienceArray[mid] || Number.MAX_VALUE) > experience
			? findLevel(experience, start, mid)
			: findLevel(experience, mid, end);
};

const getLevelForExperience = (experience: number) => {
	return Math.floor(findLevel(experience));
};

const getExperienceForLevel = (level: number): number => {
	if (level >= 99) {
		return experienceArray[99 - 1] ?? 13034431;
	}

	const normalizedLevel = Math.max(1, level);
	return Math.floor(experienceArray[normalizedLevel - 1] ?? 0);
};

const initializeSkillExperience = () => {
	const ln = {} as Record<SkillType, number>;

	for (const skill of Object.values(SkillType)) {
		ln[skill] = skill === "hitpoint" ? 1154 : 0;
	}

	return ln;
};

const initializeSkillLevels = () => {
	const ln = {} as Record<
		SkillType,
		{ tempLevel: number; currentLevel: number }
	>;

	for (const skill of Object.values(SkillType)) {
		ln[skill] = {
			tempLevel: 1,
			currentLevel: 1,
		};
	}

	ln.hitpoint = {
		tempLevel: 10,
		currentLevel: 10,
	};

	return ln;
};

export class LevelSkills<
	transport extends Transport,
	chain extends Chain,
	account extends Account,
	rpcSchema extends RpcSchema,
> {
	constructor(
		private readonly bot: Bot<transport, chain, account, rpcSchema>,
		private readonly userSkills = map<
			Record<SkillType, { tempLevel: number; currentLevel: number }>
		>({} as Record<SkillType, { tempLevel: number; currentLevel: number }>),
	) {
		this.bot.cambria.getMe().then((r) => {
			this.userSkills.set(r.levels);
		});

		this.bot.room.onMessage(ServerMessage.UpdatePlayerExperience, (cn) => {
			for (const [skill, value] of Object.entries(cn)) {
				if (capitalize(skill) in SkillType) {
					this.setExperience(skill as SkillType, value as number);
				}
			}
		});
	}

	getSkills() {
		return this.userSkills.get();
	}

	getSkill(name: SkillType) {
		return this.userSkills.get()[name];
	}

	setExperience(name: SkillType, experience: number) {
		const level = getLevelForExperience(experience);
		const { tempLevel, currentLevel } = this.userSkills.get()[name];

		if (level !== currentLevel) {
			this.userSkills.setKey(name, {
				tempLevel: tempLevel,
				currentLevel: level,
			});
		}
	}

	setBoostedLevel(name: SkillType, boostedLevel: number) {
		const skills = this.userSkills.get();
		const currentSkill = skills[name];

		if (currentSkill.tempLevel !== boostedLevel) {
			this.userSkills.setKey(name, {
				...currentSkill,
				tempLevel: boostedLevel,
			});
		}
	}

	subscribe(
		callback: (
			skills: Record<SkillType, { tempLevel: number; currentLevel: number }>,
		) => void,
	) {
		return this.userSkills.subscribe(callback);
	}
}
