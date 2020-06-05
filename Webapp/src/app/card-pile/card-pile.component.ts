import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../Common/src/card';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card-pile',
  templateUrl: './card-pile.component.html',
  styleUrls: ['./card-pile.component.css']
})
export class CardPileComponent implements OnInit {

  @Input() cards: Card[];
  @Input() revealed: boolean; // can users see the cards in the pile? or should we show the card back?
  @Input() orientation: string;
  @Input() highlighted = false;
  @Input() location = '';
  @Input() showLocationLabel = false;

  hovered: boolean;

  constructor(private gameService: GameService) {
    this.hovered = false;
  }


  ngOnInit() {
  }

  getImgSrc(): string {
    let url = '/assets/card_images/';
    url += this.orientation;
    url += '/';
    if (this.revealed === true)
    {
      url += this.cards[0].imageName;
    }
    else
    {
      url += 'card_back.jpg';
    }
    return url;
  }

  onClick() {
    if (this.revealed === true)
    {
      this.gameService.setViewedPile(this.cards, this.location);
    }
  }

}
