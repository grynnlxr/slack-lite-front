import { Component, Input } from '@angular/core';
import { Thread } from 'src/app/services/thread';

@Component({
	selector: 'thread-item',
	templateUrl: './item.template.html',
})
export class ThreadItemComponent {
	@Input() data!: Thread;

	edit(event: MouseEvent) {
		event.stopPropagation();
	}

	remove(event: MouseEvent) {
		event.stopPropagation();
	}
}
