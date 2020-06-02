import { VictoryCardDefinition } from "../victory-card-definition";
export class Duchy extends VictoryCardDefinition {
    constructor() {
        super();
        this.cost = 5;
        this.startingAmount = 12;
        this.isKingdom = false;
        this.imageName = "duchy.jpg";
    }
    GetVictoryPoints() {
        return 3;
    }
}
Duchy.cardName = "duchy";
//# sourceMappingURL=duchy.js.map