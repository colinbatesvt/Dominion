import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { JoinGameComponent } from './join-game/join-game.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { BannerComponent } from './banner/banner.component';

// angular material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {  MatMenuModule } from '@angular/material/menu';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';
import { SetupGameComponent } from './setup-game/setup-game.component';
import {MatSelectModule} from '@angular/material/select';
import { PlayerComponent } from './player/player.component';
import { CardPileComponent } from './card-pile/card-pile.component';
import { ShopComponent } from './shop/shop.component';
import { GameOverComponent } from './game-over/game-over.component';
import {CookieService } from 'ngx-cookie-service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const config: SocketIoConfig = { url: window.location.protocol + '//' + window.location.host, options: {} };


@NgModule({
   declarations: [
      AppComponent,
      CardComponent,
      JoinGameComponent,
      PlayGameComponent,
      BannerComponent,
      SetupGameComponent,
      PlayerComponent,
      CardPileComponent,
      ShopComponent,
      GameOverComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      SocketIoModule.forRoot(config),
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatSelectModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
   ],
   providers: [ CookieService ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
