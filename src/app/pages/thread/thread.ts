import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user';

@Component({
	selector: 'app-thread',
	templateUrl: './template.html',
})
export class ThreadPage {
	constructor(
		// service
		public service: UserService
	) {}
}
