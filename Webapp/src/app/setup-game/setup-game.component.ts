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
  basicCards: Card[];
  kingdomCards: Card[];
  library: CardLibrary;
  game: Game;
  presets: string[];
  selectedPreset: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.library = this.library = new CardLibrary();
    this.basicCards = [];
    this.kingdomCards = [];
    this.getCards();

    this.presets = this.library.getPresetNames();
    this.game = this.gameService.getGame();
    this.gameService.onGameChanged().subscribe((game: Game) => {
      this.game = game;
      this.selectedPreset = this.game.setupPreset;
    });
  }

  onSelect(card: Card): void {
    this.gameService.setupSelectCard(card.name);
  }

  getCards(): void {
    const cards: Card[] = this.library.getAllCards();

    for (const card of cards)
    {
        if (card.isKingdom === true)
        {
          this.kingdomCards.push(card);
        }
        else
        {
          this.basicCards.push(card);
        }
    }
  }

  selectPreset() {
    this.gameService.setupSelectPreset(this.selectedPreset);
  }

  onReady() {
    this.gameService.setupReady();
  }

  onStart() {
    this.gameService.setupStartGame();
  }

  // if you want to start a game, everyone needs to be ready, and you need 10 cards selected
  canStart(): boolean{
    let canStart = true;

    for (const player of this.game.players)
    {
      if (!player.setupReady)
      {
        canStart = false;
      }
    }

    if (this.game.setupSelectedCards.length !== 10)
    {
      canStart = false;
    }
    return canStart;
  }
}
