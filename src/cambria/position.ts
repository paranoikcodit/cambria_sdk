import { atom } from "nanostores";
import type { AnyBot } from "./bot";

export class Position {
	constructor(
		private readonly bot: AnyBot,
		private readonly position = atom({ x: 0, y: 0 }),
	) {
		this.bot.cambria.getMe().then((r) => {
			this.position.set({ x: r.position?.x, y: r.position?.y });
		});

		this.bot.room.onStateChange((state) => {
			const player = state.players.get(this.bot.walletClient.account.address);
			if (player) {
				this.position.set({ x: player.x, y: player.y });
			}
		});
	}

	subscribe(callback: (position: { x: number; y: number }) => void) {
		return this.position.subscribe(callback);
	}

	get() {
		return this.position.get();
	}
}
