import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Game } from '../../../Common/src/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Dominion';
  game: Game;

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;
    });

    // test code to skip doing this every run
    this.gameService.createGame('Colin', '#0000FF', 'Test Game');
  }
}

