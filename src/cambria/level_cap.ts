import { atom, map } from "nanostores";
import { ServerMessage, type Bot } from ".";
import type { Account, Chain, RpcSchema, Transport } from "viem";
import type { SkillType } from "./room_schemas";

export class LevelCap<
	transport extends Transport,
	chain extends Chain,
	account extends Account,
	rpcSchema extends RpcSchema,
> {
	constructor(
		private readonly bot: Bot<transport, chain, account, rpcSchema>,
		private readonly levelCap = map<Record<SkillType, number>>(
			{} as Record<SkillType, number>,
		),
	) {
		this.bot.cambria.getMe().then((r) => {
			this.levelCap.set(r.levelCap);
		});

		this.bot.room.onMessage(
			ServerMessage.RaisePlayerLevelCap,
			(cn: Record<SkillType, number>) => {
				const currentLevelCaps = this.levelCap.get();
				this.levelCap.set({
					...currentLevelCaps,
					...cn,
				});
			},
		);
	}

	get() {
		return this.levelCap.get();
	}

	subscribe(callback: (skills: Record<SkillType, number>) => void) {
		return this.levelCap.subscribe(callback);
	}
}
