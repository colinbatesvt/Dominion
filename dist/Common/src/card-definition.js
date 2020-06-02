"use strict";
exports.__esModule = true;
var CardType;
(function (CardType) {
    CardType[CardType["any"] = 0] = "any";
    CardType[CardType["action"] = 1] = "action";
    CardType[CardType["victory"] = 2] = "victory";
    CardType[CardType["treasure"] = 3] = "treasure";
})(CardType = exports.CardType || (exports.CardType = {}));
;
var CardDefinition = /** @class */ (function () {
    function CardDefinition() {
        this.imageName = "";
        this.cost = 0;
        this.startingAmount = 0;
        this.isKingdom = true;
        this.cardType = CardType.action;
    }
    CardDefinition.prototype.getCard = function (id) {
        var card = {
            id: id,
            imageName: this.GetImageName(),
            name: this.constructor.cardName,
            isKingdom: this.isKingdom,
            type: this.cardType,
            revealedToOthers: false
        };
        return card;
    };
    CardDefinition.prototype.getCardName = function () {
        return this.constructor.cardName;
    };
    CardDefinition.prototype.GetImageName = function () {
        return this.imageName;
    };
    //execute the card's behaviour, this should be overriden by concrete subclasses that have behaviour on the card being played
    CardDefinition.prototype.execute = function (game, player) {
    };
    //for cards that require the user to select something, they can override this
    CardDefinition.prototype.onSelection = function (game, player, cards) {
        return true;
    };
    CardDefinition.prototype.onPrompt = function (prompt, game, player, cards) {
        return true;
    };
    return CardDefinition;
}());
exports.CardDefinition = CardDefinition;
//# sourceMappingURL=card-definition.js.map