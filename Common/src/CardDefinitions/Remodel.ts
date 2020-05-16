import { ActionCardDefinition } from "../action-card-definition";

export class Remodel extends ActionCardDefinition
{
    public static cardName: string = "remodel";

    public constructor() {
        super();
        this.cost = 4;
        this.cardImageUrl = "/assets/card_images/remodel.jpg";
    }

    play() {
        // Trash a card from your hand gain a card costing up to 2 more than it
    }
}