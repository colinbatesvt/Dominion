import { VictoryCardDefinition } from "../victory-card-definition";
export class Curse extends VictoryCardDefinition {
    constructor() {
        super();
        this.cost = 0; // Wow, this card is free? It must be the best!
        this.startingAmount = 30;
        this.isKingdom = false;
        this.imageName = "curse.jpg";
    }
    GetVictoryPoints() {
        return -1;
    }
}
Curse.cardName = "curse";
//# sourceMappingURL=curse.js.map