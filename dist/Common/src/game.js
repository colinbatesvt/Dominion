"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var card_library_1 = require("./card-library");
var card_definition_1 = require("./card-definition");
var estate_1 = require("./CardDefinitions/estate");
var copper_1 = require("./CardDefinitions/copper");
var province_1 = require("./CardDefinitions/province");
var GameState;
(function (GameState) {
    GameState["Setup"] = "setup";
    GameState["PlayGame"] = "play";
    GameState["GameOver"] = "over";
})(GameState = exports.GameState || (exports.GameState = {}));
;
var Game = /** @class */ (function () {
    function Game(gameName, serverCallback) {
        this.name = gameName;
        this.state = GameState.Setup;
        this.players = [];
        this.currentPlayer = -1;
        this.shop = {};
        this.trash = [];
        this.setupSelectedCards = [];
        this.setupPreset = '';
        this.library = new card_library_1.CardLibrary;
        this.executingCards = [];
    }
    Game.prototype.setGameState = function (newState) {
        this.state = newState;
    };
    Game.prototype.removePlayer = function (remove) {
        var index = this.players.indexOf(remove);
        this.players.splice(index, 1);
    };
    // does this game have any active players
    Game.prototype.hasNoActivePlayers = function () {
        var noActivePlayers = true;
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player instanceof player_1.HumanPlayer) {
                var humanPlayer = player;
                if (humanPlayer.connected)
                    noActivePlayers = false;
            }
        }
        return noActivePlayers;
    };
    Game.prototype.findPlayerById = function (socketId) {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player instanceof player_1.HumanPlayer) {
                var humanPlayer = player;
                if (humanPlayer.socketId === socketId)
                    return player;
            }
        }
        return undefined;
    };
    Game.prototype.findPlayerByName = function (playerName) {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.name === playerName)
                return player;
        }
        return undefined;
    };
    //returns an error message or blank string on success
    Game.prototype.playerJoin = function (playerName, playerColor, socketId) {
        // check for reconnect
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player instanceof player_1.HumanPlayer) {
                var humanPlayer = player;
                if (humanPlayer.name === playerName) {
                    if (humanPlayer.connected !== true) {
                        humanPlayer.socketId = socketId;
                        humanPlayer.SetConnected(true);
                        console.log(humanPlayer.name + ' reconnected. Socket ID = ' + socketId);
                        return "";
                    }
                }
            }
        }
        //game better not be already going
        if (this.state !== GameState.Setup) {
            return "Unable to join game, game is already in progress";
        }
        //only 4 players  in dominion
        if (this.players.length >= 4) {
            return "Unable to join game, player limit reached";
        }
        for (var _b = 0, _c = this.players; _b < _c.length; _b++) {
            var player = _c[_b];
            //player names have to be unique
            if (player.name === playerName) {
                return "There is already a player in the selected game with that name";
            }
            // player colors have to be unique
            if (player.color === playerColor) {
                return "There is already a player in the selected game with that favorite color";
            }
        }
        //we got past all the checks, let the new guy in
        var newPlayer = new player_1.HumanPlayer(playerName, playerColor, socketId, this.players.length);
        this.players.push(newPlayer);
        return "";
    };
    Game.prototype.playerLeave = function (playerIndex) {
        if (playerIndex < this.players.length) {
            this.players.splice(playerIndex, 1);
        }
        else {
            return "invalid index";
        }
        return "";
    };
    //returns an error message or blank string on success
    Game.prototype.addBot = function (botName) {
        //disable bots for now, getting this to work with socketio is going to be complicated
        return "";
        /*
        const foundPlayer: Player | undefined = this.findPlayerByName(botName);

        //name needs to be unique
        if(foundPlayer !== undefined)
        {
           return "there is already a player in the game with that name";
        }

        //game better not be already going
        if(this.state !== GameState.Setup)
        {
            return "Unable to join game, game is already in progress";
        }

        //only 4 players  in dominion
        if(this.players.length >= 4)
        {
            return "Unable to join game, player limit reached";
        }

        let bColorTaken = true;
        let color: string = "";
        while(bColorTaken)
        {
            color = this.getRandomColor();
            for(const player of this.players)
            {
                // color is taken, find a different one
                if(player.color === color)
                    continue;
            }
            bColorTaken = false;
        }

        const bot: AIPlayer = new AIPlayer(botName, color, this.players.length, this);
        this.players.push(bot);
        console.log("added bot: " + botName);
        return "";
        */
    };
    Game.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    // keep track of which cards are selected during the setup step
    Game.prototype.setupSelectCard = function (cardName) {
        // select a card, or deselect it if it's already selected
        var index = this.setupSelectedCards.indexOf(cardName);
        if (index == -1) {
            // only 10 kingdom cards can be selected at a time
            if (this.setupSelectedCards.length < 10) {
                this.setupSelectedCards.push(cardName);
                // once you change the selected cards, that preset is no longer selected
                this.setupPreset = '';
            }
        }
        else {
            this.setupSelectedCards.splice(index, 1);
            // once you change the selected cards, that preset is no longer selected
            this.setupPreset = '';
        }
    };
    Game.prototype.setupSelectPreset = function (presetName) {
        var presetCardNames = this.library.getPresetCardNames(presetName);
        if (presetCardNames !== undefined) {
            this.setupPreset = presetName;
            this.setupSelectedCards = [];
            for (var _i = 0, presetCardNames_1 = presetCardNames; _i < presetCardNames_1.length; _i++) {
                var cardName = presetCardNames_1[_i];
                this.setupSelectedCards.push(cardName);
            }
            return true;
        }
        return false;
    };
    // toggle whether the player is ready or not
    Game.prototype.setupPlayerReady = function (playerName) {
        var player = this.findPlayerByName(playerName);
        if (player !== undefined) {
            if (player instanceof player_1.HumanPlayer) {
                var humanPlayer = player;
                humanPlayer.setupReady = !player.setupReady;
            }
            return true;
        }
        else
            return false;
    };
    Game.prototype.setupStartGame = function () {
        // all humasn players must be ready
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player instanceof player_1.HumanPlayer) {
                var humanPlayer = player;
                if (humanPlayer.setupReady === false)
                    return false;
            }
        }
        // we need 10 kingdom cards
        if (this.setupSelectedCards.length !== 10)
            return false;
        // time to setup the game!
        // distribute cards to the shop
        var basicCards = this.library.getBasicCardNames();
        for (var _b = 0, basicCards_1 = basicCards; _b < basicCards_1.length; _b++) {
            var basicCard = basicCards_1[_b];
            this.shop[basicCard] = [];
            var definition = this.library.getCardDefinition(basicCard);
            for (var i = 0; i < definition.startingAmount; i++) {
                var newCard = this.library.getCard(basicCard);
                if (newCard !== null)
                    this.shop[basicCard].push(newCard);
            }
        }
        for (var _c = 0, _d = this.setupSelectedCards; _c < _d.length; _c++) {
            var kingdomCard = _d[_c];
            this.shop[kingdomCard] = [];
            var definition = this.library.getCardDefinition(kingdomCard);
            for (var i = 0; i < definition.startingAmount; i++) {
                var newCard = this.library.getCard(kingdomCard);
                if (newCard !== null)
                    this.shop[kingdomCard].push(newCard);
            }
        }
        for (var _e = 0, _f = this.players; _e < _f.length; _e++) {
            var player = _f[_e];
            //add 3 estates
            for (var i = 0; i < 3; i++) {
                var estate = this.shop[estate_1.Estate.cardName].pop();
                if (estate !== undefined) {
                    player.gain(player_1.Location.deck, estate);
                }
            }
            //add 7 coppers
            for (var i = 0; i < 7; i++) {
                var estate = this.shop[copper_1.Copper.cardName].pop();
                if (estate !== undefined) {
                    player.gain(player_1.Location.deck, estate);
                }
            }
            // now that we have our starting deck, shuffle and draw 5
            player.shuffle();
            player.draw(5);
        }
        // pick a starting player
        this.currentPlayer = Math.floor(Math.random() * this.players.length);
        this.players[this.currentPlayer].actions = 1;
        this.players[this.currentPlayer].buys = 1;
        this.players[this.currentPlayer].coins = 0;
        this.shop[province_1.Province.cardName].splice(1, 8);
        /* for testing game over
        for(const player of this.players)
        {
            const victoryCards = Math.floor(Math.random() * 10);
            for(let i = 0; i < victoryCards; i++)
            {
                const card: Card | null = this.library.getCard("estate");
                if(card !== null)
                {
                    player.deck.push(card);
                }
            }
        }
        */
        this.setGameState(GameState.PlayGame);
        return true;
    };
    Game.prototype.trashCard = function (card) {
        this.trash.unshift(card);
    };
    Game.prototype.advanceGame = function () {
        var waitingForPlayer = false;
        while (waitingForPlayer === false) {
            var currentPlayer = this.players[this.currentPlayer];
            //get ready of anything currently executing
            for (var i = this.executingCards.length - 1; i >= 0; i--) {
                var card = this.executingCards[i];
                this.finishExecution(card);
            }
            // they are still waiting, give them something to do
            if (currentPlayer.state === player_1.PlayerState.WaitingForTurn) {
                currentPlayer.setState(player_1.PlayerState.Action, this);
            }
            else if (currentPlayer.state === player_1.PlayerState.Action) {
                currentPlayer.setState(player_1.PlayerState.Buy, this);
            }
            else if (currentPlayer.state === player_1.PlayerState.Buy) {
                currentPlayer.setState(player_1.PlayerState.CleanUp, this);
            }
            else if (currentPlayer.state === player_1.PlayerState.CleanUp) {
                //nothing for user/AI to do, just auto clean up
                currentPlayer.cleanUp();
                currentPlayer.setState(player_1.PlayerState.WaitingForTurn, this);
                this.currentPlayer = (this.currentPlayer + 1) % this.players.length; // after clean up, move to the next player
                currentPlayer = this.players[this.currentPlayer];
                //you get 1 action, 1 buy, and no coins to start your turn
                currentPlayer.setState(player_1.PlayerState.Action, this);
                currentPlayer.actions = 1;
                currentPlayer.buys = 1;
                currentPlayer.coins = 0;
            }
            currentPlayer.addStateActions(this);
            //if we need to wait for huiman action, get out of here
            if (currentPlayer.userSelections.length > 0 && currentPlayer instanceof player_1.HumanPlayer)
                waitingForPlayer = true;
        }
    };
    Game.prototype.checkGameOver = function () {
        var gameOver = false;
        if (this.shop[province_1.Province.cardName].length === 0)
            gameOver = true;
        else {
            var empty = 0;
            for (var card in this.shop) {
                if (this.shop[card].length === 0)
                    empty++;
            }
            if (empty >= 3)
                gameOver = true;
        }
        return gameOver;
    };
    //a player chose something, decide what to do with it
    Game.prototype.onCardsSelected = function (playerIndex, cards) {
        var player = this.players[playerIndex];
        var validSelection = false;
        var currentSelections = player.userSelections[player.userSelections.length - 1];
        for (var _i = 0, currentSelections_1 = currentSelections; _i < currentSelections_1.length; _i++) {
            var selection = currentSelections_1[_i];
            var allCardsValid = true;
            for (var _a = 0, cards_1 = cards; _a < cards_1.length; _a++) {
                var card = cards_1[_a];
                if (selection.isValid(card) === false) {
                    allCardsValid = false;
                }
            }
            if (allCardsValid === true)
                validSelection = true;
        }
        //cards not valid
        if (validSelection === false)
            return false;
        //if there's an executing card, it gets the selection
        if (this.executingCards.length > 0) {
            if (this.executingCards[this.executingCards.length - 1].onSelection(this, player, cards) === false)
                return false;
        }
        //determine what to do with the selection based on turn phase
        else if (player.state == player_1.PlayerState.Action) {
            if (cards.length > 0 && player.actions > 0) {
                //1 card selected at a time
                var card = cards[0];
                //card better be in your hand
                for (var _b = 0, _c = player.hand; _b < _c.length; _b++) {
                    var handCard = _c[_b];
                    if (handCard.id === card.id && card.type === card_definition_1.CardType.action) {
                        //the user chose to play this action card
                        var cardDefinition = this.library.getCardDefinition(card.name);
                        if (cardDefinition.cardType === card_definition_1.CardType.action) {
                            this.executingCards.push(cardDefinition);
                            player.actions--;
                            //remove card from hand, put it in play
                            var index = -1;
                            for (var i = 0; i < player.hand.length; i++) {
                                if (player.hand[i].id === card.id)
                                    index = i;
                            }
                            player.hand.splice(index, 1);
                            player.inPlay.unshift(card);
                            cardDefinition.execute(this, player);
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
        else if (player.state == player_1.PlayerState.Buy && player.buys > 0) {
            if (cards.length > 0) {
                //1 card selected at a time
                var card = cards[0];
                //if this is a card in the players hand, and it's a treasure card, play it
                for (var _d = 0, _e = player.hand; _d < _e.length; _d++) {
                    var handCard = _e[_d];
                    if (handCard.id === card.id && card.type === card_definition_1.CardType.treasure) {
                        var treasureCardDefinition = this.library.getCardDefinition(card.name);
                        this.executingCards.push(treasureCardDefinition);
                        //remove card from hand, put it in play
                        var index = -1;
                        for (var i = 0; i < player.hand.length; i++) {
                            if (player.hand[i].id === card.id)
                                index = i;
                        }
                        player.hand.splice(index, 1);
                        player.inPlay.unshift(card);
                        treasureCardDefinition.execute(this, player);
                    }
                }
                //if this is a card in the shop, buy it
                //we know the card is in the shop if it is the top card of it's buy pile
                if (this.shop[card.name][0].id === card.id) {
                    var cost = this.library.getCardDefinition(card.name).cost;
                    if (player.coins >= cost) {
                        this.shop[card.name].splice(0, 1);
                        player.gain(player_1.Location.discard, card);
                        player.coins -= cost;
                        player.buys--;
                    }
                    else {
                        return false;
                    }
                    //the game always ends after buying something, so check if it's over here
                    if (this.checkGameOver()) {
                        //Game Over! show the end screen
                        this.state = GameState.GameOver;
                    }
                }
            }
        }
        return true;
    };
    Game.prototype.onPromptClicked = function (playerIndex, prompt, cards) {
        if (this.executingCards.length > 0) {
            if (this.executingCards[this.executingCards.length - 1].onPrompt(prompt, this, this.players[playerIndex], cards) === true)
                return;
        }
        if (prompt == 'done') {
            this.advanceGame();
        }
    };
    //called by a card definition when execution is finished
    Game.prototype.finishExecution = function (finishing) {
        var current = this.executingCards[this.executingCards.length - 1];
        // this better be the same card, things can't finish out of order
        if (current.getCardName() === finishing.getCardName()) {
            this.executingCards.splice(this.executingCards.length - 1, 1);
        }
        else {
            console.log('ERROR: cards finished executing out of order');
            return;
        }
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map