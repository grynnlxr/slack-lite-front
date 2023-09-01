import { Injectable } from '@angular/core';

export interface User {
	id: string;
	name: string;
	avatar: string;
}

@Injectable({
	providedIn: 'root',
})
export class UserService {
	public user: User | null = null;
	private users: User[] = [
		{
			id: '6d6ba1eb-3f9f-41b3-88af-fd3a959faeaa',
			name: 'Angelisium',
			avatar: '/assets/alexis.ava.png',
		},
		{
			id: 'e6d8b859-22ea-4d4d-a958-f7677a23a38b',
			name: 'Alice',
			avatar: '/assets/alice.ava.png',
		},
	];

	constructor() {
		const username = localStorage.getItem('username');
		if (username) {
			this.login(username);
		}
	}

	get(id: string) {
		return this.users.find((u) => u.id == id);
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

	logout() {
		localStorage.removeItem('username');
		this.user = null;
	}
}
