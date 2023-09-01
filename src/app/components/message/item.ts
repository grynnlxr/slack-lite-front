import { Component, Input } from '@angular/core';
import { Message, MessageService } from 'src/app/services/message';

@Component({
	selector: 'message-item',
	templateUrl: './item.template.html',
})
export class MessageItemComponent {
	@Input() data!: Message;

	constructor(
		// service
		private service: MessageService
	) {}

	remove() {
		this.service.delete(this.data.id);
	}
}
