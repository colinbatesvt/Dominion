import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  playerName: string;

  constructor(private gameService: GameService) {
    this.playerName = gameService.GetPlayer().name;
  }

  ngOnInit() {
  }

}
