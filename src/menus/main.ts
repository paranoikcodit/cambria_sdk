import { input, rawlist, select } from "@inquirer/prompts";
import { select as multiselect } from "inquirer-select-pro";
import { handler, type HandlerContext, type Menu } from ".";
import type { Transport, Chain, Account, RpcSchema } from "viem";
import { Bot, type AnyBot } from "../cambria";
import { setTimeout } from "node:timers/promises";
import { HTTPError } from "ky";
import { startWorker } from "../bots/autofarmer";

export const MainMenu: Menu<
	"create_new_bot" | "call_function_of_bots" | "start_automated_grind"
> = {
	message: "Select an option",
	choices: [
		{
			name: "Create a new bots",
			value: {
				name: "create_new_bot",
				handler: async ({ proxies }: HandlerContext) => {
					if (!proxies) {
						throw new Error("Proxies are not set");
					}

					const botLength = Number.parseInt(
						await input({
							message: "How many bots do you want to create?",
						}),
					);

					const botName = await input({
						message: "Enter the name of the bot",
					});

					await Promise.all(
						new Array(botLength).fill(null).map(async (_, i_) => {
							const currentProxy = proxies[i_ % proxies.length];
							const botName_ = `${botName}_${i_ + 1}`;
							const proxy = currentProxy;
							const bot = await Bot.createCharacter(botName_, proxy);
							if (!bot) return;
						}),
					);
				},
			},
		},
		{
			name: "Start automated grind of bots",
			value: {
				name: "start_automated_grind",
				handler: async ({ clients }: HandlerContext) => {
					if (!clients) {
						throw new Error("Bots are not set");
					}

					const selection = await multiselect({
						message: "Select a bots",
						options: async () => {
							return await Promise.all(
								clients.map(async (client, index) => {
									const me = await client.cambria.getMe();

									return {
										name: me.player_name,
										value: client,
									};
								}),
							);
						},
					});
					const world = await input({
						message: "Enter the world",
					});

					selection.map(async (r) => {
						const bot = await Bot.prepareFromClient(Number.parseInt(world), r);
						startWorker(bot);
					});
				},
			},
		},
		{
			name: "Call a function of bots",
			value: handler(
				"call_function_of_bots",
				async ({ clients }: HandlerContext) => {
					if (!clients) {
						throw new Error("Bots are not set");
					}

					const selection = await select({
						message: "Select a function",
						choices: [
							{
								name: "Accept invite to world",
								value: "accept_invite_to_world",
							},
							{ name: "Change character skin", value: "change_character_skin" },
						],
					});

					switch (selection) {
						case "accept_invite_to_world": {
							const inviteKey = await input({
								message: "Enter the key for access",
							});
							try {
								await Promise.all(
									clients.map(({ cambria }) => cambria.joinToWorld(inviteKey)),
								);
							} catch (error) {
								if (error instanceof HTTPError) {
									console.log(await error.response.text());
								}
							}
							break;
						}
						case "change_character_skin": {
							console.log("not implemented yet");
							break;
						}
					}
				},
			),
		},
		// {
		// 	name: "Start autonomous of Bots",
		// 	value: handler(
		// 		"start_autonomous_bots",
		// 		async ({ clients }: HandlerContext) => {
		// 			if (!clients) {
		// 				throw new Error("Clients are not set");
		// 			}

		// 			await Promise.all(clients.map((client) => client.start()));
		// 		},
		// 	),
		// },
		// {
		// 	name: "Start following bots",
		// 	value: async (bots) => {},
		// },
		// {
		// 	name: "Exit",
		// 	value: async () => {
		// 		process.exit(0);
		// 	},
		// },
	],
};

export default MainMenu;
