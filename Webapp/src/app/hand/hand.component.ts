import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../Common/src/card';
import { CardLibrary } from '../../../../Common/src/card-library';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  selectedCard: Card;
  cards: Card[];
  library: CardLibrary;

  constructor() {
    this.library = new CardLibrary();
  }

  ngOnInit() {
    this.getCards();
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
    console.log(this.cards);
  }

}
