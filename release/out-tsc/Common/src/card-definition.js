export var CardType;
(function (CardType) {
    CardType[CardType["any"] = 0] = "any";
    CardType[CardType["action"] = 1] = "action";
    CardType[CardType["victory"] = 2] = "victory";
    CardType[CardType["treasure"] = 3] = "treasure";
})(CardType || (CardType = {}));
;
export class CardDefinition {
    constructor() {
        this.imageName = "";
        this.cost = 0;
        this.startingAmount = 0;
        this.isKingdom = true;
        this.cardType = CardType.action;
    }
    getCard(id) {
        const card = {
            id: id,
            imageName: this.GetImageName(),
            name: this.constructor.cardName,
            isKingdom: this.isKingdom,
            type: this.cardType,
            revealedToOthers: false
        };
        return card;
    }
    getCardName() {
        return this.constructor.cardName;
    }
    GetImageName() {
        return this.imageName;
    }
    //execute the card's behaviour, this should be overriden by concrete subclasses that have behaviour on the card being played
    execute(game, player) {
    }
    //for cards that require the user to select something, they can override this
    onSelection(game, player, cards) {
        return true;
    }
    onPrompt(prompt, game, player, cards) {
        return true;
    }
}
//# sourceMappingURL=card-definition.js.map