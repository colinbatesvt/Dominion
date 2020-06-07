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
import { Laboratory } from "./CardDefinitions/laboratory";
import { Festival } from "./CardDefinitions/festival";
import { CouncilRoom } from "./CardDefinitions/council_room";
import { Chapel } from "./CardDefinitions/chapel";

export class CardLibrary {

    private cardIndex: Record<string, CardDefinition>; // map of card names to card definitions
    private nextCardId: number;
    private presetIndex: Record<string, string[]>; // map of preset names to card names in that preset

    constructor() {
        this.nextCardId = 0;

        this.cardIndex = {};
        // basic cards
        this.cardIndex[Copper.cardName] = new Copper();
        this.cardIndex[Silver.cardName] = new Silver();
        this.cardIndex[Gold.cardName] = new Gold();
        this.cardIndex[Estate.cardName] = new Estate();
        this.cardIndex[Duchy.cardName] = new Duchy();
        this.cardIndex[Province.cardName] = new Province();
        this.cardIndex[Curse.cardName] = new Curse();

        // actions
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
        this.cardIndex[Laboratory.cardName] = new Laboratory();
        this.cardIndex[Festival.cardName] = new Festival();
        this.cardIndex[CouncilRoom.cardName] = new CouncilRoom();
        this.cardIndex[Chapel.cardName] = new Chapel();

        // presets
        this.presetIndex = {};
        this.presetIndex['First Game'] = [
            Cellar.cardName,
            Market.cardName,
            Militia.cardName,
            Mine.cardName,
            Moat.cardName,
            Remodel.cardName,
            Smithy.cardName,
            Village.cardName,
            Woodcutter.cardName,
            Workshop.cardName];
    }

    public getAllCards() : Card[]
    {
       const cards: Card[] = [];
       for(const card in this.cardIndex)
       {
           if(card !== undefined)
           {
                cards.push(this.cardIndex[card].getCard(this.nextCardId))
                this.nextCardId++;
           }
       }

       return cards;
    }

    public getCard(cardName: string): Card | null {
        if(this.cardIndex[cardName] !== undefined)
        {
            const card: Card = this.cardIndex[cardName].getCard(this.nextCardId);
            this.nextCardId++;
            return card;
        }
        else
            return null;
    }

    public getCardDefinition(cardName: string) {
        return this.cardIndex[cardName];
    }

    public getBasicCardNames() : string[]
    {
       const cards: string[] = [];
       for(const card in this.cardIndex)
       {
           if (!this.cardIndex[card].isKingdom)
           {
                cards.push(this.cardIndex[card].getCardName());
           }
       }

       return cards;
    }

    public getPresetNames(): string[]
    {
        return Object.keys(this.presetIndex);
    }

    public getPresetCardNames(preset: string) : string[]
    {
        return this.presetIndex[preset];
    }
}