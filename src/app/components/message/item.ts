import { Component, Input } from '@angular/core';
import { Message } from 'src/app/services/message';

@Component({
	selector: 'message-item',
	templateUrl: './item.template.html',
})
export class MessageItemComponent {
	@Input() data!: Message;
}
