import { Component } from '@angular/core';
import { Thread, ThreadService } from 'src/app/services/thread';

@Component({
	selector: 'thread-list',
	templateUrl: './list.template.html',
})
export class ThreadListComponent {
	constructor(
		// services
		public service: ThreadService
	) {}

	changeTo(thread: Thread) {
		this.service.change(thread.id);
	}
}
