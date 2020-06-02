import { VictoryCardDefinition } from "../victory-card-definition";
export class Estate extends VictoryCardDefinition {
    constructor() {
        super();
        this.cost = 2;
        this.startingAmount = 24;
        this.isKingdom = false;
        this.imageName = "estate.jpg";
    }
    GetVictoryPoints() {
        return 1;
    }
}
Estate.cardName = "estate";
//# sourceMappingURL=estate.js.map