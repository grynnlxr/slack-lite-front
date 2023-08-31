import { Injectable } from '@angular/core';
import { User, UserService } from './user';
import { Thread, ThreadService } from './thread';
import { HttpClient } from '@angular/common/http';

export interface Message {
	id: string;
	content: string;
	author: User;
	date: string;
}

@Injectable({
	providedIn: 'root',
})
export class MessageService {
	messages: Message[] = [];

	constructor(
		// Services
		private userService: UserService,
		private threadService: ThreadService,
		private http: HttpClient
	) {
		threadService.onChange.subscribe((thread: Thread) => {
			this.fetch(thread.id);
		});
	}

	fetch(tid: string, offset: number = 0) {
		// @ts-ignore
		const options = new URLSearchParams({
			thread: tid,
			offset,
		});
		const url = `/api/v1/messages?${options}`;
		const request = this.http.get<Message[]>(url);
		request.subscribe((messages: Message[]) => {
			if (offset < 1) {
				this.messages = [];
			}
			this.messages.push(...messages);
		});
		// TODO : ajouter la gestion des erreurs serveur
	}

	create(content: string) {
		const user = this.userService.user;
		const thread = this.threadService.thread;
		if (!user || !thread) {
			return;
		}
		const url = `/api/v1/messages`;
		const body = { content, thread: thread.id };
		const request = this.http.post<Message>(url, body, {
			headers: {
				Authorization: user.id,
			},
		});
		request.subscribe((message: Message) => {
			this.messages.push(message);
		});
		// TODO : ajouter la gestion des erreurs serveur
	}

	delete(id: string) {
		const user = this.userService.user;
		if (!user) {
			return;
		}
		const url = `/api/v1/messages/${id}`;
		const request = this.http.delete<Partial<Message>>(url, {
			headers: {
				Authorization: user.id,
			},
		});
		request.subscribe((message: Partial<Message>) => {
			this.messages = this.messages.filter((m) => m.id != message.id);
		});
		// TODO : ajouter la gestion des erreurs serveur
	}
}
