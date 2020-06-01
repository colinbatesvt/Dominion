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
  viewedCard: Card;
  viewedPile: Card[];

  constructor(public gameService: GameService) {
    this.viewedCard = undefined;
    this.viewedPile = [];
  }

  ngOnInit() {
    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;
    });

    this.gameService.onViewedCardChanged().subscribe((viewedCard: Card) => {
      this.viewedCard = viewedCard;
    });

    this.gameService.onViewedPileChanged().subscribe((viewedPile: Card[]) => {
      this.viewedPile = viewedPile;
    });
    // TEST CODE
    this.gameService.createGame('Colin', '#0000FF', 'Test Game');
  }

  onCloseSelected() {
    this.gameService.setViewedCard(undefined);
    this.gameService.setViewedPile([], '');
  }
}

