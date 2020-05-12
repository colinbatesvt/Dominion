import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { PlayGameComponent } from './play-game/play-game.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
   declarations: [
      AppComponent,
      HandComponent,
      CardComponent,
      ChatComponent,
      JoinGameComponent,
      PlayGameComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      SocketIoModule.forRoot(config)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
