import { Card } from "./card";

export enum GainLocation {
    deck = 0,
    hand,
    discard,
}

export enum PlayerState {
    Action,
    Buy,
    CleanUp,
    WaitingForTurn
}

export abstract class Player {

    public name: string;
    public index: number; // index within game's player array
    public color: string;

    public state: PlayerState;
    public setupReady: boolean;

    public deck: Card[];
    public hand: Card[];
    public inPlay: Card[];
    public discard: Card[];

    constructor(playerName: string, playerColor: string, index: number)
    {
        this.name = playerName;
        this.index = index;
        this.color = playerColor;
        this.state = PlayerState.WaitingForTurn;
        this.setupReady = false;

        this.deck = [];
        this.hand = [];
        this.inPlay = [];
        this.discard = [];
    }


    public gain(location: GainLocation, card: Card)
    {
        switch(location)
        {
            case GainLocation.deck:
                this.deck.push(card);
                // shuffle?
                break;

            case GainLocation.hand:
                this.hand.push(card);
                break;

            case GainLocation.discard:
                this.discard.push(card)
                break;
        }
    }

    public draw(drawCount: Number) {
        for(let i = 0; i < drawCount; i++)
        {
            if(this.deck.length > 0)
            {
                const card: Card | undefined = this.deck.pop();
                if(card !== undefined) {
                    this.hand.push(card);
                }
            }
            //no cards in deck, move cards from discard to deck
            else 
            {
                for(let n = 0; n < this.discard.length; n++)
                {
                    const discardCard: Card | undefined = this.discard.pop();
                    if(discardCard !== undefined)
                        this.deck.push(discardCard);
                }

                // shuffle, then draw if we have a deck
                this.shuffle();

                if(this.deck.length > 0)
                {
                    const card: Card | undefined = this.deck.pop();
                    if(card !== undefined) {
                        this.hand.push(card);
                    }
                }
            }
        }
    }

    public shuffle() {
        // perform a fisher-yates shuffle on the deck array
        // this is done by swapping each element of the array with a random previous element
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    public setState(state: PlayerState){
        this.state = state;
    }
}

export class HumanPlayer extends Player{

    public socketId: any;
    public connected: boolean;

    constructor(playerName: string, playerColor: string, socketId: any, index: number) {
        super(playerName, playerColor, index);
        this.socketId = socketId;
        this.connected = true;
        this.setupReady = false;
    }
    
    public SetConnected(connected: boolean)
    {
        this.connected = connected;
    }
}

export class AIPlayer extends Player{

    constructor(playerName: string, playerColor: string, index: number) {
        super(playerName, playerColor, index);
        this.setupReady = true;
    }
}