import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../../../../Common/src/game';
import { Player } from '../../../../Common/src/player';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  game: Game;
  myPlayer: Player;

  constructor(private gameService: GameService) {
    this.game = gameService.getGame();
    this.myPlayer = gameService.GetPlayer();
    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;
      this.myPlayer = game.players[this.myPlayer.index];
    });
  }

  ngOnInit() {
  }

}
