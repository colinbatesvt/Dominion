import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game, GameState } from '../../../../Common/src/game';
import { Player, PlayerState } from '../../../../Common/src/player';
import { StatusService } from '../status.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CardType } from '../../../../Common/src/card-definition';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  game: Game;
  myPlayer: Player;
  leftPlayer: Player;
  topPlayer: Player;
  rightPlayer: Player;
  status: string;

  constructor(private gameService: GameService, private statusService: StatusService) {
    this.game = gameService.getGame();
    this.myPlayer = gameService.getPlayer();
    this.initPlayers();
    this.status = statusService.getStatus();
  }

  ngOnInit() {
    this.statusService.onStatusChanged().subscribe((newStatus: string) => {
      this.status = newStatus;
    });

    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;

      this.initPlayers();
    });
  }

  getStatus(): string {
    if (this.myPlayer.status !== '')
    {
      return this.myPlayer.status;
    }
    else{
      return this.status;
    }
  }

  onPromptClicked(prompt: string) {
    this.gameService.onPromptClicked(prompt);
  }

  isPromptHighlighted(prompt: string): boolean {
    if (prompt === 'done')
    {
      if (this.myPlayer.state === PlayerState.Action)
      {
        let anyActions = false;
        for (const card of this.myPlayer.hand)
        {
          if (card.type === CardType.action)
          {
            anyActions = true;
          }
        }

        if (this.myPlayer.actions === 0 || anyActions === false)
        {
          return true;
        }
      }
      else if (this.myPlayer.state === PlayerState.Buy && this.myPlayer.buys === 0)
      {
        return true;
      }
    }

    return false;

  }

  initPlayers() {
    if (this.game !== undefined)
    {
      this.myPlayer = this.game.players[this.myPlayer.index];

      if (this.game.players.length === 2)
      {
        this.topPlayer = this.game.players[((this.myPlayer.index + 1) % 2)];
      }
      else if (this.game.players.length === 3)
      {
        this.leftPlayer = this.game.players[((this.myPlayer.index + 1) % 3)];
        this.topPlayer = this.game.players[((this.myPlayer.index + 2) % 3)];
      }
      else if (this.game.players.length === 4)
      {
        this.leftPlayer = this.game.players[((this.myPlayer.index + 1) % 4)];
        this.topPlayer = this.game.players[((this.myPlayer.index + 2) % 4)];
        this.rightPlayer = this.game.players[((this.myPlayer.index + 3) % 4)];
      }
    }
  }

}
