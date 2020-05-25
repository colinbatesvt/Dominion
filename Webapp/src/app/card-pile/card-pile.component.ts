import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../Common/src/card';

@Component({
  selector: 'app-card-pile',
  templateUrl: './card-pile.component.html',
  styleUrls: ['./card-pile.component.css']
})
export class CardPileComponent implements OnInit {

  @Input() cards: Card[];
  @Input() revealed: boolean; // can users see the cards in the pile? or should we show the card back?
  @Input() orientation: string;

  constructor() {
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
      url += 'Card_Back.jpg';
    }
    return url;
  }

}
