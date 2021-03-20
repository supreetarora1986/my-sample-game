import { Component } from '@angular/core';
import { GameStatusComponent } from './game-status/game-status.component';
import { GameServiceComponent } from './game-service/game-service.component';
import { GameStatusViewComponent } from './game-status-view/game-status-view.component';
import { PlayerBoardStatusComponent } from './player-board-status/player-board-status.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameServiceComponent]
})
export class AppComponent {
  title = 'space-battle-ui';
  gameId : string;
  gameStatus: GameStatusViewComponent;
  constructor(private gameService: GameServiceComponent ) {  }

  getGameStatus(gameId: string) {
    this.gameService.getGameStatus(gameId).subscribe((data:GameStatusComponent)=> {
      this.gameStatus = new GameStatusViewComponent();
      this.gameStatus.game = data.game;
      this.gameStatus.players.push(data.self);
      this.gameStatus.players.push(data.opponent);
    });
  }
}
