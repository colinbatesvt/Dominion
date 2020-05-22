import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Game } from '../../../Common/src/game';
import { Card } from '../../../Common/src/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Dominion';
  game: Game;
  selectedCard: Card;

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;
    });

    this.gameService.onSelectedCardChanged().subscribe((selectedCard: Card) => {
      this.selectedCard = selectedCard;
      console.log(this.selectedCard);
    });

    // TEST CODE
    // this.gameService.createGame('Colin', '#FFFFFF', 'Test Game');
  }

  onCloseSelected() {
    this.gameService.onCardSelected(undefined);
  }
}

