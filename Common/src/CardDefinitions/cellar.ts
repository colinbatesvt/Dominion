import { ActionCardDefinition } from "../action-card-definition";

export class Cellar extends ActionCardDefinition
{
    public static cardName: string = "cellar";
    
    public constructor() {
        super();
        this.cost = 2;
        this.cardImageUrl = "/assets/card_images/cellar.jpg";
    }

    play() {
        // + 1 action

        //discard any number of cards, then draw that many
    }
}