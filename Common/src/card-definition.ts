import { Card } from "./card";

export abstract class CardDefinition{

    cardImageUrl : string = "";
    cost: number;
    startingAmount: number;
    isKingdom: boolean;

    constructor() {
        this.cost = 0;
        this.startingAmount = 0;
        this.isKingdom = true;
    }

    public getCard(): Card{
        const card: Card = {url: this.GetURL()};
        
        return card;
    }

    //override in child classes
    public GetURL() : string {
        return this.cardImageUrl;
    }
}