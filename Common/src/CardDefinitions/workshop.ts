import { ActionCardDefinition } from "../action-card-definition";

export class Workshop extends ActionCardDefinition
{
    public static cardName: string = "workshop";

    public constructor() {
        super();
        this.cost = 3;
        this.cardImageUrl = "/assets/card_images/workshop.jpg";
    }

    play() {
        // gain a card costing up to 4
    }
}