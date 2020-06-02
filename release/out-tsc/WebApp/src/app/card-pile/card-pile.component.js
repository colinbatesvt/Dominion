import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CardPileComponent = class CardPileComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.location = '';
        this.showLocationLabel = false;
        this.hovered = false;
    }
    ngOnInit() {
    }
    getImgSrc() {
        let url = '/assets/card_images/';
        url += this.orientation;
        url += '/';
        if (this.revealed === true) {
            url += this.cards[0].imageName;
        }
        else {
            url += 'Card_Back.jpg';
        }
        return url;
    }
    onClick() {
        if (this.revealed === true) {
            this.gameService.setViewedPile(this.cards, this.location);
        }
    }
};
__decorate([
    Input()
], CardPileComponent.prototype, "cards", void 0);
__decorate([
    Input()
], CardPileComponent.prototype, "revealed", void 0);
__decorate([
    Input()
], CardPileComponent.prototype, "orientation", void 0);
__decorate([
    Input()
], CardPileComponent.prototype, "location", void 0);
__decorate([
    Input()
], CardPileComponent.prototype, "showLocationLabel", void 0);
CardPileComponent = __decorate([
    Component({
        selector: 'app-card-pile',
        templateUrl: './card-pile.component.html',
        styleUrls: ['./card-pile.component.css']
    })
], CardPileComponent);
export { CardPileComponent };
//# sourceMappingURL=card-pile.component.js.map