import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { GameServiceComponent } from './game-service/game-service.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { PlayerBoardStatusComponent } from './player-board-status/player-board-status.component';
import { GameComponent } from './game/game.component';
import { GameStatusViewComponent } from './game-status-view/game-status-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GameServiceComponent,
    GameStatusComponent,
    PlayerBoardStatusComponent,
    GameComponent,
    GameStatusViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
