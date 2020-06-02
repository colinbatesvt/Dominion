import { CardType } from "./card-definition";
import { CardLibrary } from "./card-library";
export var Location;
(function (Location) {
    Location[Location["deck"] = 0] = "deck";
    Location[Location["revealed"] = 1] = "revealed";
    Location[Location["hand"] = 2] = "hand";
    Location[Location["inPlay"] = 3] = "inPlay";
    Location[Location["discard"] = 4] = "discard";
    Location[Location["shop"] = 5] = "shop";
})(Location || (Location = {}));
export var PlayerState;
(function (PlayerState) {
    PlayerState["Action"] = "action";
    PlayerState["Buy"] = "buy";
    PlayerState["CleanUp"] = "clean-up";
    PlayerState["WaitingForTurn"] = "waiting";
})(PlayerState || (PlayerState = {}));
export class Player {
    constructor(playerName, playerColor, index) {
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
    gain(location, card) {
        switch (location) {
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
    draw(drawCount) {
        for (let i = 0; i < drawCount; i++) {
            if (this.deck.length > 0) {
                const card = this.deck.pop();
                if (card !== undefined) {
                    this.hand.push(card);
                }
            }
            //no cards in deck, move cards from discard to deck
            else {
                while (this.discard.length > 0) {
                    const discardCard = this.discard.pop();
                    if (discardCard !== undefined)
                        this.deck.push(discardCard);
                }
                // shuffle, then draw if we have a deck
                this.shuffle();
                if (this.deck.length > 0) {
                    const card = this.deck.pop();
                    if (card !== undefined) {
                        this.hand.push(card);
                    }
                }
            }
        }
    }
    shuffle() {
        // perform a fisher-yates shuffle on the deck array
        // this is done by swapping each element of the array with a random previous element
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    discardCard(card) {
        for (let i = 0; i < this.hand.length; i++) {
            if (this.hand[i].id === card.id) {
                this.hand.splice(i, 1);
            }
        }
        this.discard.push(card);
    }
    //execute the clean up phase
    cleanUp() {
        //move revealed into discard (prob shouldn't be any at this point...)
        while (this.revealed.length > 0) {
            const card = this.revealed[0];
            this.revealed.splice(0, 1);
            this.discard.push(card);
        }
        //move hand into discard
        while (this.hand.length > 0) {
            const card = this.hand[0];
            card.revealedToOthers = false;
            this.hand.splice(0, 1);
            this.discard.push(card);
        }
        //move in play into discard
        while (this.inPlay.length > 0) {
            const card = this.inPlay[0];
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
    typeAmountInHand(type) {
        let count = 0;
        //if the current player has actions left, but no action cards in their hand, move to buy phase
        for (let card of this.hand) {
            if (this.library.getCardDefinition(card.name).cardType == CardType.action)
                count++;
        }
        return count;
    }
    //set the current state, and set what kind of card we want the user to pick
    setState(state, game) {
        this.state = state;
        //when moving to a new phase, we start fresh
        this.userSelections = [];
        this.userPrompts = [];
    }
    addStateActions(game) {
        // tell the user what we're looking for
        if (this.state === PlayerState.WaitingForTurn) {
            //nothing to pick
        }
        else if (this.state === PlayerState.Action) {
            //in the action phase you choose actions to play from your hand
            const actionPhaseSelections = [];
            const pickAction = { location: Location.hand, isValid: (card) => { return card.type === CardType.action; }, count: 1 };
            actionPhaseSelections.push(pickAction);
            this.userPrompts.push(['done']);
            this.pushSelection(actionPhaseSelections, game);
        }
        else if (this.state === PlayerState.Buy) {
            //in the buy phase you can play treasure cards to get more coins, and use coins to buy from the shop
            const buyPhaseSelections = [];
            const pickTreasure = { location: Location.hand, isValid: (card) => { return card.type === CardType.treasure; }, count: 1 };
            const pickShop = { location: Location.shop, isValid: (card) => { return true; }, count: 1 };
            buyPhaseSelections.push(pickTreasure);
            buyPhaseSelections.push(pickShop);
            this.userPrompts.push(['done']);
            this.pushSelection(buyPhaseSelections, game);
        }
        else if (this.state === PlayerState.CleanUp) {
            //nothing to pick
        }
    }
    pushSelection(selection, game) {
        this.userSelections.push(selection);
        //if we give the AI a selection, just do it
        if (this instanceof AIPlayer) {
            const ai = this;
            ai.doCurrentSelection(game);
        }
    }
    popSelection() {
        const popped = this.userSelections[this.userSelections.length - 1];
        this.userSelections.splice(this.userSelections.length - 1, 1);
        return popped;
    }
    pushPrompt(prompts) {
        this.userPrompts.push(prompts);
    }
    popPrompt() {
        const popped = this.userPrompts[this.userPrompts.length - 1];
        this.userPrompts.splice(this.userPrompts.length - 1, 1);
        return popped;
    }
}
export class HumanPlayer extends Player {
    constructor(playerName, playerColor, socketId, index) {
        super(playerName, playerColor, index);
        this.socketId = socketId;
        this.connected = true;
        this.setupReady = false;
    }
    SetConnected(connected) {
        this.connected = connected;
    }
}
export class AIPlayer extends Player {
    constructor(playerName, playerColor, index, game) {
        super(playerName, playerColor, index);
        this.setupReady = true;
        // this.game = game;
    }
    //ugly sleep, yuck
    wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }
    doCurrentSelection(game) {
        //wait a bit to let users see what's happening
        this.wait(1000);
        if (this.userSelections.length > 0) {
            const currentSelection = this.userSelections[this.userSelections.length - 1];
            for (let i = 0; i < currentSelection.length; i++) {
                const selection = currentSelection[i];
                switch (selection.location) {
                    case Location.hand:
                        let cards = [];
                        for (const card of this.hand) {
                            if (selection.isValid(card) === true) {
                                cards.push(card);
                                if (cards.length === selection.count) {
                                    //tell the game we choose these cards
                                    if (game.onCardsSelected(this.index, cards) === true)
                                        return;
                                }
                            }
                        }
                        //didn't find anything, send back a blank
                        if (i == currentSelection.length - 1) {
                            game.onCardsSelected(this.index, cards);
                        }
                        break;
                    case Location.deck:
                        break;
                    case Location.shop:
                        for (const card in game.shop) {
                            let cards = [];
                            cards.push(game.shop[card][0]);
                            if (game.onCardsSelected(this.index, cards) === true)
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
//# sourceMappingURL=player.js.map