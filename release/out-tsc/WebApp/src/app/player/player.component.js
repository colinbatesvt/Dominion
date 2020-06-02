import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let PlayerComponent = class PlayerComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
    }
    isCardSelected(card) {
        return this.gameService.isCardSelected(card) === true;
    }
    isCardHighlighted(card) {
        return this.gameService.isCardHighlighted(card) === true;
    }
};
__decorate([
    Input()
], PlayerComponent.prototype, "player", void 0);
__decorate([
    Input()
], PlayerComponent.prototype, "orientation", void 0);
PlayerComponent = __decorate([
    Component({
        selector: 'app-player',
        templateUrl: './player.component.html',
        styleUrls: ['./player.component.css']
    })
], PlayerComponent);
export { PlayerComponent };
//# sourceMappingURL=player.component.js.map