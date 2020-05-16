import { VictoryCardDefinition } from "../victory-card-definition";

export class Estate extends VictoryCardDefinition
{

    public static cardName: string = "estate";

    public constructor() {
        super();
        this.cost = 2;
        this.startingAmount = 24;
        this.isKingdom = false;
        this.cardImageUrl = "/assets/card_images/estate.jpg";
    }
    
    GetVictoryPoints(): number {
        return 1;
    }
}