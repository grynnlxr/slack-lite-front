import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Thread {
	id: string;
	label: string;
	locked: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class ThreadService {
	thread?: Thread;
	threads: Thread[] = [];
	onChange: EventEmitter<Thread> = new EventEmitter();

	constructor(
		// Services
		private http: HttpClient
	) {
		this.fetch();
	}

	fetch() {
		const request = this.http.get<Thread[]>('/api/v1/threads');
		request.subscribe((threads: Thread[]) => {
			this.threads = threads;
		});
		// TODO : gestion erreurs
	}

	change(id: string): boolean {
		const thread = this.threads.find((t) => t.id == id);
		if (thread) {
			this.onChange.emit(thread);
			this.thread = thread;
			return true;
		}
		return false;
	}
}
