import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../Common/src/card';
import { CardLibrary } from '../../../../Common/src/card-library';
import {CardService} from '../card.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  selectedCard: Card;
  cards: Card[];
  library: CardLibrary;

  constructor(private cardService: CardService, private messageService: MessageService) {
    this.library = new CardLibrary();
  }

  ngOnInit() {
    this.getCards();
  }

  onSelect(card: Card): void {
    if (this.selectedCard !== card)
    {
      this.selectedCard = card;
      this.messageService.add(`CardService: Selected a new card`);
    }
    else
    {
      this.selectedCard = null;
      this.messageService.add(`CardService: Deselected card`);
    }
  }

  getCards(): void {
    this.cards = this.library.getAllCards();
    console.log(this.cards);
  }

}
