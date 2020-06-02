import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CardLibrary } from '../../../../Common/src/card-library';
let HandComponent = class HandComponent {
    constructor() {
        this.library = new CardLibrary();
    }
    ngOnInit() {
        this.getCards();
    }
    onSelect(card) {
        if (this.selectedCard !== card) {
            this.selectedCard = card;
        }
        else {
            this.selectedCard = null;
        }
    }
    getCards() {
        this.cards = this.library.getAllCards();
        console.log(this.cards);
    }
};
HandComponent = __decorate([
    Component({
        selector: 'app-hand',
        templateUrl: './hand.component.html',
        styleUrls: ['./hand.component.css']
    })
], HandComponent);
export { HandComponent };
//# sourceMappingURL=hand.component.js.map