import { CardDefinition, CardType } from "./card-definition";

export enum SubType {
    none = 'none',
    attack = 'attack',
    reaction = 'reaction'
}

export abstract class ActionCardDefinition extends CardDefinition {

    public subType: SubType;

    constructor() {
        super();
        this.isKingdom = true;
        this.subType = SubType.none;
        this.startingAmount = 10;
        this.cardType = CardType.action;
    }
}