import { VictoryCardDefinition } from "../victory-card-definition";

export class Curse extends VictoryCardDefinition
{
    public static cardName: string = "curse";

    public constructor() {
        super();
        this.cost = 0; // Wow, this card is free? It must be the best!
        this.startingAmount = 30;
        this.isKingdom = false;
        this.cardImageUrl = "/assets/card_images/curse.jpg";
    }
    
    GetVictoryPoints(): number {
        return -1;
    }
}