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
  gameName: string;

  constructor(public gameService: GameService) {
    this.gameName = '';
  }

  ngOnInit() {
    this.gameService.onGameChanged().subscribe((game: Game) => {
      console.log(game);
      this.gameName = game.name;
    });
  }
}

