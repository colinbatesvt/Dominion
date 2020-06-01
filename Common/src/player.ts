import { Card } from "./card";
import { CardType } from "./card-definition";
import { CardLibrary } from "./card-library";
import { Game } from "./game";

export enum Location {
    deck = 0,
    revealed,
    hand,
    inPlay,
    discard,
    shop
}

export enum PlayerState {
    Action = "action",
    Buy = "buy",
    CleanUp = "clean-up",
    WaitingForTurn= "waiting"
}

export interface UserSelection {
    location: Location;
    isValid: (card:Card) => boolean; //function that returns whether a given card can be added to the selection
    count: number
}

export abstract class Player {

    private library: CardLibrary;

    public name: string;
    public index: number; // index within game's player array
    public color: string;

    public state: PlayerState;
    public setupReady: boolean;

    public deck: Card[];
    public revealed: Card[];
    public hand: Card[];
    public inPlay: Card[];
    public discard: Card[];

    public actions: number;
    public buys: number;
    public coins: number;
    public userPrompts: string[][]; // this is a stack of arrays of strings. Describes prompts display ed to the user on status bar buttons

    public userSelections: UserSelection[][]; // this is a stack of arrays that describe what the user can select right now

    public status: string;

    constructor(playerName: string, playerColor: string, index: number)
    {
        this.library = new CardLibrary;

        this.name = playerName;
        this.index = index;
        this.color = playerColor;
        this.state = PlayerState.WaitingForTurn;
        this.setupReady = false;

        this.deck = [];
        this.revealed = [];
        this.hand = [];
        this.inPlay = [];
        this.discard = [];

        this.actions = 0;
        this.buys = 0;
        this.coins = 0;

        this.userSelections = [];
        this.userPrompts = [];

        this.status = "";
    }


    public gain(location: Location, card: Card)
    {
        switch(location)
        {
            case Location.deck:
                this.deck.push(card);
                break;

            case Location.hand:
                this.hand.push(card);
                break;

            case Location.discard:
                this.discard.unshift(card); //add to front of discard so player can see it
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
                while(this.discard.length > 0)
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

    public discardCard(card: Card)
    {
        for(let i = 0; i < this.hand.length; i++)
        {
            if(this.hand[i].id === card.id)
            {
                this.hand.splice(i, 1);
            }
        }

        this.discard.push(card);
    }

    //execute the clean up phase
    public cleanUp() {

        //move revealed into discard (prob shouldn't be any at this point...)
        while(this.revealed.length > 0)
        {
            const card : Card = this.revealed[0];
            this.revealed.splice(0, 1);

            this.discard.push(card);
        }

        //move hand into discard
        while(this.hand.length > 0)
        {
            const card : Card = this.hand[0];
            card.revealedToOthers = false;
            this.hand.splice(0, 1);

            this.discard.push(card);
        }

        //move in play into discard
        while(this.inPlay.length > 0)
        {
            const card : Card = this.inPlay[0];
            card.revealedToOthers = false;
            this.inPlay.splice(0, 1);

            this.discard.push(card);
        }

        //draw a new hand
        this.draw(5);

        //reset values
        this.actions = 0;
        this.buys = 0;
        this.coins = 0;
    }

    //how many cards of the given type are in our hand?
    public typeAmountInHand(type: CardType) : number {
        let count: number = 0;

        //if the current player has actions left, but no action cards in their hand, move to buy phase
        for(let card of this.hand)
        {
            if(this.library.getCardDefinition(card.name).cardType == CardType.action)
                count++;
        }

        return count;
    }

    //set the current state, and set what kind of card we want the user to pick
    public setState(state: PlayerState, game: Game){
        this.state = state;

        //when moving to a new phase, we start fresh
        this.userSelections = [];
        this.userPrompts = [];
    }

    public addStateActions(game: Game)
    {
        // tell the user what we're looking for
        if(this.state === PlayerState.WaitingForTurn)
        {
            //nothing to pick
        }
        else if(this.state === PlayerState.Action)
        {
            //in the action phase you choose actions to play from your hand
            const actionPhaseSelections: UserSelection[] = [];
            const pickAction : UserSelection = { location: Location.hand, isValid: (card: Card) => {return card.type === CardType.action;}, count: 1};
            actionPhaseSelections.push(pickAction);

            this.userPrompts.push(['done']);
            this.pushSelection(actionPhaseSelections, game);
        }
        else if (this.state === PlayerState.Buy)
        {
            //in the buy phase you can play treasure cards to get more coins, and use coins to buy from the shop
            const buyPhaseSelections: UserSelection[] = [];
            const pickTreasure : UserSelection = { location: Location.hand, isValid: (card: Card) => {return card.type === CardType.treasure;}, count: 1};
            const pickShop : UserSelection = { location: Location.shop, isValid: (card: Card) => {return true;}, count: 1};
            buyPhaseSelections.push(pickTreasure);
            buyPhaseSelections.push(pickShop);

            this.userPrompts.push(['done']);
            this.pushSelection(buyPhaseSelections, game);
        }
        else if(this.state === PlayerState.CleanUp)
        {
            //nothing to pick
        }
    }

    public pushSelection(selection: UserSelection[], game: Game)
    {
        this.userSelections.push(selection);

        //if we give the AI a selection, just do it
        if(this instanceof AIPlayer)
        {
            const ai: AIPlayer = this as AIPlayer;
            ai.doCurrentSelection(game);
        }
    }

    public popSelection() : UserSelection[] {
        const popped: UserSelection[] = this.userSelections[this.userSelections.length-1];
        this.userSelections.splice(this.userSelections.length-1, 1);
        return popped;
    }

    public pushPrompt(prompts: string[]) 
    {
        this.userPrompts.push(prompts);
    }

    public popPrompt() : string[] {
        const popped: string[] = this.userPrompts[this.userPrompts.length-1];
        this.userPrompts.splice(this.userPrompts.length -1, 1);
        return popped;
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

    constructor(playerName: string, playerColor: string, index: number, game: Game) {
        super(playerName, playerColor, index);
        this.setupReady = true;
        // this.game = game;
    }

    //ugly sleep, yuck
    public wait(ms: number){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
    }

    public doCurrentSelection(game: Game) {

        //wait a bit to let users see what's happening
        this.wait(1000);

        if(this.userSelections.length > 0)
        {
            const currentSelection : UserSelection[] = this.userSelections[this.userSelections.length - 1];

            for(let i = 0; i < currentSelection.length; i++)
            {
                const selection = currentSelection[i];
                switch(selection.location)
                {
                    case Location.hand:
                        let cards: Card[] = [];
                        for (const card of this.hand)
                        {
                            if(selection.isValid(card) === true)
                            {
                                cards.push(card);
                                if( cards.length === selection.count)
                                {
                                    //tell the game we choose these cards
                                    if(game.onCardsSelected(this.index, cards) === true)
                                        return;
                                }
                            }
                        }
                        //didn't find anything, send back a blank
                        if(i == currentSelection.length - 1)
                        {
                            game.onCardsSelected(this.index, cards);
                        }
                        break;
                    case Location.deck:
                        break;

                    case Location.shop:
                        for(const card in game.shop)
                        {
                           let cards: Card[] = [];
                           cards.push(game.shop[card][0]);

                           if(game.onCardsSelected(this.index, cards) === true)
                            return;
                        }
                        //somehow none of the cards in the shop worked, uh oh
                        break;

                    case Location.discard:
                        //need to implement this if it's ever a thing
                        break;
                    
                    case Location.inPlay:
                        break;
                }
            }
        }
    }
}