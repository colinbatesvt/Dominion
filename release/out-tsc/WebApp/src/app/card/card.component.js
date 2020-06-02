import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CardComponent = class CardComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.selected = false;
        this.highlighted = false;
        this.hovered = false;
    }
    ngOnInit() {
    }
    getImgSrc() {
        let url = '/assets/card_images/';
        url += this.orientation;
        url += '/';
        if (this.revealed === true) {
            url += this.card.imageName;
        }
        else {
            url += 'Card_Back.jpg';
        }
        return url;
    }
    onClick() {
        this.gameService.onCardSelected(this.card);
    }
    onView() {
        this.gameService.setViewedCard(this.card);
    }
};
__decorate([
    Input()
], CardComponent.prototype, "card", void 0);
__decorate([
    Input()
], CardComponent.prototype, "selected", void 0);
__decorate([
    Input()
], CardComponent.prototype, "highlighted", void 0);
__decorate([
    Input()
], CardComponent.prototype, "orientation", void 0);
__decorate([
    Input()
], CardComponent.prototype, "revealed", void 0);
CardComponent = __decorate([
    Component({
        selector: 'app-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.css'],
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map