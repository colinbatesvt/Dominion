"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var card_definition_1 = require("./card-definition");
var card_library_1 = require("./card-library");
var Location;
(function (Location) {
    Location[Location["deck"] = 0] = "deck";
    Location[Location["revealed"] = 1] = "revealed";
    Location[Location["hand"] = 2] = "hand";
    Location[Location["inPlay"] = 3] = "inPlay";
    Location[Location["discard"] = 4] = "discard";
    Location[Location["shop"] = 5] = "shop";
})(Location = exports.Location || (exports.Location = {}));
var PlayerState;
(function (PlayerState) {
    PlayerState["Action"] = "action";
    PlayerState["Buy"] = "buy";
    PlayerState["CleanUp"] = "clean-up";
    PlayerState["WaitingForTurn"] = "waiting";
})(PlayerState = exports.PlayerState || (exports.PlayerState = {}));
var Player = /** @class */ (function () {
    function Player(playerName, playerColor, index) {
        this.library = new card_library_1.CardLibrary;
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
    Player.prototype.gain = function (location, card) {
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
    };
    Player.prototype.draw = function (drawCount) {
        for (var i = 0; i < drawCount; i++) {
            if (this.deck.length > 0) {
                var card = this.deck.pop();
                if (card !== undefined) {
                    this.hand.push(card);
                }
            }
            //no cards in deck, move cards from discard to deck
            else {
                while (this.discard.length > 0) {
                    var discardCard = this.discard.pop();
                    if (discardCard !== undefined)
                        this.deck.push(discardCard);
                }
                // shuffle, then draw if we have a deck
                this.shuffle();
                if (this.deck.length > 0) {
                    var card = this.deck.pop();
                    if (card !== undefined) {
                        this.hand.push(card);
                    }
                }
            }
        }
    };
    Player.prototype.shuffle = function () {
        var _a;
        // perform a fisher-yates shuffle on the deck array
        // this is done by swapping each element of the array with a random previous element
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            _a = [this.deck[j], this.deck[i]], this.deck[i] = _a[0], this.deck[j] = _a[1];
        }
    };
    Player.prototype.discardCard = function (card) {
        for (var i = 0; i < this.hand.length; i++) {
            if (this.hand[i].id === card.id) {
                this.hand.splice(i, 1);
            }
        }
        this.discard.push(card);
    };
    //execute the clean up phase
    Player.prototype.cleanUp = function () {
        //move revealed into discard (prob shouldn't be any at this point...)
        while (this.revealed.length > 0) {
            var card = this.revealed[0];
            this.revealed.splice(0, 1);
            this.discard.push(card);
        }
        //move hand into discard
        while (this.hand.length > 0) {
            var card = this.hand[0];
            card.revealedToOthers = false;
            this.hand.splice(0, 1);
            this.discard.push(card);
        }
        //move in play into discard
        while (this.inPlay.length > 0) {
            var card = this.inPlay[0];
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
    };
    //how many cards of the given type are in our hand?
    Player.prototype.typeAmountInHand = function (type) {
        var count = 0;
        //if the current player has actions left, but no action cards in their hand, move to buy phase
        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            if (this.library.getCardDefinition(card.name).cardType == card_definition_1.CardType.action)
                count++;
        }
        return count;
    };
    //set the current state, and set what kind of card we want the user to pick
    Player.prototype.setState = function (state, game) {
        this.state = state;
        //when moving to a new phase, we start fresh
        this.userSelections = [];
        this.userPrompts = [];
    };
    Player.prototype.addStateActions = function (game) {
        // tell the user what we're looking for
        if (this.state === PlayerState.WaitingForTurn) {
            //nothing to pick
        }
        else if (this.state === PlayerState.Action) {
            //in the action phase you choose actions to play from your hand
            var actionPhaseSelections = [];
            var pickAction = { location: Location.hand, isValid: function (card) { return card.type === card_definition_1.CardType.action; }, count: 1 };
            actionPhaseSelections.push(pickAction);
            this.userPrompts.push(['done']);
            this.pushSelection(actionPhaseSelections, game);
        }
        else if (this.state === PlayerState.Buy) {
            //in the buy phase you can play treasure cards to get more coins, and use coins to buy from the shop
            var buyPhaseSelections = [];
            var pickTreasure = { location: Location.hand, isValid: function (card) { return card.type === card_definition_1.CardType.treasure; }, count: 1 };
            var pickShop = { location: Location.shop, isValid: function (card) { return true; }, count: 1 };
            buyPhaseSelections.push(pickTreasure);
            buyPhaseSelections.push(pickShop);
            this.userPrompts.push(['done']);
            this.pushSelection(buyPhaseSelections, game);
        }
        else if (this.state === PlayerState.CleanUp) {
            //nothing to pick
        }
    };
    Player.prototype.pushSelection = function (selection, game) {
        this.userSelections.push(selection);
        //if we give the AI a selection, just do it
        if (this instanceof AIPlayer) {
            var ai = this;
            ai.doCurrentSelection(game);
        }
    };
    Player.prototype.popSelection = function () {
        var popped = this.userSelections[this.userSelections.length - 1];
        this.userSelections.splice(this.userSelections.length - 1, 1);
        return popped;
    };
    Player.prototype.pushPrompt = function (prompts) {
        this.userPrompts.push(prompts);
    };
    Player.prototype.popPrompt = function () {
        var popped = this.userPrompts[this.userPrompts.length - 1];
        this.userPrompts.splice(this.userPrompts.length - 1, 1);
        return popped;
    };
    return Player;
}());
exports.Player = Player;
var HumanPlayer = /** @class */ (function (_super) {
    __extends(HumanPlayer, _super);
    function HumanPlayer(playerName, playerColor, socketId, index) {
        var _this = _super.call(this, playerName, playerColor, index) || this;
        _this.socketId = socketId;
        _this.connected = true;
        _this.setupReady = false;
        return _this;
    }
    HumanPlayer.prototype.SetConnected = function (connected) {
        this.connected = connected;
    };
    return HumanPlayer;
}(Player));
exports.HumanPlayer = HumanPlayer;
var AIPlayer = /** @class */ (function (_super) {
    __extends(AIPlayer, _super);
    function AIPlayer(playerName, playerColor, index, game) {
        var _this = _super.call(this, playerName, playerColor, index) || this;
        _this.setupReady = true;
        return _this;
        // this.game = game;
    }
    //ugly sleep, yuck
    AIPlayer.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };
    AIPlayer.prototype.doCurrentSelection = function (game) {
        //wait a bit to let users see what's happening
        this.wait(1000);
        if (this.userSelections.length > 0) {
            var currentSelection = this.userSelections[this.userSelections.length - 1];
            for (var i = 0; i < currentSelection.length; i++) {
                var selection = currentSelection[i];
                switch (selection.location) {
                    case Location.hand:
                        var cards = [];
                        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
                            var card = _a[_i];
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
                        for (var card in game.shop) {
                            var cards_1 = [];
                            cards_1.push(game.shop[card][0]);
                            if (game.onCardsSelected(this.index, cards_1) === true)
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
    };
    return AIPlayer;
}(Player));
exports.AIPlayer = AIPlayer;
//# sourceMappingURL=player.js.map