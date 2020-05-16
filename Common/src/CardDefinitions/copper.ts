import { TreasureCardDefinition } from "../treasure-card-definition";

export class Copper extends TreasureCardDefinition
{
    public static cardName: string = "copper";

    public constructor() {
        super();
        this.coinValue = 1;
        this.cost = 0;
        this.startingAmount = 60;
        this.isKingdom = false;
        this.cardImageUrl = "/assets/card_images/copper.jpg";
    }
}