import { TreasureCardDefinition } from "../treasure-card-definition";
export class Copper extends TreasureCardDefinition {
    constructor() {
        super();
        this.coinValue = 1;
        this.cost = 0;
        this.startingAmount = 60;
        this.isKingdom = false;
        this.imageName = "copper.jpg";
    }
}
Copper.cardName = "copper";
//# sourceMappingURL=copper.js.map