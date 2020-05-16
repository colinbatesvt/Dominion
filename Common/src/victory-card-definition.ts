import { CardDefinition } from "./card-definition";

export abstract class VictoryCardDefinition extends CardDefinition {

    constructor() {
        super();
    }

    abstract GetVictoryPoints() : number;
}