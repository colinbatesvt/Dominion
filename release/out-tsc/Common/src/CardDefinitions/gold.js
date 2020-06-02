import { TreasureCardDefinition } from "../treasure-card-definition";
export class Gold extends TreasureCardDefinition {
    constructor() {
        super();
        this.coinValue = 3;
        this.cost = 6;
        this.startingAmount = 30;
        this.isKingdom = false;
        this.imageName = "gold.jpg";
    }
}
Gold.cardName = "gold";
//# sourceMappingURL=gold.js.map