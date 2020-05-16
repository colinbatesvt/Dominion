import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../../../../Common/src/game';
import { StatusService } from '../status.service';

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

  status: string;

  constructor(private gameService: GameService, private statusService: StatusService) {
    this.newGameName = '';
    this.playerName = '';
    this.playerColor = '';
    this.status = '';
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

    this.statusService.onStatusChanged().subscribe((newStatus: string) => {
      this.status = newStatus;
    });

    this.gameService.requestGames();
  }

  onJoin(gameName: string)
  {
    if (this.playerName !== '')
    {
      this.gameService.joinGame(this.playerName, this.playerColor, gameName);
    }
    else
    {
      this.statusService.setStatus('Please enter a player name');
    }
  }

  onCreate()
  {
    if (this.playerName === '' && this.newGameName === '')
    {
      this.statusService.setStatus('Please enter a game and player name');
    }
    else if (this.playerName === '')
    {
      this.statusService.setStatus('Please enter a player name');
    }
    else if (this.newGameName === '')
    {
      this.statusService.setStatus('Please enter a game name');
    }
    else
    {
      this.gameService.createGame(this.playerName, this.playerColor, this.newGameName);
      this.newGameName = '';
    }
  }

}
