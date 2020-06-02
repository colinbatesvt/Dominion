import { VictoryCardDefinition } from "../victory-card-definition";
export class Province extends VictoryCardDefinition {
    constructor() {
        super();
        this.cost = 8;
        this.startingAmount = 12;
        this.isKingdom = false;
        this.imageName = "province.jpg";
    }
    GetVictoryPoints() {
        return 6;
    }
}
Province.cardName = "province";
//# sourceMappingURL=province.js.map