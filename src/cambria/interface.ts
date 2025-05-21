import { atom, map } from "nanostores";
import type { AnyBot } from "./bot";
import type { ModalTypes } from "./room_schemas";
import { ServerMessage } from "./messages";

export class Interface {
	constructor(
		public readonly bot: AnyBot,
		public readonly openedInterface = map<
			Record<ModalTypes, { data: Record<string, any> }>
		>({} as Record<ModalTypes, { data: Record<string, any> }>),
	) {
		this.bot.room.onMessage(ServerMessage.OpenInterface, (message) => {
			this.openedInterface.setKey(message.type, {
				data: message.data,
			});
		});

		this.bot.room.onMessage(ServerMessage.UpdateInterface, (message) => {
			this.openedInterface.setKey(message.type, {
				data: message.data,
			});
		});
	}

	get(type: ModalTypes) {
		return this.openedInterface.get()[type];
	}

	openAndWait(objectId: string) {
		this.bot.sendMessage("interactObject", objectId);

		return new Promise<void>((resolve) => {
			this.openedInterface.subscribe((interface_) => {
				resolve();
			});
		});
	}
}
