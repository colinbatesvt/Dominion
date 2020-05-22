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
  @Input() selected: boolean;

  @HostListener('click') onClick() {
    this.gameService.onCardSelected(this.card);
  }

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
