import type { Logger } from "pino";
import type { Cambria } from "./cambria";
import { Bot, type AnyBot } from "./cambria/bot";
import { runMenu } from "./menus";
import MainMenu from "./menus/main";
import type { WalletClient } from "viem";

export async function loadProxies() {
	const file = Bun.file("./data/proxies.txt");

	if (!(await file.exists())) {
		throw new Error("Proxies file not exists");
	}

	return await file.text().then((r) => r.split("\n").map((r) => r.trim()));
}

export async function loadCharacters() {
	const files = new Bun.Glob("./data/characters/**");

	const characters: Set<string> = new Set();

	for await (const file of files.scan()) {
		const params = file.split("/");
		const name = params[params.length - 2];

		characters.add(name as string);
	}

	return Array.from(characters);
}

export async function loadClients() {
	const characters = await loadCharacters();

	const bots: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		cambria: Cambria<any, any, any, any>;
		logger: Logger<never, boolean>;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		walletClient: WalletClient<any, any, any, any>;
	}[] = [];

	for (const character of characters) {
		const bot = await Bot.createCharacter(character);
		bots.push(bot);
	}

	return bots;
}

async function main() {
	const clients = await loadClients();
	const proxies = await loadProxies();

	const { name, handler } = await runMenu(MainMenu);
	switch (name) {
		case "create_new_bot": {
			await handler({ proxies });
			break;
		}
		case "call_function_of_bots": {
			await handler({ clients });
			break;
		}
		case "start_automated_grind": {
			await handler({ clients });
			break;
		}
	}
}

main();
