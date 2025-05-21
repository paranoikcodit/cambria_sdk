import { Solver } from "capsolver-npm";
import type { Account, Chain, RpcSchema, Transport, WalletClient } from "viem";
import type { ChallengeData } from "./pow";
import forge from "node-forge";
import type { KyInstance } from "../client";
import { Client, type Room } from "colyseus.js";
import type { SkillType } from "./room_schemas";
import { Privy } from "../privy";
import { solveChallenge } from ".";
import { setTimeout as promisedSetTimeout } from "node:timers/promises";
import config from "../../data/config.toml";
// @ts-ignore - Assuming pino is installed in the project
import type { Logger } from "pino"; // Import pino Logger type
import type { MapSchema } from "@colyseus/schema";

const buildMessage = (
	baseUrl: string,
	address: `0x${string}`,
	nonce: string,
	chainId = 1,
) => `${baseUrl.replace("https", "").replace("http", "").replace("://", "").replace("/", "")} wants you to sign in with your Ethereum account:
${address}

By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.

URI: ${baseUrl}
Version: 1
Chain ID: ${chainId}
Nonce: ${nonce}
Issued At: ${new Date().toISOString()}
Resources:
- https://privy.io`;

export type DisplayNameType = "name" | "ens";

export interface CharacterLayers {
	character_layers: string[];
}
const RSA_MODULUS =
	"LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJDZ0tDQVFFQXRYeVBLU2NkdXRRa20rUW1DQTY4cDd3MmVhSVFVN3hFV0ZXNmlwampqKzVyQjJLMnhiWjQKTk4rN2pFSkl2b1RTb3ByZnl1aVd2WUV6RGc4Y0VrcHVxd3NpcWpJSzVFTHp3dzc4QXZDYjdsR0FBMVVRMWZmZQpLZnZ2V1hZUXhkUTBCcXU5OG1IZHFwNTVxOHVyZ1AzbWIzNmRlL1RMK3NpTkNYZXhtOWhFbWZ2bWtUZFNvclZjCnp0UnpETTA4d3RkOGRrdXZPem5xTDhNSk40L01HbXdWYmV5Q3BZQUxtdHFRWEM4aUZ5VG5Edm5oRk8zWi9sUzQKR0FnZ0tlc1MzenhjMldjT3lMR1NqZ3BmYzFpSWtqbU1YTmgrbnM2bjRrL09XZ09FUkp3TURnUnNoSUFERDd6WAo4U05SWmYyM0ZZU2JNQjdzdW1JNjVDL3lVZldXU09xY1FRSURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0=";
const RSA_MODLUES = () =>
	btoa(String.fromCharCode(...new TextEncoder().encode(RSA_MODULUS)));

export class Cambria<
	transport extends Transport = Transport,
	chain extends Chain = Chain,
	accountOrAddress extends Account = Account,
	rpcSchema extends RpcSchema = RpcSchema,
