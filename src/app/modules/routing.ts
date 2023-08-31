import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialPage } from '../pages/credential/credential';

const routes: Routes = [
	{ path: '', component: CredentialPage },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
