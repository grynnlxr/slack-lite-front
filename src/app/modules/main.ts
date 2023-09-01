import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing';

import { MainPage } from '../pages/main/main';
import { ThreadPage } from '../pages/thread/thread';
import { CredentialPage } from '../pages/credential/credential';
import { ThreadListComponent } from '../components/thread/list';
import { MessageListComponent } from '../components/message/list';
import { MessageItemComponent } from '../components/message/item';
import { ThreadItemComponent } from '../components/thread/item';

@NgModule({
	declarations: [
		MainPage,
		ThreadPage,
		CredentialPage,
		ThreadItemComponent,
		ThreadListComponent,
		MessageItemComponent,
		MessageListComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [MainPage],
})
export class MainModule {}
