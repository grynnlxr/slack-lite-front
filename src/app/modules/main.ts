import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing';

import { MainPage } from '../pages/main/main';
import { CredentialPage } from '../pages/credential/credential';

@NgModule({
	declarations: [MainPage, CredentialPage],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [MainPage],
})
export class MainModule {}
