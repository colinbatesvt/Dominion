import { ActionCardDefinition } from "../action-card-definition";

export class Market extends ActionCardDefinition
{
    public static cardName: string = "market";

    public constructor() {
        super();
        this.isKingdom = true;
        this.cardImageUrl = "/assets/card_images/market.jpg";
    }

    play() {
        // + 1 card
        // + 1 action
        // + 1 buy
        // + 1 coin
    }
}