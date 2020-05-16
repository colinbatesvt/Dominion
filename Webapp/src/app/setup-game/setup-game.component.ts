import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../Common/src/card';
import { CardLibrary } from '../../../../Common/src/card-library';
import { GameService } from '../game.service';
import { Game, GameState } from '../../../../Common/src/game';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.css']
})
export class SetupGameComponent implements OnInit {

  selectedCard: Card;
  cards: Card[];
  library: CardLibrary;
  game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.library = this.library = new CardLibrary();
    this.getCards();
    this.game = this.gameService.getGame();
    console.log('players: ' + this.game.players);
    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;
      console.log('updated setup');
    });
  }

  onSelect(card: Card): void {
    if (this.selectedCard !== card)
    {
      this.selectedCard = card;
    }
    else
    {
      this.selectedCard = null;
    }
  }

  getCards(): void {
    this.cards = this.library.getAllCards();
  }
}
