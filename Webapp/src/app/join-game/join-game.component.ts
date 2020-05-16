import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../../../../Common/src/game';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  gameNames: string[];
  playerCounts: number[];
  newGameName: string;
  playerName: string;
  playerColor: string;

  constructor(private gameService: GameService) {
    this.newGameName = '';
    this.playerName = '';
    this.playerColor = '';
  }

  ngOnInit() {
    // listen for the list of games being updated
    this.gameService
    .onGamesUpdated()
    .subscribe((games: Game[]) => {
      this.gameNames = [];
      this.playerCounts = [];
      for (const game of games)
      {
        this.gameNames.push(game.name);
        this.playerCounts.push(game.players.length);
      }
    });

    this.gameService.requestGames();
  }

  onJoin(gameName: string)
  {
    if (this.playerName !== '')
    {
      this.gameService.joinGame(this.playerName, this.playerColor, gameName);
    }
  }

  onCreate()
  {
    if (this.playerName !== '' && this.newGameName !== '')
    {
      this.gameService.createGame(this.playerName, this.playerColor, this.newGameName);
      this.newGameName = '';
    }
  }

}
