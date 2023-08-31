import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message';

@Component({
	selector: 'message-list',
	templateUrl: './list.template.html',
})
export class MessageListComponent {
	constructor(
		// services
		public service: MessageService
	) {}
}
