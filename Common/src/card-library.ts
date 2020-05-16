import { CardDefinition } from "./card-definition";
import { Copper } from "./CardDefinitions/copper";
import { Card } from "./card";
import { Silver } from "./CardDefinitions/silver";
import { Gold } from "./CardDefinitions/gold";
import { Estate } from "./CardDefinitions/estate";
import { Duchy } from "./CardDefinitions/duchy";
import { Province } from "./CardDefinitions/province";
import { Curse } from "./CardDefinitions/curse";
import { Cellar } from "./CardDefinitions/cellar";
import { Workshop } from "./CardDefinitions/workshop";
import { Market } from "./CardDefinitions/market";
import { Militia } from "./CardDefinitions/militia";
import { Mine } from "./CardDefinitions/mine";
import { Moat } from "./CardDefinitions/Moat";
import { Remodel } from "./CardDefinitions/Remodel";
import { Smithy } from "./CardDefinitions/smithy";
import { Village } from "./CardDefinitions/village";
import { Woodcutter } from "./CardDefinitions/woodcutter";

export class CardLibrary {

    private cardIndex: Record<string, CardDefinition>;
    private nextCardId: number;

    constructor() {
        this.nextCardId = 0;

        this.cardIndex = {};
        this.cardIndex[Copper.cardName] = new Copper();
        this.cardIndex[Silver.cardName] = new Silver();
        this.cardIndex[Gold.cardName] = new Gold();
        this.cardIndex[Estate.cardName] = new Estate();
        this.cardIndex[Duchy.cardName] = new Duchy();
        this.cardIndex[Province.cardName] = new Province();
        this.cardIndex[Curse.cardName] = new Curse();

        //actions
        this.cardIndex[Cellar.cardName] = new Cellar();
        this.cardIndex[Market.cardName] = new Market();
        this.cardIndex[Militia.cardName] = new Militia();
        this.cardIndex[Mine.cardName] = new Mine();
        this.cardIndex[Moat.cardName] = new Moat();
        this.cardIndex[Remodel.cardName] = new Remodel();
        this.cardIndex[Smithy.cardName] = new Smithy();
        this.cardIndex[Village.cardName] = new Village();
        this.cardIndex[Woodcutter.cardName] = new Woodcutter();
        this.cardIndex[Workshop.cardName] = new Workshop();
    }

    public getAllCards() : Card[]
    {
       const cards: Card[] = [];
       for(let card in this.cardIndex)
       {
           cards.push(this.cardIndex[card].getCard(this.nextCardId))
           this.nextCardId++;
       }

       return cards;
    }
}