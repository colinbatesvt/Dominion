import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../../Common/src/player';
import { Card } from '../../../../Common/src/card';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  @Input() orientation: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  isCardSelected(card: Card): boolean {
    return this.gameService.isCardSelected(card) === true;
  }

  isCardHighlighted(card: Card): boolean {
    return this.gameService.isCardHighlighted(card) === true;
  }
}
