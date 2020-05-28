import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../../../../Common/src/game';
import { Player } from '../../../../Common/src/player';
import { StatusService } from '../status.service';

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

  onPromptClicked(prompt: string) {
    this.gameService.onPromptClicked(prompt);
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
