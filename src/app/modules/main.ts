import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing';
import { MainPage } from '../pages/main/main';

@NgModule({
	declarations: [MainPage],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule],
	providers: [],
	bootstrap: [MainPage],
})
export class MainModule {}
