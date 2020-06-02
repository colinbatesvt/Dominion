import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ShopComponent = class ShopComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.basicCards = [];
        this.kingdomCards = [];
    }
    ngOnInit() {
        this.shop = this.gameService.getGame().shop;
        this.trash = this.gameService.getGame().trash;
        this.initShopPiles();
        this.gameService.onGameChanged().subscribe((game) => {
            this.shop = game.shop;
            this.trash = game.trash;
            this.initShopPiles();
        });
    }
    initShopPiles() {
        this.basicCards = [];
        this.kingdomCards = [];
        for (const item in this.shop) {
            if (this.shop[item][0].isKingdom) {
                this.kingdomCards.push(this.shop[item]);
            }
            else {
                this.basicCards.push(this.shop[item]);
            }
        }
    }
    onPileClicked(cards) {
        this.gameService.onCardSelected(cards[0]);
    }
};
ShopComponent = __decorate([
    Component({
        selector: 'app-shop',
        templateUrl: './shop.component.html',
        styleUrls: ['./shop.component.css']
    })
], ShopComponent);
export { ShopComponent };
//# sourceMappingURL=shop.component.js.map