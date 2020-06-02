import { Copper } from "./CardDefinitions/copper";
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
            Workshop.cardName
        ];
    }
    getAllCards() {
        const cards = [];
        for (let card in this.cardIndex) {
            cards.push(this.cardIndex[card].getCard(this.nextCardId));
            this.nextCardId++;
        }
        return cards;
    }
    getCard(cardName) {
        if (this.cardIndex[cardName] !== undefined) {
            const card = this.cardIndex[cardName].getCard(this.nextCardId);
            this.nextCardId++;
            return card;
        }
        else
            return null;
    }
    getCardDefinition(cardName) {
        return this.cardIndex[cardName];
    }
    getBasicCardNames() {
        const cards = [];
        for (let card in this.cardIndex) {
            if (!this.cardIndex[card].isKingdom) {
                cards.push(this.cardIndex[card].getCardName());
            }
        }
        return cards;
    }
    getPresetNames() {
        return Object.keys(this.presetIndex);
    }
    getPresetCardNames(preset) {
        return this.presetIndex[preset];
    }
}
//# sourceMappingURL=card-library.js.map