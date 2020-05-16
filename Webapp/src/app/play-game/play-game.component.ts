import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../../../../Common/src/game';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  game: Game;

  constructor(private gameService: GameService) {
    this.game = gameService.getGame();
    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;
    });
  }

  ngOnInit() {
  }

}
