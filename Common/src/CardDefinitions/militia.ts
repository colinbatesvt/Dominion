import { ActionCardDefinition, SubType } from "../action-card-definition";

export class Militia extends ActionCardDefinition
{
    
    public static cardName: string = "militia";

    public constructor() {
        super();
        this.cost = 4;
        this.subType = SubType.attack;
        this.cardImageUrl = "/assets/card_images/militia.jpg";
    }

    play() {
        // + 2 coins

        //each other player discards down to 3 cards in hand
    }
}