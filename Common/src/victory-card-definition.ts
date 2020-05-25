import { CardDefinition, CardType } from "./card-definition";

export abstract class VictoryCardDefinition extends CardDefinition {

    constructor() {
        super();
        this.cardType = CardType.victory;
    }

    abstract GetVictoryPoints() : number;
}