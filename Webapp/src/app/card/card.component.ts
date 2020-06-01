import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { Card } from '../../../../Common/src/card';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() selected = false;
  @Input() highlighted = false;
  @Input() orientation: string;
  @Input() revealed: boolean;

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
      url += this.card.imageName;
    }
    else
    {
      url += 'Card_Back.jpg';
    }
    return url;
  }

  onClick() {
    this.gameService.onCardSelected(this.card);
  }

  onView() {
    this.gameService.setViewedCard(this.card);
  }
}
