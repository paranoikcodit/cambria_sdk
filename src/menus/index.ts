import { select } from "@inquirer/prompts";
import type { AnyBot, Bot, Cambria } from "../cambria";
import type { Logger } from "pino";
import type { WalletClient } from "viem";

export type HandlerContext = {
	proxies?: string[];
	clients?: {
		cambria: Cambria<any, any, any, any>;
		logger: Logger<never, boolean>;
		walletClient: WalletClient<any, any, any, any>;
	}[];
};

export function handler<Names>(
	name: Names,
	handler: (ctx: HandlerContext) => Promise<void>,
) {
	return {
		name,
		handler,
	};
}

export type Menu<T> = Parameters<
	typeof select<ReturnType<typeof handler<T>>>
>[0];

export async function runMenu<T>(menu: Menu<T>) {
	return await select(menu);
}
