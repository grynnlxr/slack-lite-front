import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserService } from 'src/app/services/user';

@Component({
	selector: 'app-credential',
	templateUrl: './template.html',
})
export class CredentialPage {
	name: string = '';

	constructor(private service: UserService) {}

	onSubmit(form: NgForm) {
		const name = form.value.name;
		if (!this.service.login(name)) {
			// TODO : afficher une popup "utilisateur inconnu"
			console.log('bad username');
		}
	}
}
