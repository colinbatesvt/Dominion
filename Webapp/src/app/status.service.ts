import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from '../../../Common/src/game';
import { Player } from '../../../Common/src/player';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private status: string;
  private statusSubject: Subject<string>;

  constructor() {
    status = '';
    this.statusSubject = new Subject<string>();
  }

  public onStatusChanged = () => {
    return this.statusSubject.asObservable();
  }

  public setStatus(newStatus: string) {
    this.status = newStatus;
    this.statusSubject.next(this.status);
  }

  public getStatus(): string {
    return this.status;
  }

  public updateStatus(game: Game)
  {
    let status = '';
    const currentPlayer: Player = game.players[game.currentPlayer];
    if (currentPlayer !== undefined)
    {
      status += currentPlayer.name + '\'s turn. ';
      status += currentPlayer.state + ' phase';
      this.setStatus(status);
    }
    else
    {
      this.setStatus('setting up game');
    }
  }

}
