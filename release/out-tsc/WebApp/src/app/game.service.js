import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameState } from '../../../Common/src/game';
import { PlayerState, Location } from '../../../Common/src/player';
import { CardType } from '../../../Common/src/card-definition';
let GameService = class GameService {
    constructor(socket, statusService) {
        this.socket = socket;
        this.statusService = statusService;
        this.onGameChanged = () => {
            return this.gameSubject.asObservable();
        };
        this.onGamesUpdated = () => {
            return Observable.create((observer) => {
                this.socket.on('games-updated', (games) => {
                    if (this.game !== undefined) {
                        let bFound = false;
                        for (const game of games) {
                            if (game.name === this.game.name) {
                                bFound = true;
                                if (game.players.length > this.player.index && game.players[this.player.index].name === this.player.name) {
                                    console.log('updated game');
                                    this.game = game;
                                    this.gameSubject.next(this.game);
                                }
                                else {
                                    console.log('we left the game');
                                    // we aren't in the game anymore, clear out
                                    this.game = undefined;
                                    this.player = undefined;
                                    this.gameSubject.next(this.game);
                                }
                            }
                        }
                        if (bFound === false) {
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
        };
        this.onViewedCardChanged = () => {
            return this.viewedCardSubject.asObservable();
        };
        this.onViewedPileChanged = () => {
            return this.viewedPileSubject.asObservable();
        };
        this.gameSubject = new Subject();
        this.viewedCardSubject = new Subject();
        this.selectedCards = [];
        this.viewedPile = [];
        this.viewedPileSubject = new Subject();
        this.socket.on('game-updated', (game) => {
            if (this.game !== undefined) {
                this.game = game;
                this.player = game.players[this.player.index];
                this.gameSubject.next(this.game);
                console.log(this.player);
                this.statusService.updateStatus(this.game);
            }
        });
    }
    getPlayer() {
        return this.player;
    }
    // server communication through socket io
    sendToServer(event, data, returnCallback) {
        console.log('emiting: ' + event);
        this.socket.emit(event, data, (result) => {
            if (result.ok === true) {
                returnCallback(result.returnValue);
            }
            else {
                this.statusService.setStatus(result.error);
                console.log('error sending: ' + event + '. reason: ' + result.error);
            }
            return result.returnValue;
        });
    }
    joinGame(myPlayerName, myPlayerColor, myGameName) {
        this.sendToServer('join-game', { playerName: myPlayerName, playerColor: myPlayerColor, gameName: myGameName }, (returnValue) => {
            this.player = returnValue.player;
            this.game = returnValue.game;
            this.gameSubject.next(this.game);
        });
    }
    createGame(newPlayerName, newPlayerColor, newGameName) {
        // create the game, and join it if it's created successfully
        this.sendToServer('create-game', newGameName, () => {
            this.joinGame(newPlayerName, newPlayerColor, newGameName);
        });
    }
    leaveGame() {
        this.sendToServer('leave-game', { gameName: this.game.name, playerIndex: this.player.index }, () => { });
    }
    addBot(myBotName) {
        console.log(this.game);
        this.sendToServer('add-bot', { gameName: this.game.name, botName: myBotName }, () => {
        });
    }
    requestGames() {
        this.sendToServer('request-games-list', {}, () => { });
    }
    setupSelectCard(card) {
        this.sendToServer('setup-card-selected', {
            gameName: this.game.name,
            cardName: card.name
        }, () => { });
    }
    setupSelectPreset(selectedPreset) {
        this.sendToServer('setup-preset-selected', {
            gameName: this.game.name,
            presetName: selectedPreset
        }, () => { });
    }
    setupReady() {
        this.sendToServer('setup-player-ready', {
            gameName: this.game.name,
            playerName: this.player.name
        }, () => { });
    }
    setupStartGame() {
        this.sendToServer('setup-start-game', {
            gameName: this.game.name
        }, () => { });
    }
    getGame() {
        return this.game;
    }
    onPromptClicked(clickedPrompt) {
        this.sendToServer('prompt-clicked', {
            gameName: this.game.name,
            playerIndex: this.player.index,
            prompt: clickedPrompt,
            cards: this.selectedCards
        }, () => { });
        this.selectedCards = [];
    }
    onCardSelected(card) {
        // card selected for setup
        if (this.game.state === GameState.Setup) {
            this.setupSelectCard(card);
            return;
        }
        // card selected in game
        // if the card is already selected, remove it from the selection
        for (let i = 0; i < this.selectedCards.length; i++) {
            const selectedCard = this.selectedCards[i];
            if (selectedCard.id === card.id) {
                this.selectedCards.splice(i, 1);
                return;
            }
        }
        this.selectedCards.push(card);
        const count = this.player.userSelections[this.player.userSelections.length - 1][0].count;
        if (this.selectedCards.length >= count && count !== -1) {
            this.sendToServer('cards-selected', {
                gameName: this.game.name,
                playerIndex: this.player.index,
                cards: this.selectedCards
            }, () => { });
            this.selectedCards = [];
        }
    }
    isCardSelected(card) {
        for (const selectedCard of this.selectedCards) {
            if (selectedCard.id === card.id) {
                return true;
            }
        }
        return false;
    }
    isCardHighlighted(card) {
        if (this.player.state === PlayerState.Action) {
            if (card.type === CardType.action && this.player.actions > 0) {
                return true;
            }
        }
        else if (this.player.state === PlayerState.Buy) {
            if (card.type === CardType.treasure) {
                return true;
            }
        }
        return false;
    }
    setViewedCard(card) {
        this.viewedCard = card;
        this.viewedPile = [];
        this.viewedCardSubject.next(this.viewedCard);
    }
    setViewedPile(cards, location) {
        // you can only view a a pile when clicking the shop piles doesn't buy/gain something
        let pickingFromShop = false;
        if (this.player.userSelections.length > 0) {
            for (const selection of this.player.userSelections[this.player.userSelections.length - 1]) {
                if (selection.location === Location.shop) {
                    pickingFromShop = true;
                }
            }
        }
        if (location !== 'Shop' || !pickingFromShop) {
            this.viewedCard = undefined;
            this.viewedPile = cards;
            this.viewedPileSubject.next(this.viewedPile);
        }
    }
};
GameService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GameService);
export { GameService };
//# sourceMappingURL=game.service.js.map