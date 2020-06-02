import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.title = 'Dominion';
        this.viewedCard = undefined;
        this.viewedPile = [];
    }
    ngOnInit() {
        this.gameService.onGameChanged().subscribe((game) => {
            this.game = game;
        });
        this.gameService.onViewedCardChanged().subscribe((viewedCard) => {
            this.viewedCard = viewedCard;
        });
        this.gameService.onViewedPileChanged().subscribe((viewedPile) => {
            this.viewedPile = viewedPile;
        });
    }
    onCloseSelected() {
        this.gameService.setViewedCard(undefined);
        this.gameService.setViewedPile([], '');
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map