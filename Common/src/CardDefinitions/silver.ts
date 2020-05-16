import { TreasureCardDefinition } from "../treasure-card-definition";

export class Silver extends TreasureCardDefinition
{
    public static cardName: string = "silver";

    public constructor() {
        super();
        this.coinValue = 2;
        this.cost = 3;
        this.startingAmount = 40;
        this.isKingdom = false;
        this.cardImageUrl = "/assets/card_images/silver.jpg";
    }
}