import { Card } from "./card";
import { Player } from "./player";
import { Game } from "./game";

export enum CardType {
    any = 0,
    action,
    victory,
    treasure
};

export abstract class CardDefinition{

    public static cardName: string;

    imageName : string = "";
    cost: number;
    startingAmount: number;
    isKingdom: boolean;
    cardType: CardType;

    constructor() {
        this.cost = 0;
        this.startingAmount = 0;
        this.isKingdom = true;
        this.cardType = CardType.action;
    }

    public getCard(id: number): Card{
        const card: Card = {
            id: id,
            imageName: this.GetImageName(),
            name: (<typeof CardDefinition> this.constructor).cardName, //yuck, but this is the only way as far as I can tell
            isKingdom: this.isKingdom,
            type: this.cardType,
            revealedToOthers: false
        };
        
        return card;
    }

    public getCardName(): string{
        return (<typeof CardDefinition> this.constructor).cardName
    }

    public GetImageName() : string {
        return this.imageName;
    }

    //execute the card's behaviour, this should be overriden by concrete subclasses that have behaviour on the card being played
    public execute(game: Game, player: Player) {

    }

    //for cards that require the user to select something, they can override this
    public onSelection(game: Game, player: Player, cards: Card[]) : boolean{
        return true;
    }
}