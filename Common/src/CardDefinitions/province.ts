import { VictoryCardDefinition } from "../victory-card-definition";

export class Province extends VictoryCardDefinition
{

    public static cardName: string = "province";

    public constructor() {
        super();
        this.cost = 8;
        this.startingAmount = 12;
        this.isKingdom = false;
        this.cardImageUrl = "/assets/card_images/province.jpg";
    }
    
    GetVictoryPoints(): number {
        return 6;
    }
}