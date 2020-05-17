import { Card } from "./card";

export abstract class CardDefinition{

    public static cardName: string;

    cardImageUrl : string = "";
    cost: number;
    startingAmount: number;
    isKingdom: boolean;

    constructor() {
        this.cost = 0;
        this.startingAmount = 0;
        this.isKingdom = true;
    }

    public getCard(id: number): Card{
        const card: Card = {
            id: id,
            url: this.GetURL(),
            cardType: (<typeof CardDefinition> this.constructor).cardName, //yuck, but this is the only way as far as I can tell
            isKingdom: this.isKingdom
        };
        
        return card;
    }

    public getCardName(): string{
        return (<typeof CardDefinition> this.constructor).cardName
    }

    //override in child classes
    public GetURL() : string {
        return this.cardImageUrl;
    }
}