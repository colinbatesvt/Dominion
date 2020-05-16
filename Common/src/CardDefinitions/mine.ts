import { ActionCardDefinition } from "../action-card-definition";

export class Mine extends ActionCardDefinition
{
    public static cardName: string = "mine";

    public constructor() {
        super();
        this.cost = 5;
        this.cardImageUrl = "/assets/card_images/mine.jpg";
    }

    play() {
        //you may trash a treasure from your hand. Gain a Treasure to your hand costing up to 3 more than it
    }
}