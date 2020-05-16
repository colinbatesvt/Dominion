import { ActionCardDefinition } from "../action-card-definition";

export class Smithy extends ActionCardDefinition
{
    public static cardName: string = "smithy";

    public constructor() {
        super();
        this.cost = 4;
        this.cardImageUrl = "/assets/card_images/smithy.jpg";
    }

    play() {
        // + 3 cards
    }
}