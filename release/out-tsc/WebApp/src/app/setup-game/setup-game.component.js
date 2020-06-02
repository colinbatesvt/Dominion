import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CardLibrary } from '../../../../Common/src/card-library';
let SetupGameComponent = class SetupGameComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.library = this.library = new CardLibrary();
        this.basicCards = [];
        this.kingdomCards = [];
        this.getCards();
        this.presets = this.library.getPresetNames();
        this.game = this.gameService.getGame();
        this.gameService.onGameChanged().subscribe((game) => {
            this.game = game;
            if (this.game !== undefined) {
                this.selectedPreset = this.game.setupPreset;
            }
        });
    }
    getCards() {
        const cards = this.library.getAllCards();
        for (const card of cards) {
            if (card.isKingdom === true) {
                this.kingdomCards.push(card);
            }
            else {
                this.basicCards.push(card);
            }
        }
    }
    selectPreset() {
        this.gameService.setupSelectPreset(this.selectedPreset);
    }
    onReady() {
        this.gameService.setupReady();
    }
    onStart() {
        this.gameService.setupStartGame();
    }
    // if you want to start a game, everyone needs to be ready, and you need 10 cards selected
    canStart() {
        let canStart = true;
        for (const player of this.game.players) {
            if (!player.setupReady) {
                canStart = false;
            }
        }
        if (this.game.setupSelectedCards.length !== 10) {
            canStart = false;
        }
        return canStart;
    }
};
SetupGameComponent = __decorate([
    Component({
        selector: 'app-setup-game',
        templateUrl: './setup-game.component.html',
        styleUrls: ['./setup-game.component.css']
    })
], SetupGameComponent);
export { SetupGameComponent };
//# sourceMappingURL=setup-game.component.js.map