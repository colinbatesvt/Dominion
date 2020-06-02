import { __decorate } from "tslib";
import { Component } from '@angular/core';
let JoinGameComponent = class JoinGameComponent {
    constructor(gameService, statusService, cookieService) {
        this.gameService = gameService;
        this.statusService = statusService;
        this.cookieService = cookieService;
        this.gameNames = [];
        this.playerCounts = [];
        this.newGameName = '';
        this.playerName = this.cookieService.get('player-name');
        this.playerColor = '#000000';
        this.status = '';
    }
    ngOnInit() {
        // listen for the list of games being updated
        this.gameService
            .onGamesUpdated()
            .subscribe((games) => {
            this.gameNames = [];
            this.playerCounts = [];
            for (const game of games) {
                this.gameNames.push(game.name);
                this.playerCounts.push(game.players.length);
            }
        });
        this.statusService.onStatusChanged().subscribe((newStatus) => {
            this.status = newStatus;
        });
        this.gameService.requestGames();
    }
    onJoin(gameName) {
        if (this.playerName !== '') {
            this.cookieService.set('player-name', this.playerName);
            this.gameService.joinGame(this.playerName, this.playerColor, gameName);
        }
        else {
            this.statusService.setStatus('Please enter a player name');
        }
    }
    onCreate() {
        if (this.playerName === '' && this.newGameName === '') {
            this.statusService.setStatus('Please enter a game and player name');
        }
        else if (this.playerName === '') {
            this.statusService.setStatus('Please enter a player name');
        }
        else if (this.newGameName === '') {
            this.statusService.setStatus('Please enter a game name');
        }
        else {
            this.cookieService.set('player-name', this.playerName);
            this.gameService.createGame(this.playerName, this.playerColor, this.newGameName);
            this.newGameName = '';
        }
    }
};
JoinGameComponent = __decorate([
    Component({
        selector: 'app-join-game',
        templateUrl: './join-game.component.html',
        styleUrls: ['./join-game.component.css']
    })
], JoinGameComponent);
export { JoinGameComponent };
//# sourceMappingURL=join-game.component.js.map