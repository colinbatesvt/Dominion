import { ActionCardDefinition } from "../action-card-definition";

export class Woodcutter extends ActionCardDefinition
{
    public static cardName: string = "woodcutter";
    public constructor() {
        super();
        this.cost = 3;
        this.cardImageUrl = "/assets/card_images/woodcutter.jpg";
    }

    play() {
        // + 1 buy
        // + 2 coins
    }
}