import { CardDefinition, CardType } from "./card-definition";
export var SubType;
(function (SubType) {
    SubType["none"] = "none";
    SubType["attack"] = "attack";
    SubType["reaction"] = "reaction";
})(SubType || (SubType = {}));
export class ActionCardDefinition extends CardDefinition {
    constructor() {
        super();
        this.isKingdom = true;
        this.subType = SubType.none;
        this.startingAmount = 10;
        this.cardType = CardType.action;
    }
}
//# sourceMappingURL=action-card-definition.js.map