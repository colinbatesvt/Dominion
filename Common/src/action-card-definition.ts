import { CardDefinition } from "./card-definition";

export abstract class ActionCardDefinition extends CardDefinition {

    constructor() {
        super();
        this.startingAmount = 10;
    }

}