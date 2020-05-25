import { TreasureCardDefinition } from "../treasure-card-definition";

export class Gold extends TreasureCardDefinition
{
    public static cardName: string = "gold";

    public constructor() {
        super();
        this.coinValue = 3;
        this.cost = 6;
        this.startingAmount = 30;
        this.isKingdom = false;
        this.imageName = "gold.jpg";
    }
}