import type { Account, Chain, RpcSchema, Transport } from "viem";
import type { Bot } from "./bot";
import { atom } from "nanostores";

export class Inventory<
	transport extends Transport,
	chain extends Chain,
	account extends Account,
	rpcSchema extends RpcSchema,
> {
	constructor(
		private readonly bot: Bot<transport, chain, account, rpcSchema>,
		private readonly inventory = atom<
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
	) {}

	getItemsByType(types_: string[] | string) {
		const types = Array.isArray(types_) ? types_ : [types_];
		const inventory = this.inventory.get();

		return inventory.filter((r) => types.includes(r.type));
	}

	get() {
		return this.inventory.get();
	}

	subscribe(
		callback: (
			items: readonly {
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
			}[],
		) => void,
	) {
		return this.inventory.subscribe(callback);
	}
}
