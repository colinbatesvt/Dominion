import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../../Common/src/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }

}
