import { CardDefinition } from "./card-definition";

export abstract class TreasureCardDefinition extends CardDefinition {

    coinValue : number;

    constructor() {
        super();
        this.coinValue = 0;
    }

    getCoinValue() : number {

        return this.coinValue;
    }
}