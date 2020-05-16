import { ActionCardDefinition } from "../action-card-definition";

export class Village extends ActionCardDefinition
{
    public static cardName: string = "village";
    public constructor() {
        super();
        this.cost = 3;
        this.cardImageUrl = "/assets/card_images/village.jpg";
    }

    play() {
        // + 1 card
        // + 2 actions
    }
}