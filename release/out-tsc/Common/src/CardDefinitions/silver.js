import { TreasureCardDefinition } from "../treasure-card-definition";
export class Silver extends TreasureCardDefinition {
    constructor() {
        super();
        this.coinValue = 2;
        this.cost = 3;
        this.startingAmount = 40;
        this.isKingdom = false;
        this.imageName = "silver.jpg";
    }
}
Silver.cardName = "silver";
//# sourceMappingURL=silver.js.map