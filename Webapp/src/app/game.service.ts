import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';
import { Game, GameState } from '../../../Common/src/game';
import { Player, PlayerState, Location } from '../../../Common/src/player';
import { StatusService } from './status.service';
import { Card } from '../../../Common/src/card';
import { CardType } from '../../../Common/src/card-definition';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private player: Player;
  private game: Game;
  private gameSubject: Subject<Game>;

  private viewedCard: Card;
  private viewedCardSubject: Subject<Card>;

  private viewedPile: Card[];
  private viewedPileSubject: Subject<Card[]>;

  private selectedCards: Card[];

  constructor(private socket: Socket, private statusService: StatusService) {
    this.gameSubject = new Subject<Game>();
    this.viewedCardSubject = new Subject<Card>();
    this.selectedCards = [];
    this.viewedPile = [];
    this.viewedPileSubject = new Subject<Card[]>();

    this.socket.on('game-updated', (game: Game) => {
        if (this.game !== undefined)
        {
          this.game = game;
          this.player = game.players[this.player.index];
          this.gameSubject.next(this.game);

          console.log(this.player);
          this.statusService.updateStatus(this.game);
        }
    });
  }

  public getPlayer(): Player {
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
          this.statusService.setStatus(result.error);
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
    // create the game, and join it if it's created successfully
    this.sendToServer('create-game', newGameName, () => {
      this.joinGame(newPlayerName, newPlayerColor, newGameName);
    });
  }

  public leaveGame()
  {
    this.sendToServer('leave-game', {gameName: this.game.name, playerIndex: this.player.index}, () => {});
  }

  public addBot(myBotName: string)
  {
    console.log(this.game);
    this.sendToServer('add-bot', { gameName: this.game.name, botName: myBotName}, () => {
    });
  }

  public requestGames()
  {
    this.sendToServer('request-games-list', {}, () => {});
  }

  public setupSelectCard(card: Card)
  {
    this.sendToServer('setup-card-selected', {
      gameName: this.game.name,
      cardName: card.name
    }, () => {});
  }

  public setupSelectPreset(selectedPreset: string)
  {
    this.sendToServer('setup-preset-selected', {
      gameName: this.game.name,
      presetName: selectedPreset
    }, () => {});
  }

  public setupReady() {
    this.sendToServer('setup-player-ready', {
      gameName: this.game.name,
      playerName: this.player.name
    }, () => {});
  }

  public setupStartGame() {
    this.sendToServer('setup-start-game', {
      gameName: this.game.name
    }, () => {});
  }


  public getGame(): Game {
    return this.game;
  }

  public onGameChanged = () => {
    return this.gameSubject.asObservable();
  }

  public onGamesUpdated = () => {
    return Observable.create((observer) => {
      this.socket.on('games-updated', (games: Game[]) => {
        if (this.game !== undefined)
        {
          let bFound = false;
          for (const game of games)
          {
            if (game.name === this.game.name)
            {
              bFound = true;
              if (game.players. length > this.player.index && game.players[this.player.index].name === this.player.name)
              {
                console.log('updated game');
                this.game = game;
                this.gameSubject.next(this.game);
              }
              else
              {
                console.log('we left the game');
                // we aren't in the game anymore, clear out
                this.game = undefined;
                this.player = undefined;
                this.gameSubject.next(this.game);
              }
            }
          }
          if (bFound === false)
          {
            console.log('we left the game');
            // we aren't in the game anymore, clear out
            this.game = undefined;
            this.player = undefined;
            this.gameSubject.next(this.game);
          }
        }
        observer.next(games);
      });
    });
  }

  public onPromptClicked(clickedPrompt: string){
    this.sendToServer('prompt-clicked', {
      gameName: this.game.name,
      playerIndex: this.player.index,
      prompt: clickedPrompt,
      cards: this.selectedCards
    }, () => {});
    this.selectedCards = [];
  }

  public onCardSelected(card: Card) {

    // card selected for setup
    if (this.game.state === GameState.Setup)
    {
      this.setupSelectCard(card);
      return;
    }

    // card selected in game
    // if the card is already selected, remove it from the selection
    for (let i = 0; i < this.selectedCards.length; i++)
    {
      const selectedCard = this.selectedCards[i];
      if (selectedCard.id === card.id)
      {
        this.selectedCards.splice(i, 1);
        return;
      }
    }
    this.selectedCards.push(card);
    const count = this.player.userSelections[this.player.userSelections.length - 1][0].count;
    if (this.selectedCards.length >= count && count !== -1)
    {
      this.sendToServer('cards-selected',
      {
        gameName: this.game.name,
        playerIndex: this.player.index,
        cards: this.selectedCards
      }, () => {});
      this.selectedCards = [];
    }
  }

  public isCardSelected(card: Card): boolean {
    for (const selectedCard of this.selectedCards)
    {
      if (selectedCard.id === card.id)
      {
        return true;
      }
    }
    return false;
  }

  public isCardHighlighted(card: Card): boolean {
    if (this.player.state === PlayerState.Action)
    {
      if (card.type === CardType.action && this.player.actions > 0)
      {
        return true;
      }
    }
    else if (this.player.state === PlayerState.Buy)
    {
      if (card.type === CardType.treasure)
      {
        return true;
      }
    }

    return false;
  }

  public setViewedCard(card: Card) {
    this.viewedCard = card;
    this.viewedPile = [];
    this.viewedCardSubject.next(this.viewedCard);
  }

  public onViewedCardChanged = () => {
    return this.viewedCardSubject.asObservable();
  }

  public setViewedPile(cards: Card[], location: string)
  {
    // you can only view a a pile when clicking the shop piles doesn't buy/gain something
    let pickingFromShop = false;
    if (this.player.userSelections.length > 0)
    {
      for (const selection of this.player.userSelections[this.player.userSelections.length - 1])
      {
        if (selection.location === Location.shop)
        {
          pickingFromShop = true;
        }
      }
    }

    if (location !== 'Shop' || !pickingFromShop)
    {
      this.viewedCard = undefined;
      this.viewedPile = cards;
      this.viewedPileSubject.next(this.viewedPile);
    }
  }

  public onViewedPileChanged = () => {
    return this.viewedPileSubject.asObservable();
  }
}


