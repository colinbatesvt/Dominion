import { CardDefinition } from "./card-definition";
import { Copper } from "./CardDefinitions/copper";
import { Card } from "./card";
import { Silver } from "./CardDefinitions/silver";
import { Gold } from "./CardDefinitions/gold";
import { Estate } from "./CardDefinitions/estate";
import { Duchy } from "./CardDefinitions/duchy";
import { Province } from "./CardDefinitions/province";
import { Curse } from "./CardDefinitions/curse";

export class CardLibrary {

    private cardIndex: Record<string, CardDefinition>;

    constructor() {
        this.cardIndex = {};
        this.cardIndex[Copper.cardName] = new Copper();
        this.cardIndex[Silver.cardName] = new Silver();
        this.cardIndex[Gold.cardName] = new Gold();
        this.cardIndex[Estate.cardName] = new Estate();
        this.cardIndex[Duchy.cardName] = new Duchy();
        this.cardIndex[Province.cardName] = new Province();
        this.cardIndex[Curse.cardName] = new Curse();
    }

    public getAllCards() : Card[]
    {
       const cards: Card[] = [];
       for(let card in this.cardIndex)
       {
           cards.push(this.cardIndex[card].getCard())
       }

       return cards;
    }
}