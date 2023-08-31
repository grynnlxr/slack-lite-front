import { Injectable } from '@angular/core';

export interface User {
	id: string;
	name: string;
}

@Injectable({
	providedIn: 'root',
})
export class UserService {
	public user?: User;
	private users: User[] = [
		{ id: '6d6ba1eb-3f9f-41b3-88af-fd3a959faeaa', name: 'Angelisium' },
		{ id: 'e6d8b859-22ea-4d4d-a958-f7677a23a38b', name: 'Alice' },
	];

	constructor() {
		const username = localStorage.getItem('username');
		if (username) {
			this.login(username);
		}
	}

	login(name: string): boolean {
		const user = this.users.find((u) => u.name == name);
		if (user) {
			localStorage.setItem('username', user.name);
			this.user = user;
			return true;
		}
		return false;
	}
}
