import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../Common/src/card';
import { GameService } from '../game.service';
import { Game } from '../../../../Common/src/game';
import { Player, PlayerState } from '../../../../Common/src/player';
import { CardDefinition } from '../../../../Common/src/card-definition';
import { CardLibrary } from '../../../../Common/src/card-library';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shop: Record<string, Card[]>;
  basicCards: Card[][];
  kingdomCards: Card[][];
  trash: Card[];

  constructor(private gameService: GameService) {
    this.basicCards = [];
    this.kingdomCards = [];
  }

  ngOnInit() {

    this.shop = this.gameService.getGame().shop;
    this.trash = this.gameService.getGame().trash;
    this.initShopPiles();

    this.gameService.onGameChanged().subscribe((game: Game) => {
      if (game !== undefined)
      {
        this.shop = game.shop;
        this.trash = game.trash;
        this.initShopPiles();
      }
    });
  }

  initShopPiles()
  {
    this.basicCards = [];
    this.kingdomCards = [];

    for (const item in this.shop) {
      if (this.shop[item][0].isKingdom)
      {
        this.kingdomCards.push(this.shop[item]);
      }
      else
      {
        this.basicCards.push(this.shop[item]);
      }
    }
  }

  onPileClicked(cards: Card[]) {
    this.gameService.onCardSelected(cards[0]);
  }

  isPileHighlighted(cards: Card[]) {
    if (cards !== undefined && cards.length > 0)
    {
      const game: Game = this.gameService.getGame();
      const player: Player = this.gameService.getPlayer();
      if (game.currentPlayer === player.index)
      {
          const library: CardLibrary = new CardLibrary();
          const cardDefinition: CardDefinition = library.getCardDefinition(cards[0].name);
          if (player.state === PlayerState.Buy && player.buys > 0 && player.coins >= cardDefinition.cost)
          {
            return true;
          }
      }
    }
    return false;
  }
}
