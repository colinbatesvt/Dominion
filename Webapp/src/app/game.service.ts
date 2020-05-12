import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';
import { Game } from '../../../Common/src/game';
import { Player } from '../../../Common/src/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private player: Player;
  private game: Game;
  private gameSubject: Subject<Game>;

constructor(private socket: Socket) {
   this.gameSubject = new Subject<Game>();
 }

public GetPlayer(): Player {
  return this.player;
}

// server communication through socket io

public sendToServer(event: string, data: any, returnCallback: (returnValue: any) => void): any{
      console.log('emiting: ' + event);
      this.socket.emit(event, data, (result: {ok: boolean, error: string, returnValue, any }) => {
      if (result.ok === true)
      {
        returnCallback(result.returnValue);
      }
      else
      {
        console.log('error sending: ' + event + '. reason: ' + result.error);
      }

      return result.returnValue;
    } );
}

public joinGame(myPlayerName: string, myPlayerColor: string, myGameName: string)
{
  this.sendToServer('join-game', { playerName: myPlayerName, playerColor: myPlayerColor, gameName: myGameName }, (returnValue: any) => {
    this.player = returnValue.player;
    this.game = returnValue.game;

    this.gameSubject.next(this.game);
  });
}

public createGame(newPlayerName: string, newPlayerColor: string, newGameName: string)
{
  this.sendToServer('create-game', newGameName, () => {});
  this.joinGame(newPlayerName, newPlayerColor, newGameName);
}

public requestGames()
{
  this.sendToServer('request-games-list', {}, () => {});
}

public onGameChanged = () => {
  return this.gameSubject.asObservable();
}

public onGamesUpdated = () => {
  return Observable.create((observer) => {
    this.socket.on('games-updated', (games: Game[]) => {
        observer.next(games);
    });
  });
}

}


