import { ActionCardDefinition, SubType } from "../action-card-definition";

export class Moat extends ActionCardDefinition
{
    public static cardName: string = "moat";

    public constructor() {
        super();
        this.cost = 2;
        this.subType = SubType.reaction;
        this.cardImageUrl = "/assets/card_images/moat.jpg";
    }

    play() {
        // + 2 cards

        // when another player plays an attack card you may first reveal this from your hand, to be unaffected by it.
    }
}