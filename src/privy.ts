// import type { KyInstance } from "ky";
import { createClient, type KyInstance } from "./client";
import type { PrivyAuthenticateResponse } from "./privy.d";

export class Privy {
	constructor(
		private readonly appId: string,
		private readonly caId: string,
		private readonly client: KyInstance,
		private baseUrl: string,
	) {}

	updateBaseUrl(url: string) {
		this.baseUrl = url;
	}

	getAuthToken() {
		const cookies = this.client.jar.getCookiesSync(this.baseUrl);
		return cookies.find((cookie) => cookie.key === "privy-token");
	}

	async getMe() {
		const token = this.getAuthToken()?.value;
		if (!token) {
			throw new Error("No token found");
		}

		return this.client
			.post("https://privy.cambria.gg/api/v1/sessions", {
				json: { refresh_token: "deprecated" },
				headers: {
					accept: "application/json",
					"content-type": "application/json",
					"privy-app-id": this.appId,
					"privy-ca-id": this.caId,
					"privy-client": "react-auth:2.4.4",
					origin: this.baseUrl,
					authorization: `Bearer ${token}`,
				},
			})
			.json();
	}

	async logout(token: string) {
		return this.client
			.post("https://privy.cambria.gg/api/v1/sessions/logout", {
				headers: {
					accept: "application/json",
					"accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
					authorization: `Bearer ${token}`,
					"content-type": "application/json",
					priority: "u=1, i",
					"privy-app-id": this.appId,
					"privy-ca-id": this.caId,
					"privy-client": "react-auth:2.4.4",
					origin: this.baseUrl,
				},
				json: { refresh_token: "deprecated" },
			})
			.text();
	}

	async authenticate(message: string, signature: string, chainId = "eip155:1") {
		return await this.client
			.post<PrivyAuthenticateResponse>(
				"https://privy.cambria.gg/api/v1/siwe/authenticate",
				{
					headers: {
						accept: "application/json",
						"content-type": "application/json",
						"privy-app-id": this.appId,
						"privy-ca-id": this.caId,
						"privy-client": "react-auth:2.4.4",
						origin: this.baseUrl,
					},
					json: {
						message,
						signature,
						chainId,
						walletClientType: "rabby_wallet",
						connectorType: "injected",
						mode: "login-or-sign-up",
					},
				},
			)
			.json();
	}

	async init(address: string) {
		return await this.client
			.post<{
				nonce: string;
				address: string;
				expires_at: string;
			}>("https://privy.cambria.gg/api/v1/siwe/init", {
				headers: {
					accept: "application/json",
					"content-type": "application/json",
					"privy-app-id": this.appId,
					"privy-ca-id": this.caId,
					"privy-client": "react-auth:2.4.4",
					origin: this.baseUrl,
				},
				json: {
					address,
				},
			})
			.json();
	}
}