> {
	private privyLobby: Privy;
	private privyPlay: Privy;
	private solver: Solver;
	private readonly logger: Logger;

	constructor(
		private readonly walletClient: WalletClient<
			transport,
			chain,
			accountOrAddress,
			rpcSchema
		>,
		public client: KyInstance,
		private readonly passedLogger: Logger,
		public userProfile: {
			levels: Record<SkillType, { tempLevel: number; currentLevel: number }>;
		} | null = null,
	) {
		this.logger = passedLogger;

		this.logger.info(`Wallet Address: ${walletClient.account.address}`);

		// Create Privy instances
		const privyLobby = new Privy(
			config.PRIVY_APP_ID,
			config.PRIVY_CA_ID,
			client,
			"https://lobby.goldrush.cambria.gg/",
		);
		const privyPlay = new Privy(
			config.PRIVY_APP_ID,
			config.PRIVY_CA_ID_2,
			client,
			"https://play.goldrush.cambria.gg",
		);

		// Create Solver
		const solver = new Solver({ apiKey: config.CAPSOLVER_API_KEY });

		this.privyLobby = privyLobby;
		this.privyPlay = privyPlay;
		this.solver = solver;
	}

	async createCode(code: string) {
		return await this.client.post(
			"https://lobby-api.goldrush.cambria.gg/invitation/code",
			{
				headers: {
					accept: "*/*",
					"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
					"content-type": "application/json",
					priority: "u=1, i",
				},
				json: { code },
			},
		);
	}

	async login(username?: string): Promise<boolean> {
		this.logger.info("Attempting login...");
		try {
			this.logger.info(
				"Already logged in, verifying session with privyPlay.getMe()...",
			);
			await this.privyPlay.getMe();
			this.logger.info("Session verified.");
			return true;
		} catch (e) {
			this.logger.warn(
				{ err: e },
				"Session verification failed, proceeding with full login",
			);
		}

		this.logger.info("Starting full authentication process...");
		try {
			this.logger.info("Initiating Privy Lobby auth...");
			const lobbyInitRes = await this.privyLobby.init(
				this.walletClient.account.address,
			);
			const lobbyMessage = buildMessage(
				"https://lobby.goldrush.cambria.gg",
				this.walletClient.account.address,
				lobbyInitRes.nonce,
			);
			const lobbySignature = await this.walletClient.signMessage({
				account: this.walletClient.account,
				message: lobbyMessage,
			});
			await this.privyLobby.authenticate(lobbyMessage, lobbySignature);
			this.logger.info("Privy Lobby auth successful.");

			this.logger.info("Fetching PoW challenge...");
			const powChallenge = await this.getPowChallenge();
			this.logger.info("Solving PoW challenge...");
			const powSolution = solveChallenge(powChallenge);
			if (!powSolution) {
				this.logger.error("Failed to solve PoW challenge.");
				throw new Error("Failed to solve PoW challenge.");
			}
			this.logger.info("Submitting PoW solution...");
			const isSolved = await this.solvePowChallenge(
				powChallenge.challengeId,
				powChallenge.difficulty,
				powSolution,
			);
			if (!isSolved) {
				this.logger.error("PoW solution rejected by server.");
				throw new Error("PoW solution rejected by server.");
			}
			this.logger.info("Verifying PoW challenge solution...");
			const isVerified = await this.verifyPowChallenge(
				powChallenge.challengeId,
			);
			if (!isVerified) {
				this.logger.error("PoW challenge verification failed.");
				throw new Error("PoW challenge verification failed.");
			}
			this.logger.info("PoW challenge passed.");

			this.logger.info("Fetching user profile...");
			const { display_name_type } = await this.getMe();

			if (!display_name_type) {
				if (!username) {
					throw new Error("Username is required");
				}

				this.logger.info("Checking username...");
				const usernameCheck = await this.checkUsername(username);

				if (usernameCheck) {
					this.logger.info("Updating username...");
					await this.updateUsername(username);
					await this.updateCharacter(["color3", "eyes1", "hair1", "palette_8"]);
				}
			}
			this.logger.info("User profile fetched.");

			this.logger.info("Initiating Privy Play auth...");
			await promisedSetTimeout(60000);

			const playInitRes = await this.privyPlay.init(
				this.walletClient.account.address,
			);
			const playMessage = buildMessage(
				"https://play.goldrush.cambria.gg",
				this.walletClient.account.address,
				playInitRes.nonce,
				2741,
			);
			const playSignature = await this.walletClient.signMessage({
				account: this.walletClient.account,
				message: playMessage,
			});
			await this.privyPlay.authenticate(
				playMessage,
				playSignature,
				"eip155:2741",
			);
			this.logger.info("Privy Play auth successful.");

			this.logger.info("Solving Turnstile for Play URL...");
			const playToken = await this.solver
				.turnstileproxyless({
					websiteKey: "0x4AAAAAAA2MCFecQyBsUnC7",
					websiteURL: "https://play.goldrush.cambria.gg",
				})
				.then((r) => r.token);
			if (!playToken) {
				this.logger.error("Failed to solve Turnstile for Play URL.");
				throw new Error("Failed to solve Turnstile for Play URL.");
			}
			this.logger.info("Turnstile solved.");

			this.updateClient(
				this.client.extend({
					headers: {
						"cf-turnstile-response": playToken,
					},
				}),
			);
			this.logger.info("Client updated with Turnstile token.");

			this.logger.info("Login process completed successfully.");
			return true;
		} catch (error) {
			this.logger.error({ err: error }, "Login failed");
			return false;
		}
	}

	async getPowChallenge() {
		const response = await this.client
			.get("https://lobby-api.goldrush.cambria.gg/auth/pow", {
				searchParams: {
					endpoint: "verifySignature",
				},
				headers: {
					accept: "*/*",
					priority: "u=1, i",
				},
			})
			.json<
				ChallengeData & {
					challengeId: string;
					endpoint: "verifySignature";
					remoteAddress: string;
				}
			>();

		return response;
	}

	async solvePowChallenge(
		challengeId: string,
		difficulty: number,
		solution: string,
	) {
		const response = await this.client
			.post("https://lobby-api.goldrush.cambria.gg/auth/pow", {
				headers: {
					accept: "*/*",
					"content-type": "application/json",
					priority: "u=1, i",
				},
				json: {
					challengeId,
					difficulty,
					solution,
				},
			})
			.text();

		return response === "null";
	}

	async verifyPowChallenge(challengeId: string) {
		const response = await this.client
			.get("https://lobby-api.goldrush.cambria.gg/auth/verify", {
				searchParams: {
					powChallengeId: challengeId,
				},
				headers: {
					accept: "*/*",
					priority: "u=1, i",
				},
			})
			.text();

		return response === "null";
	}

	async checkUsername(username: string) {
		return this.client
			.get("https://lobby-api.goldrush.cambria.gg/user/username", {
				searchParams: { username },
			})
			.json();
	}

	async logout() {
		this.logger.info("Logging out...");
		return this.client
			.delete("https://lobby-api.goldrush.cambria.gg/auth/logout")
			.text();
	}

	async checkInvintation() {
		return this.client
			.get("https://lobby-api.goldrush.cambria.gg/invitation/check")
			.json()
			.then((r) => (r as { invited: boolean }).invited);
	}

	async getMe(): Promise<{
		player_name: string;
		levels: Record<SkillType, { tempLevel: number; currentLevel: number }>;
		levelCap: Record<SkillType, number>;
		last_online?: number;
		display_name_type?: DisplayNameType;
		position: { x: number; y: number };
		tutorial_island_completed: boolean;
	}> {
		if (!this.userProfile) {
			this.logger.info("Fetching current user profile...");
			this.userProfile = await this.client
				.get<{
					levels: Record<
						SkillType,
						{ tempLevel: number; currentLevel: number }
					>;
					position: { x: number; y: number };
					tutorial_island_completed: boolean;
				}>("https://lobby-api.goldrush.cambria.gg/user/current")
				.json();
		} else {
			this.logger.debug("Using cached user profile.");
		}

		return this.userProfile as {
			player_name: string;
			levels: Record<SkillType, { tempLevel: number; currentLevel: number }>;
			levelCap: Record<SkillType, number>;
			position: { x: number; y: number };
			tutorial_island_completed: boolean;
		};
	}

	async updateClient(client: KyInstance) {
		this.logger.debug("Updating KyInstance client...");
		this.client = client;
	}

	async updateUsername(playerName: string) {
		const response = await this.client
			.put("https://lobby-api.goldrush.cambria.gg/user/username", {
				headers: {
					accept: "*/*",
					"sec-ch-ua":
						'"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": '"macOS"',
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-site",
				},
				json: {
					display_name_type: "name",
					player_name: playerName,
				},
			})
			.json();

		return response;
	}

	async updateCharacter(layers: string[]) {
		this.logger.info({ layers }, "Updating character...");
		const response = await this.client
			.put("https://lobby-api.goldrush.cambria.gg/user/character", {
				headers: {
					accept: "*/*",
					"content-type": "application/json",
					priority: "u=1, i",
				},
				json: {
					character_layers: layers,
				},
			})
			.json();

		return response;
	}

	async joinToWorld(key: string) {
		this.logger.info({ inviteCode: key }, "Validating invite code...");
		return (
			(await this.client
				.post("https://lobby-api.goldrush.cambria.gg/invitation/validate", {
					json: { code: key },
				})
				.text()) === "null"
		);
	}

	private static encrypt(publicKey: string, plainText: string) {
		const symmetricKey = forge.random.getBytesSync(16);
		const iv = forge.random.getBytesSync(12);

		const cipher = forge.cipher.createCipher("AES-GCM", symmetricKey);
		cipher.start({ iv });
		cipher.update(forge.util.createBuffer(plainText));
		cipher.finish();

		const encryptedData = cipher.output.getBytes();
		const tag = cipher.mode.tag.getBytes();

		const encryptedKey = forge.pki
			.publicKeyFromPem(publicKey)
			.encrypt(symmetricKey, "RSA-OAEP");

		return {
			encryptedData: forge.util.encode64(encryptedData),
			encryptedKey: forge.util.encode64(encryptedKey),
			iv: forge.util.encode64(iv),
			tag: forge.util.encode64(tag),
		};
	}

	private static getEncClientOptionsData() {
		const payload = {
			rsaExponent: (65537).toString(),
			turnstileTokenHash: null,
			dns: "https://a6d8d6e89d1482f67d0719ad10b22985@o4509178168934400.ingest.us.sentry.io/4509178173259776",
		};

		const data = JSON.stringify(payload);
		const RSA_PUBLIC_KEY = atob(
			"LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUF6WWJ1L2ZWa1N1QlpMTkYrUVdsZwpBRzBJY1RadDF4eEVmaDRTMFkzdS9jRDVMV3NWeE1HREdjeFVUOC9JSjJ1SUZHT1RXaVhqRC8zMFNNL21nU2FmCnBHOFVKc1d4MVJ5ejJtcnV1ZkdhRWZEY2htTDhYSFNDbDFqWElkY1k5d2RDTitQcm40bEl2Ukh6SUppbWJxMWEKUE1FN0M2enRCYnlPNTkyOHdjSnZkV2FKSy8xLzM1Q3BYVlMzejB2T3lYczlwd2l5bHZDWmhkZVIxMThkVWZyVgoyV2RUUmN2TDg0cnZHcWtPbGxhMkNmUVk0c3lBZnNCWk9qTjBhRkEyc3hjRXgxbmJvY1pFT2NHR2sxYUtqbml2CkNGQVREMHM2cVlSbnZuTFpCTkdzbUovQVpoR3pHdDBnMU00THVSdlJCa0N2NWowZ1RhN056TU9sTTNZWW4yalYKdktRQk5PaVVGbHFIS3dtN3NFTUcvbWJETGFVWkpxRmtCbEdVTnFSaXBXMzlrdlhTNlRFZ3hwZ0JHd3RsdU5sagpLMHlTWnhwN3I2L3J1azMyMTB1VFJ1SlVMOTh3czYwc2VaQVJ3YnJsWExUY2RTOU1ON0djNytlWkFDVDJLVmhrCnlOblhLMytwUnorOXJZSklUdXphZVVyQjMzQnB1bERSaUcveGhTd0FmU0ZjTkdoK3FlRHQ4ODM1YkNhNnc4MXQKbEJtMHlBaEY2UUpPaUFuakVybXlFK0hKajlyMTNNQmVPVHNYeEJlanc4QndjaDVJSVlyaExRQ21BcFZ0L1ZqbQo4c1FOazMrZUpsNThBZmw4emhMYjRSdjFyTGFid29uQjllVzllT3RsZTVwVTNwZzBlblg0UldOZDZleUFXR29zCnJaNnkwdGg3enk0S3dxbXQzL3JFRkcwQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo=",
		);

		const encryptData = Cambria.encrypt(RSA_PUBLIC_KEY, data);
		return btoa(JSON.stringify(encryptData));
	}

	connectToWs(processId: string, sessionId: string) {
		this.logger.info({ processId, sessionId }, "Connecting to WebSocket...");
		return new CambriaWebSocket<transport, chain, accountOrAddress, rpcSchema>(
			this,
			processId,
			sessionId,
		);
	}

	async joinWorld(world: number): Promise<
		Room<{
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
		}>
	> {
		const world_ = world - 1;

		const worldUrl = `wss://world${world_ === 0 ? "" : world_}.goldrush.cambria.gg`;
		this.logger.info({ worldUrl, world }, "Attempting to join world...");

		const colyseusClient = new Client(worldUrl, {
			headers: {
				cookie: this.client.jar.getCookieStringSync(
					worldUrl.replace("wss", "https"),
				),
			},
		});

		colyseusClient.auth.token = this.walletClient.account.address;

		try {
			console.log({
				chainId: "2741",
				isExtensionBoolean: ".eth",
				proxyWalletAddress: null,
				rsaModulus:
					"TFMwdExTMUNSVWRKVGlCU1UwRWdVRlZDVEVsRElFdEZXUzB0TFMwdENrMUpTVUpEWjB0RFFWRkZRWFJZZVZCTFUyTmtkWFJSYTIwclVXMURRVFk0Y0RkM01tVmhTVkZWTjNoRlYwWlhObWx3YW1wcUt6VnlRakpMTW5oaVdqUUtUazRyTjJwRlNrbDJiMVJUYjNCeVpubDFhVmQyV1VWNlJHYzRZMFZyY0hWeGQzTnBjV3BKU3pWRlRIcDNkemM0UVhaRFlqZHNSMEZCTVZWUk1XWm1aUXBMWm5aMlYxaFpVWGhrVVRCQ2NYVTVPRzFJWkhGd05UVnhPSFZ5WjFBemJXSXpObVJsTDFSTUszTnBUa05ZWlhodE9XaEZiV1oyYld0VVpGTnZjbFpqQ25wMFVucEVUVEE0ZDNSa09HUnJkWFpQZW01eFREaE5TazQwTDAxSGJYZFdZbVY1UTNCWlFVeHRkSEZSV0VNNGFVWjVWRzVFZG01b1JrOHpXaTlzVXpRS1IwRm5aMHRsYzFNemVuaGpNbGRqVDNsTVIxTnFaM0JtWXpGcFNXdHFiVTFZVG1ncmJuTTJialJyTDA5WFowOUZVa3AzVFVSblVuTm9TVUZFUkRkNldBbzRVMDVTV21ZeU0wWlpVMkpOUWpkemRXMUpOalZETDNsVlpsZFhVMDl4WTFGUlNVUkJVVUZDQ2kwdExTMHRSVTVFSUZKVFFTQlFWVUpNU1VNZ1MwVlpMUzB0TFMwPQ==",
				version: "2.1.51",
				specialOptions: Cambria.getEncClientOptionsData(),
				walletAddress: this.walletClient.account.address,
			});

			const room = await colyseusClient.joinById<{
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
			}>("cambria-world-room", {
				chainId: "2741",
				isExtensionBoolean: ".eth",
				proxyWalletAddress: null,
				rsaModulus:
					"TFMwdExTMUNSVWRKVGlCU1UwRWdVRlZDVEVsRElFdEZXUzB0TFMwdENrMUpTVUpEWjB0RFFWRkZRWFJZZVZCTFUyTmtkWFJSYTIwclVXMURRVFk0Y0RkM01tVmhTVkZWTjNoRlYwWlhObWx3YW1wcUt6VnlRakpMTW5oaVdqUUtUazRyTjJwRlNrbDJiMVJUYjNCeVpubDFhVmQyV1VWNlJHYzRZMFZyY0hWeGQzTnBjV3BKU3pWRlRIcDNkemM0UVhaRFlqZHNSMEZCTVZWUk1XWm1aUXBMWm5aMlYxaFpVWGhrVVRCQ2NYVTVPRzFJWkhGd05UVnhPSFZ5WjFBemJXSXpObVJsTDFSTUszTnBUa05ZWlhodE9XaEZiV1oyYld0VVpGTnZjbFpqQ25wMFVucEVUVEE0ZDNSa09HUnJkWFpQZW01eFREaE5TazQwTDAxSGJYZFdZbVY1UTNCWlFVeHRkSEZSV0VNNGFVWjVWRzVFZG01b1JrOHpXaTlzVXpRS1IwRm5aMHRsYzFNemVuaGpNbGRqVDNsTVIxTnFaM0JtWXpGcFNXdHFiVTFZVG1ncmJuTTJialJyTDA5WFowOUZVa3AzVFVSblVuTm9TVUZFUkRkNldBbzRVMDVTV21ZeU0wWlpVMkpOUWpkemRXMUpOalZETDNsVlpsZFhVMDl4WTFGUlNVUkJVVUZDQ2kwdExTMHRSVTVFSUZKVFFTQlFWVUpNU1VNZ1MwVlpMUzB0TFMwPQ==",
				version: "2.1.53",
				specialOptions: Cambria.getEncClientOptionsData(),
				walletAddress: this.walletClient.account.address,
			});
			this.logger.info({ world, roomId: room.id }, "Successfully joined world");
			return room;
		} catch (error) {
			this.logger.error({ err: error, world }, "Failed to join world");
			throw error;
		}
	}
}
