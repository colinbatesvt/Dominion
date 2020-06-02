(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../Common/src/CardDefinitions/Moat.ts":
/*!*********************************************!*\
  !*** ../Common/src/CardDefinitions/Moat.ts ***!
  \*********************************************/
/*! exports provided: Moat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moat", function() { return Moat; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");

class Moat extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 2;
        this.subType = _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["SubType"].reaction;
        this.imageName = "moat.jpg";
    }
    execute(game, player) {
        // + 2 cards
        player.draw(2);
        // when another player plays an attack card you may first reveal this from your hand, to be unaffected by it.
        game.finishExecution(this);
    }
}
Moat.cardName = "moat";


/***/ }),

/***/ "../Common/src/CardDefinitions/Remodel.ts":
/*!************************************************!*\
  !*** ../Common/src/CardDefinitions/Remodel.ts ***!
  \************************************************/
/*! exports provided: Remodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remodel", function() { return Remodel; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "../Common/src/player.ts");
/* harmony import */ var _card_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-library */ "../Common/src/card-library.ts");



class Remodel extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 4;
        this.imageName = "remodel.jpg";
        this, this.handPick = true;
    }
    execute(game, player) {
        // Trash a card from your hand gain a card costing up to 2 more than it
        if (player.hand.length > 0) {
            const selection = [];
            const trash = { location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand, isValid: (card) => { return true; }, count: 1 };
            selection.push(trash);
            player.pushSelection(selection, game);
            player.status = "Choose a card from your hand to trash";
            this.handPick = true;
        }
        else {
            game.finishExecution(this);
        }
    }
    onSelection(game, player, cards) {
        //if this is the trash selection...
        if (this.handPick === true) {
            //selection should be a single card
            const trashCard = cards[0];
            let handIndex = -1;
            for (let i = 0; i < player.hand.length; i++) {
                const handCard = player.hand[i];
                if (handCard.id === trashCard.id) {
                    handIndex = i;
                }
            }
            if (handIndex !== -1) {
                player.hand.splice(handIndex, 1);
                game.trashCard(trashCard);
                //remove this selection, add gain selection
                player.popSelection();
                const library = new _card_library__WEBPACK_IMPORTED_MODULE_2__["CardLibrary"];
                const maxBuy = library.getCardDefinition(trashCard.name).cost + 2;
                player.status = "Gain a card from the shop costing up to " + maxBuy;
                const selection = [];
                const gain = { location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].shop, isValid: (card) => {
                        return library.getCardDefinition(card.name).cost <= maxBuy;
                    }, count: 1 };
                selection.push(gain);
                player.pushSelection(selection, game);
                this.handPick = false;
            }
            else {
                return false;
            }
        }
        else {
            //selection should be a single card
            const gainCard = cards[0];
            //verify it's a card on top of it's shop pile
            if (game.shop[gainCard.name][0].id === gainCard.id) {
                player.gain(_player__WEBPACK_IMPORTED_MODULE_1__["Location"].discard, gainCard);
                game.shop[gainCard.name].splice(0, 1);
                player.popSelection();
                player.status = "";
                game.finishExecution(this);
            }
            else {
                return false;
            }
        }
        return true;
    }
}
Remodel.cardName = "remodel";


/***/ }),

/***/ "../Common/src/CardDefinitions/cellar.ts":
/*!***********************************************!*\
  !*** ../Common/src/CardDefinitions/cellar.ts ***!
  \***********************************************/
/*! exports provided: Cellar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cellar", function() { return Cellar; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "../Common/src/player.ts");


class Cellar extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 2;
        this.imageName = "cellar.jpg";
    }
    execute(game, player) {
        // + 1 action
        player.actions++;
        //discard any number of cards, then draw that many
        const pickDiscard = { location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand, isValid: (card) => { return true; }, count: -1 };
        let selections = [];
        selections.push(pickDiscard);
        const prompts = ["discard"];
        player.pushPrompt(prompts);
        player.pushSelection(selections, game);
        player.status = "Choose any number of cards to discard";
    }
    onPrompt(prompt, game, player, cards) {
        if (prompt === "discard") {
            // verify all these cards are actual cards in the user's hand
            let bAllFound = true;
            for (const card of cards) {
                let bFound = false;
                for (const handCard of player.hand) {
                    if (card.id === handCard.id) {
                        bFound = true;
                    }
                }
                if (bFound !== true)
                    bAllFound = false;
            }
            if (bAllFound !== true) {
                return false;
            }
            else {
                for (const card of cards) {
                    player.discardCard(card);
                }
                player.draw(cards.length);
                player.popSelection();
                player.popPrompt();
                game.finishExecution(this);
                player.status = "";
            }
            return true;
        }
        return false;
    }
}
Cellar.cardName = "cellar";


/***/ }),

/***/ "../Common/src/CardDefinitions/copper.ts":
/*!***********************************************!*\
  !*** ../Common/src/CardDefinitions/copper.ts ***!
  \***********************************************/
/*! exports provided: Copper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Copper", function() { return Copper; });
/* harmony import */ var _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../treasure-card-definition */ "../Common/src/treasure-card-definition.ts");

class Copper extends _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__["TreasureCardDefinition"] {
    constructor() {
        super();
        this.coinValue = 1;
        this.cost = 0;
        this.startingAmount = 60;
        this.isKingdom = false;
        this.imageName = "copper.jpg";
    }
}
Copper.cardName = "copper";


/***/ }),

/***/ "../Common/src/CardDefinitions/curse.ts":
/*!**********************************************!*\
  !*** ../Common/src/CardDefinitions/curse.ts ***!
  \**********************************************/
/*! exports provided: Curse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curse", function() { return Curse; });
/* harmony import */ var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../victory-card-definition */ "../Common/src/victory-card-definition.ts");

class Curse extends _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"] {
    constructor() {
        super();
        this.cost = 0; // Wow, this card is free? It must be the best!
        this.startingAmount = 30;
        this.isKingdom = false;
        this.imageName = "curse.jpg";
    }
    GetVictoryPoints() {
        return -1;
    }
}
Curse.cardName = "curse";


/***/ }),

/***/ "../Common/src/CardDefinitions/duchy.ts":
/*!**********************************************!*\
  !*** ../Common/src/CardDefinitions/duchy.ts ***!
  \**********************************************/
/*! exports provided: Duchy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duchy", function() { return Duchy; });
/* harmony import */ var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../victory-card-definition */ "../Common/src/victory-card-definition.ts");

class Duchy extends _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"] {
    constructor() {
        super();
        this.cost = 5;
        this.startingAmount = 12;
        this.isKingdom = false;
        this.imageName = "duchy.jpg";
    }
    GetVictoryPoints() {
        return 3;
    }
}
Duchy.cardName = "duchy";


/***/ }),

/***/ "../Common/src/CardDefinitions/estate.ts":
/*!***********************************************!*\
  !*** ../Common/src/CardDefinitions/estate.ts ***!
  \***********************************************/
/*! exports provided: Estate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estate", function() { return Estate; });
/* harmony import */ var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../victory-card-definition */ "../Common/src/victory-card-definition.ts");

class Estate extends _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"] {
    constructor() {
        super();
        this.cost = 2;
        this.startingAmount = 24;
        this.isKingdom = false;
        this.imageName = "estate.jpg";
    }
    GetVictoryPoints() {
        return 1;
    }
}
Estate.cardName = "estate";


/***/ }),

/***/ "../Common/src/CardDefinitions/gold.ts":
/*!*********************************************!*\
  !*** ../Common/src/CardDefinitions/gold.ts ***!
  \*********************************************/
/*! exports provided: Gold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gold", function() { return Gold; });
/* harmony import */ var _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../treasure-card-definition */ "../Common/src/treasure-card-definition.ts");

class Gold extends _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__["TreasureCardDefinition"] {
    constructor() {
        super();
        this.coinValue = 3;
        this.cost = 6;
        this.startingAmount = 30;
        this.isKingdom = false;
        this.imageName = "gold.jpg";
    }
}
Gold.cardName = "gold";


/***/ }),

/***/ "../Common/src/CardDefinitions/market.ts":
/*!***********************************************!*\
  !*** ../Common/src/CardDefinitions/market.ts ***!
  \***********************************************/
/*! exports provided: Market */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Market", function() { return Market; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");

class Market extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.isKingdom = true;
        this.imageName = "market.jpg";
    }
    execute(game, player) {
        player.draw(1);
        player.actions++;
        player.buys++;
        player.coins++;
        game.finishExecution(this);
    }
}
Market.cardName = "market";


/***/ }),

/***/ "../Common/src/CardDefinitions/militia.ts":
/*!************************************************!*\
  !*** ../Common/src/CardDefinitions/militia.ts ***!
  \************************************************/
/*! exports provided: Militia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Militia", function() { return Militia; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "../Common/src/player.ts");


class Militia extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 4;
        this.subType = _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["SubType"].attack;
        this.imageName = "militia.jpg";
        this.playersDone = [];
    }
    execute(game, player) {
        player.coins += 2;
        this.playersDone = [];
        //each other player discards down to 3 cards in hand
        for (const attackedPlayer of game.players) {
            if (attackedPlayer.name !== player.name) {
                let bImmune = false;
                for (const card of attackedPlayer.hand) {
                    // moat immunity, this should probably be a little more generic for futre reactions, but ya know...
                    if (card.name === "moat") {
                        bImmune = true;
                        card.revealedToOthers = true;
                    }
                }
                //immune, don't wait for their response
                if (bImmune === true) {
                    this.playersDone.push(true);
                }
                else {
                    //not immune, but make sure they have more than three cards to discard
                    if (attackedPlayer.hand.length > 3) {
                        this.playersDone.push(false);
                        const selection = [];
                        const discard = { location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand, isValid: (card) => { return true; }, count: attackedPlayer.hand.length - 3 };
                        selection.push(discard);
                        attackedPlayer.pushSelection(selection, game);
                        attackedPlayer.status = "Discard down to 3 cards.";
                    }
                }
            }
            else {
                this.playersDone.push(true);
            }
        }
        let bAllDone = true;
        for (const done of this.playersDone) {
            if (done === false) {
                bAllDone = false;
            }
        }
        //no one to attack, clean up
        if (bAllDone)
            game.finishExecution(this);
        else
            player.status = "Waiting for other players to discard";
    }
    onSelection(game, player, cards) {
        //make sure everything in the selection is in that players hand
        let valid = true;
        for (const card of cards) {
            let found = false;
            for (const handCard of player.hand) {
                if (card.id === handCard.id) {
                    found = true;
                }
            }
            if (found === false) {
                valid = false;
            }
        }
        //if the selection was valid, discard the selected cards
        if (valid === false)
            return false;
        else {
            for (const card of cards) {
                player.discardCard(card);
            }
        }
        this.playersDone[player.index] = true;
        player.popSelection();
        player.status = "";
        //see if everyone has discarded, and if they have, clean up
        let bAllDone = true;
        for (const done of this.playersDone) {
            if (done === false) {
                bAllDone = false;
            }
        }
        if (bAllDone) {
            game.finishExecution(this);
            game.players[game.currentPlayer].status = "";
        }
        return true;
    }
}
Militia.cardName = "militia";


/***/ }),

/***/ "../Common/src/CardDefinitions/mine.ts":
/*!*********************************************!*\
  !*** ../Common/src/CardDefinitions/mine.ts ***!
  \*********************************************/
/*! exports provided: Mine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mine", function() { return Mine; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "../Common/src/player.ts");
/* harmony import */ var _card_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-library */ "../Common/src/card-library.ts");
/* harmony import */ var _card_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-definition */ "../Common/src/card-definition.ts");




class Mine extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 5;
        this.imageName = "mine.jpg";
        this.handPick = true;
    }
    execute(game, player) {
        //you may trash a treasure from your hand. Gain a Treasure to your hand costing up to 3 more than it
        //check if they have a treasure card to discard
        let valid = false;
        for (const card of player.hand) {
            if (card.type === _card_definition__WEBPACK_IMPORTED_MODULE_3__["CardType"].treasure)
                valid = true;
        }
        if (valid === true) {
            const selection = [];
            const trash = { location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand, isValid: (card) => { return card.type === _card_definition__WEBPACK_IMPORTED_MODULE_3__["CardType"].treasure; }, count: 1 };
            selection.push(trash);
            player.pushSelection(selection, game);
            this.handPick = true;
            player.status = "Choose a treasure card from your hand to trash";
        }
    }
    onSelection(game, player, cards) {
        //if this is the trash selection...
        if (this.handPick === true) {
            //selection should be a single card
            const trashCard = cards[0];
            let handIndex = -1;
            for (let i = 0; i < player.hand.length; i++) {
                const handCard = player.hand[i];
                if (handCard.id === trashCard.id) {
                    handIndex = i;
                }
            }
            if (handIndex !== -1) {
                player.hand.splice(handIndex, 1);
                game.trashCard(trashCard);
                //remove this selection, add gain selection
                player.popSelection();
                const selection = [];
                const library = new _card_library__WEBPACK_IMPORTED_MODULE_2__["CardLibrary"];
                const maxBuy = library.getCardDefinition(trashCard.name).cost + 3;
                const gain = { location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].shop, isValid: (card) => {
                        return library.getCardDefinition(card.name).cost <= maxBuy;
                    }, count: 1 };
                selection.push(gain);
                player.pushSelection(selection, game);
                this.handPick = false;
                player.status = "Gain a treasure card costing up to " + maxBuy;
            }
            else {
                return false;
            }
        }
        else {
            //selection should be a single card
            const gainCard = cards[0];
            //verify it's a card on top of it's shop pile
            if (game.shop[gainCard.name][0].id === gainCard.id) {
                player.gain(_player__WEBPACK_IMPORTED_MODULE_1__["Location"].discard, gainCard);
                game.shop[gainCard.name].splice(0, 1);
                player.popSelection();
                game.finishExecution(this);
                player.status = "";
            }
            else {
                return false;
            }
        }
        return true;
    }
}
Mine.cardName = "mine";


/***/ }),

/***/ "../Common/src/CardDefinitions/province.ts":
/*!*************************************************!*\
  !*** ../Common/src/CardDefinitions/province.ts ***!
  \*************************************************/
/*! exports provided: Province */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Province", function() { return Province; });
/* harmony import */ var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../victory-card-definition */ "../Common/src/victory-card-definition.ts");

class Province extends _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"] {
    constructor() {
        super();
        this.cost = 8;
        this.startingAmount = 12;
        this.isKingdom = false;
        this.imageName = "province.jpg";
    }
    GetVictoryPoints() {
        return 6;
    }
}
Province.cardName = "province";


/***/ }),

/***/ "../Common/src/CardDefinitions/silver.ts":
/*!***********************************************!*\
  !*** ../Common/src/CardDefinitions/silver.ts ***!
  \***********************************************/
/*! exports provided: Silver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Silver", function() { return Silver; });
/* harmony import */ var _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../treasure-card-definition */ "../Common/src/treasure-card-definition.ts");

class Silver extends _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__["TreasureCardDefinition"] {
    constructor() {
        super();
        this.coinValue = 2;
        this.cost = 3;
        this.startingAmount = 40;
        this.isKingdom = false;
        this.imageName = "silver.jpg";
    }
}
Silver.cardName = "silver";


/***/ }),

/***/ "../Common/src/CardDefinitions/smithy.ts":
/*!***********************************************!*\
  !*** ../Common/src/CardDefinitions/smithy.ts ***!
  \***********************************************/
/*! exports provided: Smithy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smithy", function() { return Smithy; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");

class Smithy extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 4;
        this.imageName = "smithy.jpg";
    }
    execute(game, player) {
        // + 3 cards
        player.draw(3);
        game.finishExecution(this);
    }
}
Smithy.cardName = "smithy";


/***/ }),

/***/ "../Common/src/CardDefinitions/village.ts":
/*!************************************************!*\
  !*** ../Common/src/CardDefinitions/village.ts ***!
  \************************************************/
/*! exports provided: Village */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Village", function() { return Village; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");

class Village extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 3;
        this.imageName = "village.jpg";
    }
    execute(game, player) {
        // + 1 card
        player.draw(1);
        // + 2 actions
        player.actions += 2;
        game.finishExecution(this);
    }
}
Village.cardName = "village";


/***/ }),

/***/ "../Common/src/CardDefinitions/woodcutter.ts":
/*!***************************************************!*\
  !*** ../Common/src/CardDefinitions/woodcutter.ts ***!
  \***************************************************/
/*! exports provided: Woodcutter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Woodcutter", function() { return Woodcutter; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");

class Woodcutter extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 3;
        this.imageName = "woodcutter.jpg";
    }
    execute(game, player) {
        // + 1 buy
        player.buys++;
        // + 2 coins
        player.coins += 2;
        game.finishExecution(this);
    }
}
Woodcutter.cardName = "woodcutter";


/***/ }),

/***/ "../Common/src/CardDefinitions/workshop.ts":
/*!*************************************************!*\
  !*** ../Common/src/CardDefinitions/workshop.ts ***!
  \*************************************************/
/*! exports provided: Workshop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workshop", function() { return Workshop; });
/* harmony import */ var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-card-definition */ "../Common/src/action-card-definition.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "../Common/src/player.ts");
/* harmony import */ var _card_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-library */ "../Common/src/card-library.ts");



class Workshop extends _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"] {
    constructor() {
        super();
        this.cost = 3;
        this.imageName = "workshop.jpg";
    }
    execute(game, player) {
        // gain a card costing up to 4
        const selection = [];
        const gain = { location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].shop, isValid: (card) => {
                const library = new _card_library__WEBPACK_IMPORTED_MODULE_2__["CardLibrary"];
                return library.getCardDefinition(card.name).cost <= 4;
            }, count: 1 };
        selection.push(gain);
        player.pushSelection(selection, game);
        player.status = "Gain a card costing up to 4";
    }
    onSelection(game, player, cards) {
        const gainCard = cards[0];
        if (game.shop[gainCard.name][0].id === gainCard.id) {
            player.gain(_player__WEBPACK_IMPORTED_MODULE_1__["Location"].discard, gainCard);
            game.shop[gainCard.name].splice(0, 1);
            player.popSelection();
            game.finishExecution(this);
            player.status = "";
        }
        return true;
    }
}
Workshop.cardName = "workshop";


/***/ }),

/***/ "../Common/src/action-card-definition.ts":
/*!***********************************************!*\
  !*** ../Common/src/action-card-definition.ts ***!
  \***********************************************/
/*! exports provided: SubType, ActionCardDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubType", function() { return SubType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCardDefinition", function() { return ActionCardDefinition; });
/* harmony import */ var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-definition */ "../Common/src/card-definition.ts");

var SubType;
(function (SubType) {
    SubType["none"] = "none";
    SubType["attack"] = "attack";
    SubType["reaction"] = "reaction";
})(SubType || (SubType = {}));
class ActionCardDefinition extends _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardDefinition"] {
    constructor() {
        super();
        this.isKingdom = true;
        this.subType = SubType.none;
        this.startingAmount = 10;
        this.cardType = _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].action;
    }
}


/***/ }),

/***/ "../Common/src/card-definition.ts":
/*!****************************************!*\
  !*** ../Common/src/card-definition.ts ***!
  \****************************************/
/*! exports provided: CardType, CardDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDefinition", function() { return CardDefinition; });
var CardType;
(function (CardType) {
    CardType[CardType["any"] = 0] = "any";
    CardType[CardType["action"] = 1] = "action";
    CardType[CardType["victory"] = 2] = "victory";
    CardType[CardType["treasure"] = 3] = "treasure";
})(CardType || (CardType = {}));
;
class CardDefinition {
    constructor() {
        this.imageName = "";
        this.cost = 0;
        this.startingAmount = 0;
        this.isKingdom = true;
        this.cardType = CardType.action;
    }
    getCard(id) {
        const card = {
            id: id,
            imageName: this.GetImageName(),
            name: this.constructor.cardName,
            isKingdom: this.isKingdom,
            type: this.cardType,
            revealedToOthers: false
        };
        return card;
    }
    getCardName() {
        return this.constructor.cardName;
    }
    GetImageName() {
        return this.imageName;
    }
    //execute the card's behaviour, this should be overriden by concrete subclasses that have behaviour on the card being played
    execute(game, player) {
    }
    //for cards that require the user to select something, they can override this
    onSelection(game, player, cards) {
        return true;
    }
    onPrompt(prompt, game, player, cards) {
        return true;
    }
}


/***/ }),

/***/ "../Common/src/card-library.ts":
/*!*************************************!*\
  !*** ../Common/src/card-library.ts ***!
  \*************************************/
/*! exports provided: CardLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLibrary", function() { return CardLibrary; });
/* harmony import */ var _CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardDefinitions/copper */ "../Common/src/CardDefinitions/copper.ts");
/* harmony import */ var _CardDefinitions_silver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardDefinitions/silver */ "../Common/src/CardDefinitions/silver.ts");
/* harmony import */ var _CardDefinitions_gold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardDefinitions/gold */ "../Common/src/CardDefinitions/gold.ts");
/* harmony import */ var _CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardDefinitions/estate */ "../Common/src/CardDefinitions/estate.ts");
/* harmony import */ var _CardDefinitions_duchy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardDefinitions/duchy */ "../Common/src/CardDefinitions/duchy.ts");
/* harmony import */ var _CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardDefinitions/province */ "../Common/src/CardDefinitions/province.ts");
/* harmony import */ var _CardDefinitions_curse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardDefinitions/curse */ "../Common/src/CardDefinitions/curse.ts");
/* harmony import */ var _CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardDefinitions/cellar */ "../Common/src/CardDefinitions/cellar.ts");
/* harmony import */ var _CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardDefinitions/workshop */ "../Common/src/CardDefinitions/workshop.ts");
/* harmony import */ var _CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardDefinitions/market */ "../Common/src/CardDefinitions/market.ts");
/* harmony import */ var _CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardDefinitions/militia */ "../Common/src/CardDefinitions/militia.ts");
/* harmony import */ var _CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CardDefinitions/mine */ "../Common/src/CardDefinitions/mine.ts");
/* harmony import */ var _CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CardDefinitions/Moat */ "../Common/src/CardDefinitions/Moat.ts");
/* harmony import */ var _CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CardDefinitions/Remodel */ "../Common/src/CardDefinitions/Remodel.ts");
/* harmony import */ var _CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CardDefinitions/smithy */ "../Common/src/CardDefinitions/smithy.ts");
/* harmony import */ var _CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CardDefinitions/village */ "../Common/src/CardDefinitions/village.ts");
/* harmony import */ var _CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CardDefinitions/woodcutter */ "../Common/src/CardDefinitions/woodcutter.ts");

















class CardLibrary {
    constructor() {
        this.nextCardId = 0;
        this.cardIndex = {};
        // basic cards
        this.cardIndex[_CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_0__["Copper"].cardName] = new _CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_0__["Copper"]();
        this.cardIndex[_CardDefinitions_silver__WEBPACK_IMPORTED_MODULE_1__["Silver"].cardName] = new _CardDefinitions_silver__WEBPACK_IMPORTED_MODULE_1__["Silver"]();
        this.cardIndex[_CardDefinitions_gold__WEBPACK_IMPORTED_MODULE_2__["Gold"].cardName] = new _CardDefinitions_gold__WEBPACK_IMPORTED_MODULE_2__["Gold"]();
        this.cardIndex[_CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__["Estate"].cardName] = new _CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__["Estate"]();
        this.cardIndex[_CardDefinitions_duchy__WEBPACK_IMPORTED_MODULE_4__["Duchy"].cardName] = new _CardDefinitions_duchy__WEBPACK_IMPORTED_MODULE_4__["Duchy"]();
        this.cardIndex[_CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"].cardName] = new _CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"]();
        this.cardIndex[_CardDefinitions_curse__WEBPACK_IMPORTED_MODULE_6__["Curse"].cardName] = new _CardDefinitions_curse__WEBPACK_IMPORTED_MODULE_6__["Curse"]();
        // actions
        this.cardIndex[_CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__["Cellar"].cardName] = new _CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__["Cellar"]();
        this.cardIndex[_CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__["Market"].cardName] = new _CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__["Market"]();
        this.cardIndex[_CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__["Militia"].cardName] = new _CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__["Militia"]();
        this.cardIndex[_CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__["Mine"].cardName] = new _CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__["Mine"]();
        this.cardIndex[_CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__["Moat"].cardName] = new _CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__["Moat"]();
        this.cardIndex[_CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__["Remodel"].cardName] = new _CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__["Remodel"]();
        this.cardIndex[_CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__["Smithy"].cardName] = new _CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__["Smithy"]();
        this.cardIndex[_CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__["Village"].cardName] = new _CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__["Village"]();
        this.cardIndex[_CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__["Woodcutter"].cardName] = new _CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__["Woodcutter"]();
        this.cardIndex[_CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__["Workshop"].cardName] = new _CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__["Workshop"]();
        // presets
        this.presetIndex = {};
        this.presetIndex['First Game'] = [
            _CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__["Cellar"].cardName,
            _CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__["Market"].cardName,
            _CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__["Militia"].cardName,
            _CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__["Mine"].cardName,
            _CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__["Moat"].cardName,
            _CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__["Remodel"].cardName,
            _CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__["Smithy"].cardName,
            _CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__["Village"].cardName,
            _CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__["Woodcutter"].cardName,
            _CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__["Workshop"].cardName
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


/***/ }),

/***/ "../Common/src/game.ts":
/*!*****************************!*\
  !*** ../Common/src/game.ts ***!
  \*****************************/
/*! exports provided: GameState, Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "../Common/src/player.ts");
/* harmony import */ var _card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-library */ "../Common/src/card-library.ts");
/* harmony import */ var _card_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-definition */ "../Common/src/card-definition.ts");
/* harmony import */ var _CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardDefinitions/estate */ "../Common/src/CardDefinitions/estate.ts");
/* harmony import */ var _CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardDefinitions/copper */ "../Common/src/CardDefinitions/copper.ts");
/* harmony import */ var _CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardDefinitions/province */ "../Common/src/CardDefinitions/province.ts");






var GameState;
(function (GameState) {
    GameState["Setup"] = "setup";
    GameState["PlayGame"] = "play";
    GameState["GameOver"] = "over";
})(GameState || (GameState = {}));
;
class Game {
    constructor(gameName, serverCallback) {
        this.name = gameName;
        this.state = GameState.Setup;
        this.players = [];
        this.currentPlayer = -1;
        this.shop = {};
        this.trash = [];
        this.setupSelectedCards = [];
        this.setupPreset = '';
        this.library = new _card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"];
        this.executingCards = [];
    }
    setGameState(newState) {
        this.state = newState;
    }
    removePlayer(remove) {
        const index = this.players.indexOf(remove);
        this.players.splice(index, 1);
    }
    // does this game have any active players
    hasNoActivePlayers() {
        let noActivePlayers = true;
        for (const player of this.players) {
            if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                const humanPlayer = player;
                if (humanPlayer.connected)
                    noActivePlayers = false;
            }
        }
        return noActivePlayers;
    }
    findPlayerById(socketId) {
        for (const player of this.players) {
            if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                const humanPlayer = player;
                if (humanPlayer.socketId === socketId)
                    return player;
            }
        }
        return undefined;
    }
    findPlayerByName(playerName) {
        for (const player of this.players) {
            if (player.name === playerName)
                return player;
        }
        return undefined;
    }
    //returns an error message or blank string on success
    playerJoin(playerName, playerColor, socketId) {
        // check for reconnect
        for (const player of this.players) {
            if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                const humanPlayer = player;
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
        for (const player of this.players) {
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
        let newPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"](playerName, playerColor, socketId, this.players.length);
        this.players.push(newPlayer);
        return "";
    }
    playerLeave(playerIndex) {
        if (playerIndex < this.players.length) {
            this.players.splice(playerIndex, 1);
        }
        else {
            return "invalid index";
        }
        return "";
    }
    //returns an error message or blank string on success
    addBot(botName) {
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
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // keep track of which cards are selected during the setup step
    setupSelectCard(cardName) {
        // select a card, or deselect it if it's already selected
        const index = this.setupSelectedCards.indexOf(cardName);
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
    }
    setupSelectPreset(presetName) {
        const presetCardNames = this.library.getPresetCardNames(presetName);
        if (presetCardNames !== undefined) {
            this.setupPreset = presetName;
            this.setupSelectedCards = [];
            for (const cardName of presetCardNames) {
                this.setupSelectedCards.push(cardName);
            }
            return true;
        }
        return false;
    }
    // toggle whether the player is ready or not
    setupPlayerReady(playerName) {
        const player = this.findPlayerByName(playerName);
        if (player !== undefined) {
            if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                const humanPlayer = player;
                humanPlayer.setupReady = !player.setupReady;
            }
            return true;
        }
        else
            return false;
    }
    setupStartGame() {
        // all humasn players must be ready
        for (const player of this.players) {
            if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                const humanPlayer = player;
                if (humanPlayer.setupReady === false)
                    return false;
            }
        }
        // we need 10 kingdom cards
        if (this.setupSelectedCards.length !== 10)
            return false;
        // time to setup the game!
        // distribute cards to the shop
        const basicCards = this.library.getBasicCardNames();
        for (const basicCard of basicCards) {
            this.shop[basicCard] = [];
            const definition = this.library.getCardDefinition(basicCard);
            for (let i = 0; i < definition.startingAmount; i++) {
                const newCard = this.library.getCard(basicCard);
                if (newCard !== null)
                    this.shop[basicCard].push(newCard);
            }
        }
        for (const kingdomCard of this.setupSelectedCards) {
            this.shop[kingdomCard] = [];
            const definition = this.library.getCardDefinition(kingdomCard);
            for (let i = 0; i < definition.startingAmount; i++) {
                const newCard = this.library.getCard(kingdomCard);
                if (newCard !== null)
                    this.shop[kingdomCard].push(newCard);
            }
        }
        for (const player of this.players) {
            //add 3 estates
            for (let i = 0; i < 3; i++) {
                const estate = this.shop[_CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__["Estate"].cardName].pop();
                if (estate !== undefined) {
                    player.gain(_player__WEBPACK_IMPORTED_MODULE_0__["Location"].deck, estate);
                }
            }
            //add 7 coppers
            for (let i = 0; i < 7; i++) {
                const estate = this.shop[_CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_4__["Copper"].cardName].pop();
                if (estate !== undefined) {
                    player.gain(_player__WEBPACK_IMPORTED_MODULE_0__["Location"].deck, estate);
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
        this.shop[_CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"].cardName].splice(1, 8);
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
    }
    trashCard(card) {
        this.trash.unshift(card);
    }
    advanceGame() {
        let waitingForPlayer = false;
        while (waitingForPlayer === false) {
            let currentPlayer = this.players[this.currentPlayer];
            //get ready of anything currently executing
            for (let i = this.executingCards.length - 1; i >= 0; i--) {
                const card = this.executingCards[i];
                this.finishExecution(card);
            }
            // they are still waiting, give them something to do
            if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].WaitingForTurn) {
                currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action, this);
            }
            else if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action) {
                currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Buy, this);
            }
            else if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Buy) {
                currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].CleanUp, this);
            }
            else if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].CleanUp) {
                //nothing for user/AI to do, just auto clean up
                currentPlayer.cleanUp();
                currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].WaitingForTurn, this);
                this.currentPlayer = (this.currentPlayer + 1) % this.players.length; // after clean up, move to the next player
                currentPlayer = this.players[this.currentPlayer];
                //you get 1 action, 1 buy, and no coins to start your turn
                currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action, this);
                currentPlayer.actions = 1;
                currentPlayer.buys = 1;
                currentPlayer.coins = 0;
            }
            currentPlayer.addStateActions(this);
            //if we need to wait for huiman action, get out of here
            if (currentPlayer.userSelections.length > 0 && currentPlayer instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"])
                waitingForPlayer = true;
        }
    }
    checkGameOver() {
        let gameOver = false;
        if (this.shop[_CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"].cardName].length === 0)
            gameOver = true;
        else {
            let empty = 0;
            for (const card in this.shop) {
                if (this.shop[card].length === 0)
                    empty++;
            }
            if (empty >= 3)
                gameOver = true;
        }
        return gameOver;
    }
    //a player chose something, decide what to do with it
    onCardsSelected(playerIndex, cards) {
        const player = this.players[playerIndex];
        let validSelection = false;
        const currentSelections = player.userSelections[player.userSelections.length - 1];
        for (const selection of currentSelections) {
            let allCardsValid = true;
            for (const card of cards) {
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
        else if (player.state == _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action) {
            if (cards.length > 0 && player.actions > 0) {
                //1 card selected at a time
                const card = cards[0];
                //card better be in your hand
                for (const handCard of player.hand) {
                    if (handCard.id === card.id && card.type === _card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].action) {
                        //the user chose to play this action card
                        const cardDefinition = this.library.getCardDefinition(card.name);
                        if (cardDefinition.cardType === _card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].action) {
                            this.executingCards.push(cardDefinition);
                            player.actions--;
                            //remove card from hand, put it in play
                            let index = -1;
                            for (let i = 0; i < player.hand.length; i++) {
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
        else if (player.state == _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Buy && player.buys > 0) {
            if (cards.length > 0) {
                //1 card selected at a time
                const card = cards[0];
                //if this is a card in the players hand, and it's a treasure card, play it
                for (const handCard of player.hand) {
                    if (handCard.id === card.id && card.type === _card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].treasure) {
                        const treasureCardDefinition = this.library.getCardDefinition(card.name);
                        this.executingCards.push(treasureCardDefinition);
                        //remove card from hand, put it in play
                        let index = -1;
                        for (let i = 0; i < player.hand.length; i++) {
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
                    const cost = this.library.getCardDefinition(card.name).cost;
                    if (player.coins >= cost) {
                        this.shop[card.name].splice(0, 1);
                        player.gain(_player__WEBPACK_IMPORTED_MODULE_0__["Location"].discard, card);
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
    }
    onPromptClicked(playerIndex, prompt, cards) {
        if (this.executingCards.length > 0) {
            if (this.executingCards[this.executingCards.length - 1].onPrompt(prompt, this, this.players[playerIndex], cards) === true)
                return;
        }
        if (prompt == 'done') {
            this.advanceGame();
        }
    }
    //called by a card definition when execution is finished
    finishExecution(finishing) {
        const current = this.executingCards[this.executingCards.length - 1];
        // this better be the same card, things can't finish out of order
        if (current.getCardName() === finishing.getCardName()) {
            this.executingCards.splice(this.executingCards.length - 1, 1);
        }
        else {
            console.log('ERROR: cards finished executing out of order');
            return;
        }
    }
}


/***/ }),

/***/ "../Common/src/player.ts":
/*!*******************************!*\
  !*** ../Common/src/player.ts ***!
  \*******************************/
/*! exports provided: Location, PlayerState, Player, HumanPlayer, AIPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanPlayer", function() { return HumanPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIPlayer", function() { return AIPlayer; });
/* harmony import */ var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-definition */ "../Common/src/card-definition.ts");
/* harmony import */ var _card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-library */ "../Common/src/card-library.ts");


var Location;
(function (Location) {
    Location[Location["deck"] = 0] = "deck";
    Location[Location["revealed"] = 1] = "revealed";
    Location[Location["hand"] = 2] = "hand";
    Location[Location["inPlay"] = 3] = "inPlay";
    Location[Location["discard"] = 4] = "discard";
    Location[Location["shop"] = 5] = "shop";
})(Location || (Location = {}));
var PlayerState;
(function (PlayerState) {
    PlayerState["Action"] = "action";
    PlayerState["Buy"] = "buy";
    PlayerState["CleanUp"] = "clean-up";
    PlayerState["WaitingForTurn"] = "waiting";
})(PlayerState || (PlayerState = {}));
class Player {
    constructor(playerName, playerColor, index) {
        this.library = new _card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"];
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
            if (this.library.getCardDefinition(card.name).cardType == _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].action)
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
            const pickAction = { location: Location.hand, isValid: (card) => { return card.type === _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].action; }, count: 1 };
            actionPhaseSelections.push(pickAction);
            this.userPrompts.push(['done']);
            this.pushSelection(actionPhaseSelections, game);
        }
        else if (this.state === PlayerState.Buy) {
            //in the buy phase you can play treasure cards to get more coins, and use coins to buy from the shop
            const buyPhaseSelections = [];
            const pickTreasure = { location: Location.hand, isValid: (card) => { return card.type === _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].treasure; }, count: 1 };
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
class HumanPlayer extends Player {
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
class AIPlayer extends Player {
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


/***/ }),

/***/ "../Common/src/treasure-card-definition.ts":
/*!*************************************************!*\
  !*** ../Common/src/treasure-card-definition.ts ***!
  \*************************************************/
/*! exports provided: TreasureCardDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasureCardDefinition", function() { return TreasureCardDefinition; });
/* harmony import */ var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-definition */ "../Common/src/card-definition.ts");

class TreasureCardDefinition extends _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardDefinition"] {
    constructor() {
        super();
        this.coinValue = 0;
        this.cardType = _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].treasure;
    }
    getCoinValue() {
        return this.coinValue;
    }
    //increase the player's coin value when the card is played
    execute(game, player) {
        player.coins += this.getCoinValue();
        game.finishExecution(this);
    }
}


/***/ }),

/***/ "../Common/src/victory-card-definition.ts":
/*!************************************************!*\
  !*** ../Common/src/victory-card-definition.ts ***!
  \************************************************/
/*! exports provided: VictoryCardDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VictoryCardDefinition", function() { return VictoryCardDefinition; });
/* harmony import */ var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-definition */ "../Common/src/card-definition.ts");

class VictoryCardDefinition extends _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardDefinition"] {
    constructor() {
        super();
        this.cardType = _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].victory;
    }
}


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./join-game/join-game.component */ "./src/app/join-game/join-game.component.ts");
/* harmony import */ var _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup-game/setup-game.component */ "./src/app/setup-game/setup-game.component.ts");
/* harmony import */ var _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play-game/play-game.component */ "./src/app/play-game/play-game.component.ts");
/* harmony import */ var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-over/game-over.component */ "./src/app/game-over/game-over.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");









function AppComponent_app_join_game_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-join-game");
} }
function AppComponent_app_setup_game_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-setup-game");
} }
function AppComponent_app_play_game_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-play-game");
} }
function AppComponent_app_game_over_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-over");
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_h1_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onCloseSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r4.viewedCard)("selected", false)("orientation", "bottom")("revealed", true);
} }
function AppComponent_div_5_app_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 10);
} if (rf & 2) {
    const pileCard_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", pileCard_r9)("selected", false)("orientation", "bottom")("revealed", true);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_h1_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onCloseSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_app_card_5_Template, 1, 4, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewedPile);
} }
class AppComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.title = 'Dominion';
        this.viewedCard = undefined;
        this.viewedPile = [];
    }
    ngOnInit() {
        this.gameService.onGameChanged().subscribe((game) => {
            this.game = game;
        });
        this.gameService.onViewedCardChanged().subscribe((viewedCard) => {
            this.viewedCard = viewedCard;
        });
        this.gameService.onViewedPileChanged().subscribe((viewedPile) => {
            this.viewedPile = viewedPile;
        });
    }
    onCloseSelected() {
        this.gameService.setViewedCard(undefined);
        this.gameService.setViewedPile([], '');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 6, consts: [[4, "ngIf"], ["id", "viewedCard", 4, "ngIf"], ["id", "viewedPile", 4, "ngIf"], ["id", "viewedCard"], ["id", "grayOut"], ["id", "close", 3, "click"], ["id", "card", 3, "card", "selected", "orientation", "revealed"], ["id", "viewedPile"], ["id", "pileView"], ["id", "pileCard", 3, "card", "selected", "orientation", "revealed", 4, "ngFor", "ngForOf"], ["id", "pileCard", 3, "card", "selected", "orientation", "revealed"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_join_game_0_Template, 1, 0, "app-join-game", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_setup_game_1_Template, 1, 0, "app-setup-game", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_play_game_2_Template, 1, 0, "app-play-game", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_game_over_3_Template, 1, 0, "app-game-over", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 6, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game != undefined && ctx.game.state === "setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game != undefined && ctx.game.state === "play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game != undefined && ctx.game.state === "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewedCard != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewedPile.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_3__["JoinGameComponent"], _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_4__["SetupGameComponent"], _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_5__["PlayGameComponent"], _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_6__["GameOverComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\napp-play-game[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n#viewedCard[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 10 ;\r\n}\r\n\r\n#viewedPile[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 10 ;\r\n}\r\n\r\n#grayOut[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(125, 125, 125, 0.7);\r\n  \r\n}\r\n\r\n#pileView[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  width: 80%;\r\n  height: 20%;\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n  position: absolute;\r\n  height: 50%;\r\n  width: 80%;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n#pileCard[_ngcontent-%COMP%] {\r\n  height: 90%;\r\n  width: auto;\r\n  display: inline-block;\r\n  text-align: center;\r\n  padding: 14px;\r\n  text-decoration: none;\r\n}\r\n\r\n#card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 50%;\r\n  width: auto;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n#close[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n  color:black;\r\n  border-radius: 50%;\r\n  border: solid 2px black;\r\n  cursor: pointer;\r\n  width: 24px;\r\n  height: 24px;\r\n  font-size: 24px;\r\n  line-height: 24px;\r\n  text-align: center;\r\n\r\n  position: absolute;\r\n  left: 10%;\r\n  top: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07RUFDTiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsTUFBTTtFQUNOLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDOztBQUU1Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hcHAtcGxheS1nYW1lIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbiN2aWV3ZWRDYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwIC8qanVzdCB0byBtYWtlIHN1cmUgaXRzIG9uIHRvcCovO1xyXG59XHJcblxyXG4jdmlld2VkUGlsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMCAvKmp1c3QgdG8gbWFrZSBzdXJlIGl0cyBvbiB0b3AqLztcclxufVxyXG5cclxuI2dyYXlPdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNSwgMTI1LCAxMjUsIDAuNyk7XHJcbiAgXHJcbn1cclxuXHJcbiNwaWxlVmlldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI3BpbGVDYXJkIHtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICB0b3A6IDEwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./join-game/join-game.component */ "./src/app/join-game/join-game.component.ts");
/* harmony import */ var _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./play-game/play-game.component */ "./src/app/play-game/play-game.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setup-game/setup-game.component */ "./src/app/setup-game/setup-game.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./card-pile/card-pile.component */ "./src/app/card-pile/card-pile.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./game-over/game-over.component */ "./src/app/game-over/game-over.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");










// angular material imports

















const config = { url: 'http://localhost:3000', options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
        _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_7__["JoinGameComponent"],
        _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_8__["PlayGameComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
        _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_18__["SetupGameComponent"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_20__["PlayerComponent"],
        _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_21__["CardPileComponent"],
        _shop_shop_component__WEBPACK_IMPORTED_MODULE_22__["ShopComponent"],
        _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_23__["GameOverComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                    _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_7__["JoinGameComponent"],
                    _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_8__["PlayGameComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
                    _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_18__["SetupGameComponent"],
                    _player_player_component__WEBPACK_IMPORTED_MODULE_20__["PlayerComponent"],
                    _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_21__["CardPileComponent"],
                    _shop_shop_component__WEBPACK_IMPORTED_MODULE_22__["ShopComponent"],
                    _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_23__["GameOverComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config),
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__["CookieService"]],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerComponent {
    constructor() {
        this.imgSrc = '/assets/dominion-banner.jfif';
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 1, vars: 0, consts: [["src", "assets/dominion-banner.jfif"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n    max-height: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n    background-color: cornsilk;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/card-pile/card-pile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-pile/card-pile.component.ts ***!
  \**************************************************/
/*! exports provided: CardPileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPileComponent", function() { return CardPileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CardPileComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location);
} }
const _c0 = function (a0, a1, a2, a3) { return { "bottom": a0, "left": a1, "top": a2, "right": a3 }; };
function CardPileComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardPileComponent_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx_r1.hovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.getImgSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c0, ctx_r1.orientation === "bottom", ctx_r1.orientation === "left", ctx_r1.orientation === "top", ctx_r1.orientation === "right"));
} }
function CardPileComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.cards.length);
} }
class CardPileComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.location = '';
        this.showLocationLabel = false;
        this.hovered = false;
    }
    ngOnInit() {
    }
    getImgSrc() {
        let url = '/assets/card_images/';
        url += this.orientation;
        url += '/';
        if (this.revealed === true) {
            url += this.cards[0].imageName;
        }
        else {
            url += 'Card_Back.jpg';
        }
        return url;
    }
    onClick() {
        if (this.revealed === true) {
            this.gameService.setViewedPile(this.cards, this.location);
        }
    }
}
CardPileComponent.ɵfac = function CardPileComponent_Factory(t) { return new (t || CardPileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
CardPileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardPileComponent, selectors: [["app-card-pile"]], inputs: { cards: "cards", revealed: "revealed", orientation: "orientation", location: "location", showLocationLabel: "showLocationLabel" }, decls: 4, vars: 3, consts: [["id", "title", 4, "ngIf"], [3, "hovered", "ngClass", "src", "click", 4, "ngIf"], ["id", "hoverArea", 3, "mouseenter", "mouseleave", "click"], ["id", "count", 4, "ngIf"], ["id", "title"], [3, "ngClass", "src", "click"], ["id", "count"]], template: function CardPileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardPileComponent_p_0_Template, 2, 1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardPileComponent_img_1_Template, 1, 9, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardPileComponent_Template_div_mouseenter_2_listener() { return ctx.hovered = true; })("mouseleave", function CardPileComponent_Template_div_mouseleave_2_listener() { return ctx.hovered = false; })("click", function CardPileComponent_Template_div_click_2_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardPileComponent_p_3_Template, 2, 1, "p", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLocationLabel === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 10%;\r\n}\r\n\r\n#hoverArea[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 11;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 5px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n#count[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(90% - 5px);\r\n}\r\n\r\n.top[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.hovered[_ngcontent-%COMP%]\r\n{\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  max-width: 190px;\r\n  max-height: 300px;\r\n  height: auto;\r\n  width: auto;\r\n  z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1waWxlL2NhcmQtcGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsOEVBQThFO0VBQzlFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0FBQ1I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXBpbGUvY2FyZC1waWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4jaG92ZXJBcmVhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEycHggNDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2NvdW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDkwJSAtIDVweCk7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cHgpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDVweCk7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDVweCk7XHJcbn1cclxuXHJcbi5ob3ZlcmVkXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWF4LXdpZHRoOiAxOTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgei1pbmRleDogMTA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardPileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-pile',
                templateUrl: './card-pile.component.html',
                styleUrls: ['./card-pile.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { cards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], revealed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showLocationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a1, a2, a3) { return { "bottom": a0, "left": a1, "top": a2, "right": a3 }; };
class CardComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.selected = false;
        this.highlighted = false;
        this.hovered = false;
    }
    ngOnInit() {
    }
    getImgSrc() {
        let url = '/assets/card_images/';
        url += this.orientation;
        url += '/';
        if (this.revealed === true) {
            url += this.card.imageName;
        }
        else {
            url += 'Card_Back.jpg';
        }
        return url;
    }
    onClick() {
        this.gameService.onCardSelected(this.card);
    }
    onView() {
        this.gameService.setViewedCard(this.card);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card", selected: "selected", highlighted: "highlighted", orientation: "orientation", revealed: "revealed" }, decls: 2, vars: 15, consts: [[3, "src", "ngClass", "click"], ["id", "hoverArea", 3, "mouseenter", "mouseleave", "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_img_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardComponent_Template_div_mouseenter_1_listener() { return ctx.hovered = true; })("mouseleave", function CardComponent_Template_div_mouseleave_1_listener() { return ctx.hovered = false; })("click", function CardComponent_Template_div_click_1_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.hovered)("selected", ctx.selected)("unselected", !ctx.selected)("highlighted", ctx.highlighted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.getImgSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c0, ctx.orientation === "bottom", ctx.orientation === "left", ctx.orientation === "top", ctx.orientation === "right"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: #80e5ff;\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    margin: 0px;\r\n  }\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: #ecff80;\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    margin: 0px;\r\n  }\r\n\r\n#hoverArea[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 11;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 5px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.top[_ngcontent-%COMP%] {\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n}\r\n\r\n.hovered[_ngcontent-%COMP%]\r\n{\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  max-width: 190px;\r\n  max-height: 300px;\r\n  height: auto;\r\n  width: auto;\r\n  z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhFQUE4RTtFQUM5RSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwZTVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuLmhpZ2hsaWdodGVkIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlY2ZmODA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiNob3ZlckFyZWEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTJweCA0MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBtYXJnaW46IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNXB4KTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNXB4KTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XHJcbn1cclxuXHJcbi5ob3ZlcmVkXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWF4LXdpZHRoOiAxOTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgei1pbmRleDogMTA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css'],
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], highlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], revealed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game-over/game-over.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-over/game-over.component.ts ***!
  \**************************************************/
/*! exports provided: GameOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverComponent", function() { return GameOverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Common/src/card-library */ "../Common/src/card-library.ts");
/* harmony import */ var _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Common/src/card-definition */ "../Common/src/card-definition.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function GameOverComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r1[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r1[1]);
} }
class GameOverComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.orderedPlayers = [];
        this.winner = '';
    }
    ngOnInit() {
        const game = this.gameService.getGame();
        // calculate victory points for each player, and put them in order by amount of points
        const cardLibrary = new _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"]();
        for (const player of game.players) {
            let playerPoints = 0;
            for (const card of player.deck) {
                if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    const victoryCardDefinition = cardLibrary.getCardDefinition(card.name);
                    playerPoints += victoryCardDefinition.GetVictoryPoints();
                    console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
                }
            }
            for (const card of player.revealed) {
                if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    const victoryCardDefinition = cardLibrary.getCardDefinition(card.name);
                    playerPoints += victoryCardDefinition.GetVictoryPoints();
                    console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
                }
            }
            for (const card of player.hand) {
                if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    const victoryCardDefinition = cardLibrary.getCardDefinition(card.name);
                    playerPoints += victoryCardDefinition.GetVictoryPoints();
                    console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
                }
            }
            for (const card of player.inPlay) {
                if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    const victoryCardDefinition = cardLibrary.getCardDefinition(card.name);
                    playerPoints += victoryCardDefinition.GetVictoryPoints();
                    console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
                }
            }
            for (const card of player.discard) {
                if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    const victoryCardDefinition = cardLibrary.getCardDefinition(card.name);
                    playerPoints += victoryCardDefinition.GetVictoryPoints();
                    console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
                }
            }
            let inserted = false;
            for (let i = 0; i <= this.orderedPlayers.length && inserted === false; i++) {
                if (i === this.orderedPlayers.length) {
                    this.orderedPlayers.push([player.name, playerPoints]);
                    inserted = true;
                }
                else if (playerPoints > this.orderedPlayers[i][1]) {
                    this.orderedPlayers.splice(i, 0, [player.name, playerPoints]);
                    inserted = true;
                }
            }
        }
        // check for tie
        if (this.orderedPlayers.length >= 2 && this.orderedPlayers[0][1] === this.orderedPlayers[1][1]) {
            this.winner = 'It\'s a tie between (';
            for (const player of this.orderedPlayers) {
                if (player[1] === this.orderedPlayers[0][1]) {
                    this.winner += ' ' + player[0];
                }
            }
            this.winner += ' )!';
        }
        else {
            this.winner = this.orderedPlayers[0][0] + ' wins!';
        }
    }
    onLeaveGame() {
        this.gameService.leaveGame();
    }
}
GameOverComponent.ɵfac = function GameOverComponent_Factory(t) { return new (t || GameOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"])); };
GameOverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameOverComponent, selectors: [["app-game-over"]], decls: 18, vars: 2, consts: [["id", "content"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"]], template: function GameOverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Victory Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GameOverComponent_tr_15_Template, 5, 2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_16_listener() { return ctx.onLeaveGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Leave Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.winner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderedPlayers);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["app-banner[_ngcontent-%COMP%] { \r\n    display: flex;\r\n    border-width: 1px;\r\n    height: 20%;\r\n    width: 100%;\r\n  }\r\n  \r\n#content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n  \r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(37, 37, 37);\r\n    padding: 8px;\r\n}\r\n  \r\n.mat-card[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n  \r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUVGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWJhbm5lciB7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiNjb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuICBcclxuLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuICBcclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameOverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-over',
                templateUrl: './game-over.component.html',
                styleUrls: ['./game-over.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Common_src_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Common/src/game */ "../Common/src/game.ts");
/* harmony import */ var _Common_src_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Common/src/player */ "../Common/src/player.ts");
/* harmony import */ var _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Common/src/card-definition */ "../Common/src/card-definition.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status.service */ "./src/app/status.service.ts");








class GameService {
    constructor(socket, statusService) {
        this.socket = socket;
        this.statusService = statusService;
        this.onGameChanged = () => {
            return this.gameSubject.asObservable();
        };
        this.onGamesUpdated = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                this.socket.on('games-updated', (games) => {
                    if (this.game !== undefined) {
                        let bFound = false;
                        for (const game of games) {
                            if (game.name === this.game.name) {
                                bFound = true;
                                if (game.players.length > this.player.index && game.players[this.player.index].name === this.player.name) {
                                    console.log('updated game');
                                    this.game = game;
                                    this.gameSubject.next(this.game);
                                }
                                else {
                                    console.log('we left the game');
                                    // we aren't in the game anymore, clear out
                                    this.game = undefined;
                                    this.player = undefined;
                                    this.gameSubject.next(this.game);
                                }
                            }
                        }
                        if (bFound === false) {
                            console.log('we left the game');
                            // we aren't in the game anymore, clear out
                            this.game = undefined;
                            this.player = undefined;
                            this.gameSubject.next(this.game);
                        }
                    }
                    observer.next(games);
                });
            });
        };
        this.onViewedCardChanged = () => {
            return this.viewedCardSubject.asObservable();
        };
        this.onViewedPileChanged = () => {
            return this.viewedPileSubject.asObservable();
        };
        this.gameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.viewedCardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedCards = [];
        this.viewedPile = [];
        this.viewedPileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.socket.on('game-updated', (game) => {
            if (this.game !== undefined) {
                this.game = game;
                this.player = game.players[this.player.index];
                this.gameSubject.next(this.game);
                console.log(this.player);
                this.statusService.updateStatus(this.game);
            }
        });
    }
    getPlayer() {
        return this.player;
    }
    // server communication through socket io
    sendToServer(event, data, returnCallback) {
        console.log('emiting: ' + event);
        this.socket.emit(event, data, (result) => {
            if (result.ok === true) {
                returnCallback(result.returnValue);
            }
            else {
                this.statusService.setStatus(result.error);
                console.log('error sending: ' + event + '. reason: ' + result.error);
            }
            return result.returnValue;
        });
    }
    joinGame(myPlayerName, myPlayerColor, myGameName) {
        this.sendToServer('join-game', { playerName: myPlayerName, playerColor: myPlayerColor, gameName: myGameName }, (returnValue) => {
            this.player = returnValue.player;
            this.game = returnValue.game;
            this.gameSubject.next(this.game);
        });
    }
    createGame(newPlayerName, newPlayerColor, newGameName) {
        // create the game, and join it if it's created successfully
        this.sendToServer('create-game', newGameName, () => {
            this.joinGame(newPlayerName, newPlayerColor, newGameName);
        });
    }
    leaveGame() {
        this.sendToServer('leave-game', { gameName: this.game.name, playerIndex: this.player.index }, () => { });
    }
    addBot(myBotName) {
        console.log(this.game);
        this.sendToServer('add-bot', { gameName: this.game.name, botName: myBotName }, () => {
        });
    }
    requestGames() {
        this.sendToServer('request-games-list', {}, () => { });
    }
    setupSelectCard(card) {
        this.sendToServer('setup-card-selected', {
            gameName: this.game.name,
            cardName: card.name
        }, () => { });
    }
    setupSelectPreset(selectedPreset) {
        this.sendToServer('setup-preset-selected', {
            gameName: this.game.name,
            presetName: selectedPreset
        }, () => { });
    }
    setupReady() {
        this.sendToServer('setup-player-ready', {
            gameName: this.game.name,
            playerName: this.player.name
        }, () => { });
    }
    setupStartGame() {
        this.sendToServer('setup-start-game', {
            gameName: this.game.name
        }, () => { });
    }
    getGame() {
        return this.game;
    }
    onPromptClicked(clickedPrompt) {
        this.sendToServer('prompt-clicked', {
            gameName: this.game.name,
            playerIndex: this.player.index,
            prompt: clickedPrompt,
            cards: this.selectedCards
        }, () => { });
        this.selectedCards = [];
    }
    onCardSelected(card) {
        // card selected for setup
        if (this.game.state === _Common_src_game__WEBPACK_IMPORTED_MODULE_2__["GameState"].Setup) {
            this.setupSelectCard(card);
            return;
        }
        // card selected in game
        // if the card is already selected, remove it from the selection
        for (let i = 0; i < this.selectedCards.length; i++) {
            const selectedCard = this.selectedCards[i];
            if (selectedCard.id === card.id) {
                this.selectedCards.splice(i, 1);
                return;
            }
        }
        this.selectedCards.push(card);
        const count = this.player.userSelections[this.player.userSelections.length - 1][0].count;
        if (this.selectedCards.length >= count && count !== -1) {
            this.sendToServer('cards-selected', {
                gameName: this.game.name,
                playerIndex: this.player.index,
                cards: this.selectedCards
            }, () => { });
            this.selectedCards = [];
        }
    }
    isCardSelected(card) {
        for (const selectedCard of this.selectedCards) {
            if (selectedCard.id === card.id) {
                return true;
            }
        }
        return false;
    }
    isCardHighlighted(card) {
        if (this.player.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_3__["PlayerState"].Action) {
            if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_4__["CardType"].action && this.player.actions > 0) {
                return true;
            }
        }
        else if (this.player.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_3__["PlayerState"].Buy) {
            if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_4__["CardType"].treasure) {
                return true;
            }
        }
        return false;
    }
    setViewedCard(card) {
        this.viewedCard = card;
        this.viewedPile = [];
        this.viewedCardSubject.next(this.viewedCard);
    }
    setViewedPile(cards, location) {
        // you can only view a a pile when clicking the shop piles doesn't buy/gain something
        let pickingFromShop = false;
        if (this.player.userSelections.length > 0) {
            for (const selection of this.player.userSelections[this.player.userSelections.length - 1]) {
                if (selection.location === _Common_src_player__WEBPACK_IMPORTED_MODULE_3__["Location"].shop) {
                    pickingFromShop = true;
                }
            }
        }
        if (location !== 'Shop' || !pickingFromShop) {
            this.viewedCard = undefined;
            this.viewedPile = cards;
            this.viewedPileSubject.next(this.viewedPile);
        }
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_status_service__WEBPACK_IMPORTED_MODULE_6__["StatusService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] }, { type: _status_service__WEBPACK_IMPORTED_MODULE_6__["StatusService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/join-game/join-game.component.ts":
/*!**************************************************!*\
  !*** ./src/app/join-game/join-game.component.ts ***!
  \**************************************************/
/*! exports provided: JoinGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGameComponent", function() { return JoinGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status.service */ "./src/app/status.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function JoinGameComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.status, " ");
} }
function JoinGameComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGameComponent_tr_23_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const gameName_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onJoin(gameName_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Join");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameName_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameName_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.playerCounts[i_r3], "/4");
} }
class JoinGameComponent {
    constructor(gameService, statusService, cookieService) {
        this.gameService = gameService;
        this.statusService = statusService;
        this.cookieService = cookieService;
        this.gameNames = [];
        this.playerCounts = [];
        this.newGameName = '';
        this.playerName = this.cookieService.get('player-name');
        this.playerColor = '#000000';
        this.status = '';
    }
    ngOnInit() {
        // listen for the list of games being updated
        this.gameService
            .onGamesUpdated()
            .subscribe((games) => {
            this.gameNames = [];
            this.playerCounts = [];
            for (const game of games) {
                this.gameNames.push(game.name);
                this.playerCounts.push(game.players.length);
            }
        });
        this.statusService.onStatusChanged().subscribe((newStatus) => {
            this.status = newStatus;
        });
        this.gameService.requestGames();
    }
    onJoin(gameName) {
        if (this.playerName !== '') {
            this.cookieService.set('player-name', this.playerName);
            this.gameService.joinGame(this.playerName, this.playerColor, gameName);
        }
        else {
            this.statusService.setStatus('Please enter a player name');
        }
    }
    onCreate() {
        if (this.playerName === '' && this.newGameName === '') {
            this.statusService.setStatus('Please enter a game and player name');
        }
        else if (this.playerName === '') {
            this.statusService.setStatus('Please enter a player name');
        }
        else if (this.newGameName === '') {
            this.statusService.setStatus('Please enter a game name');
        }
        else {
            this.cookieService.set('player-name', this.playerName);
            this.gameService.createGame(this.playerName, this.playerColor, this.newGameName);
            this.newGameName = '';
        }
    }
}
JoinGameComponent.ɵfac = function JoinGameComponent_Factory(t) { return new (t || JoinGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
JoinGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinGameComponent, selectors: [["app-join-game"]], decls: 30, vars: 5, consts: [["id", "status", 4, "ngIf"], ["id", "content"], ["type", "text", "placeholder", "", 3, "ngModel", "ngModelChange"], ["type", "color", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], ["id", "status"]], template: function JoinGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JoinGameComponent_div_4_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create/Join Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinGameComponent_Template_input_ngModelChange_10_listener($event) { return ctx.playerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Favorite Color: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinGameComponent_Template_input_ngModelChange_13_listener($event) { return ctx.playerColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Player Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, JoinGameComponent_tr_23_Template, 8, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Create New Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinGameComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newGameName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGameComponent_Template_button_click_28_listener() { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newGameName);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["app-banner[_ngcontent-%COMP%] { \r\n  display: flex;\r\n  border-width: 1px;\r\n  height: 20%;\r\n  width: 100%;\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(37, 37, 37);\r\n    padding: 8px;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#status[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi1nYW1lL2pvaW4tZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvam9pbi1nYW1lL2pvaW4tZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWJhbm5lciB7IFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG50ZCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM3LCAzNywgMzcpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbiNzdGF0dXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-game',
                templateUrl: './join-game.component.html',
                styleUrls: ['./join-game.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }, { type: _status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/play-game/play-game.component.ts":
/*!**************************************************!*\
  !*** ./src/app/play-game/play-game.component.ts ***!
  \**************************************************/
/*! exports provided: PlayGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayGameComponent", function() { return PlayGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Common_src_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Common/src/player */ "../Common/src/player.ts");
/* harmony import */ var _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Common/src/card-definition */ "../Common/src/card-definition.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../status.service */ "./src/app/status.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function PlayGameComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayGameComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const prompt_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onPromptClicked(prompt_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prompt_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlighted", ctx_r0.isPromptHighlighted(prompt_r4) === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prompt_r4);
} }
function PlayGameComponent_app_player_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r1.leftPlayer)("orientation", "left");
} }
function PlayGameComponent_app_player_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r2.topPlayer)("orientation", "top");
} }
function PlayGameComponent_app_player_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r3.rightPlayer)("orientation", "right");
} }
class PlayGameComponent {
    constructor(gameService, statusService) {
        this.gameService = gameService;
        this.statusService = statusService;
        this.game = gameService.getGame();
        this.myPlayer = gameService.getPlayer();
        this.initPlayers();
        this.status = statusService.getStatus();
    }
    ngOnInit() {
        this.statusService.onStatusChanged().subscribe((newStatus) => {
            this.status = newStatus;
        });
        this.gameService.onGameChanged().subscribe((game) => {
            this.game = game;
            this.initPlayers();
        });
    }
    getStatus() {
        if (this.myPlayer.status !== '') {
            return this.myPlayer.status;
        }
        else {
            return this.status;
        }
    }
    onPromptClicked(prompt) {
        this.gameService.onPromptClicked(prompt);
    }
    isPromptHighlighted(prompt) {
        if (prompt === 'done') {
            if (this.myPlayer.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_1__["PlayerState"].Action) {
                let anyActions = false;
                for (const card of this.myPlayer.hand) {
                    if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].action) {
                        anyActions = true;
                    }
                }
                if (this.myPlayer.actions === 0 || anyActions === false) {
                    return true;
                }
            }
            else if (this.myPlayer.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_1__["PlayerState"].Buy && this.myPlayer.buys === 0) {
                return true;
            }
        }
        return false;
    }
    initPlayers() {
        if (this.game !== undefined) {
            this.myPlayer = this.game.players[this.myPlayer.index];
            if (this.game.players.length === 2) {
                this.topPlayer = this.game.players[((this.myPlayer.index + 1) % 2)];
            }
            else if (this.game.players.length === 3) {
                this.leftPlayer = this.game.players[((this.myPlayer.index + 1) % 3)];
                this.topPlayer = this.game.players[((this.myPlayer.index + 2) % 3)];
            }
            else if (this.game.players.length === 4) {
                this.leftPlayer = this.game.players[((this.myPlayer.index + 1) % 4)];
                this.topPlayer = this.game.players[((this.myPlayer.index + 2) % 4)];
                this.rightPlayer = this.game.players[((this.myPlayer.index + 3) % 4)];
            }
        }
    }
}
PlayGameComponent.ɵfac = function PlayGameComponent_Factory(t) { return new (t || PlayGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"])); };
PlayGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayGameComponent, selectors: [["app-play-game"]], decls: 10, vars: 7, consts: [["id", "status"], ["mat-button", "", 3, "highlighted", "click", 4, "ngFor", "ngForOf"], ["id", "game"], ["id", "leftPlayer", 3, "player", "orientation", 4, "ngIf"], ["id", "topPlayer", 3, "player", "orientation", 4, "ngIf"], ["id", "rightPlayer", 3, "player", "orientation", 4, "ngIf"], ["id", "myPlayer", 3, "player", "orientation"], ["id", "shop"], ["mat-button", "", 3, "click"], ["id", "leftPlayer", 3, "player", "orientation"], ["id", "topPlayer", 3, "player", "orientation"], ["id", "rightPlayer", 3, "player", "orientation"]], template: function PlayGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayGameComponent_button_2_Template, 2, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayGameComponent_app_player_5_Template, 1, 2, "app-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayGameComponent_app_player_6_Template, 1, 2, "app-player", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayGameComponent_app_player_7_Template, 1, 2, "app-player", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-player", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-shop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getStatus(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myPlayer.userPrompts[ctx.myPlayer.userPrompts.length - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leftPlayer !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topPlayer !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rightPlayer !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx.myPlayer)("orientation", "bottom");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _player_player_component__WEBPACK_IMPORTED_MODULE_7__["PlayerComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["#status[_ngcontent-%COMP%] {\r\n    height: 5%;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n#game[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-template-rows: repeat(10, 10%);\r\n\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    border: 1px solid purple;\r\n}\r\n\r\n#leftPlayer[_ngcontent-%COMP%]{\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start:2;\r\n    grid-row-end:11;\r\n\r\n    border: 1px solid black;\r\n}\r\n\r\n#topPlayer[_ngcontent-%COMP%]{\r\n    grid-column-start: 1;\r\n    grid-column-end: 10;\r\n    grid-row-start:1;\r\n    grid-row-end:2;\r\n    \r\n    border: 1px solid black;\r\n}\r\n\r\n#rightPlayer[_ngcontent-%COMP%]{\r\n    grid-column-start: 10;\r\n    grid-column-end: 10;\r\n    grid-row-start:1;\r\n    grid-row-end:9;\r\n\r\n    border: 1px solid black;\r\n}\r\n\r\n#myPlayer[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 11;\r\n    grid-row-start:9;\r\n    grid-row-end:11;\r\n\r\n    border: 1px solid black;\r\n}\r\n\r\n#shop[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 10;\r\n    grid-row-start:2;\r\n    grid-row-end:9;\r\n\r\n    margin: 8px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: #ecff80;\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS1nYW1lL3BsYXktZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7O0lBRW5DLFdBQVc7SUFDWCxXQUFXOztJQUVYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYzs7SUFFZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjOztJQUVkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYzs7SUFFZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wbGF5LWdhbWUvcGxheS1nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3N0YXR1cyB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNnYW1le1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxMCUpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSk7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVye1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDoyO1xyXG4gICAgZ3JpZC1yb3ctZW5kOjExO1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jdG9wUGxheWVye1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDEwO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6MTtcclxuICAgIGdyaWQtcm93LWVuZDoyO1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3JpZ2h0UGxheWVye1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEwO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMDtcclxuICAgIGdyaWQtcm93LXN0YXJ0OjE7XHJcbiAgICBncmlkLXJvdy1lbmQ6OTtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI215UGxheWVyIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMTtcclxuICAgIGdyaWQtcm93LXN0YXJ0Ojk7XHJcbiAgICBncmlkLXJvdy1lbmQ6MTE7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNzaG9wIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMDtcclxuICAgIGdyaWQtcm93LXN0YXJ0OjI7XHJcbiAgICBncmlkLXJvdy1lbmQ6OTtcclxuXHJcbiAgICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWNmZjgwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-play-game',
                templateUrl: './play-game.component.html',
                styleUrls: ['./play-game.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }, { type: _status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-pile/card-pile.component */ "./src/app/card-pile/card-pile.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");






function PlayerComponent_div_0_app_card_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 13);
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r5)("highlighted", ctx_r4.isCardHighlighted(card_r5) === true && ctx_r4.isCardSelected(card_r5) === false)("selected", ctx_r4.isCardSelected(card_r5) === true)("revealed", true)("orientation", "bottom");
} }
function PlayerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-card-pile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-card-pile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerComponent_div_0_app_card_14_Template, 1, 5, "app-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-card-pile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-card-pile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.player.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r0.player.actions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r0.player.buys, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r0.player.coins, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.deck)("location", "Deck")("showLocationLabel", true)("revealed", false)("orientation", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.revealed)("revealed", true)("orientation", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.player.hand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.inPlay)("location", "In Play")("showLocationLabel", true)("revealed", true)("orientation", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.discard)("location", "Discard")("showLocationLabel", true)("revealed", true)("orientation", "bottom");
} }
function PlayerComponent_div_1_app_card_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 22);
} if (rf & 2) {
    const card_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r7)("revealed", card_r7.revealedToOthers)("orientation", "left");
} }
function PlayerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-card-pile", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-card-pile", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerComponent_div_1_app_card_14_Template, 1, 3, "app-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-card-pile", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-card-pile", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r1.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.player.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r1.player.actions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r1.player.buys, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r1.player.coins, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.deck)("revealed", false)("orientation", "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.revealed)("revealed", true)("orientation", "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.player.hand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.inPlay)("revealed", true)("orientation", "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.discard)("revealed", true)("orientation", "left");
} }
function PlayerComponent_div_2_app_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 22);
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r9)("revealed", card_r9.revealedToOthers)("orientation", "top");
} }
function PlayerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-pile", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-pile", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_div_2_app_card_4_Template, 1, 3, "app-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-card-pile", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-card-pile", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.discard)("revealed", true)("orientation", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.inPlay)("revealed", true)("orientation", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.player.hand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.revealed)("revealed", true)("orientation", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.deck)("revealed", false)("orientation", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r2.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.player.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r2.player.actions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r2.player.buys, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r2.player.coins, "");
} }
function PlayerComponent_div_3_app_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 22);
} if (rf & 2) {
    const card_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r11)("revealed", card_r11.revealedToOthers)("orientation", "right");
} }
function PlayerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-pile", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-pile", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_div_3_app_card_4_Template, 1, 3, "app-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-card-pile", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-card-pile", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.discard)("revealed", true)("orientation", "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.inPlay)("revealed", true)("orientation", "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.player.hand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.revealed)("revealed", true)("orientation", "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.deck)("revealed", false)("orientation", "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r3.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.player.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r3.player.actions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r3.player.buys, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r3.player.coins, "");
} }
class PlayerComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
    }
    isCardSelected(card) {
        return this.gameService.isCardSelected(card) === true;
    }
    isCardHighlighted(card) {
        return this.gameService.isCardHighlighted(card) === true;
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], inputs: { player: "player", orientation: "orientation" }, decls: 4, vars: 4, consts: [["id", "bottomPlayer", 4, "ngIf"], ["id", "leftPlayer", 4, "ngIf"], ["id", "topPlayer", 4, "ngIf"], ["id", "rightPlayer", 4, "ngIf"], ["id", "bottomPlayer"], ["id", "bottomPlayerInfo"], ["id", "playerInfoText"], ["id", "bottomPlayerDeck", 3, "cards", "location", "showLocationLabel", "revealed", "orientation"], ["id", "bottomPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "bottomPlayerHand"], [3, "card", "highlighted", "selected", "revealed", "orientation", 4, "ngFor", "ngForOf"], ["id", "bottomPlayerInPlay", 3, "cards", "location", "showLocationLabel", "revealed", "orientation"], ["id", "bottomPlayerDiscard", 3, "cards", "location", "showLocationLabel", "revealed", "orientation"], [3, "card", "highlighted", "selected", "revealed", "orientation"], ["id", "leftPlayer"], ["id", "leftPlayerInfo"], ["id", "leftPlayerDeck", 3, "cards", "revealed", "orientation"], ["id", "leftPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "leftPlayerHand"], [3, "card", "revealed", "orientation", 4, "ngFor", "ngForOf"], ["id", "leftPlayerInPlay", 3, "cards", "revealed", "orientation"], ["id", "leftPlayerDiscard", 3, "cards", "revealed", "orientation"], [3, "card", "revealed", "orientation"], ["id", "topPlayer"], ["id", "topPlayerDiscard", 3, "cards", "revealed", "orientation"], ["id", "topPlayerInPlay", 3, "cards", "revealed", "orientation"], ["id", "topPlayerHand"], ["id", "topPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "topPlayerDeck", 3, "cards", "revealed", "orientation"], ["id", "topPlayerInfo"], ["id", "rightPlayer"], ["id", "rightPlayerDiscard", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerInPlay", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerHand"], ["id", "rightPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerDeck", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerInfo"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlayerComponent_div_0_Template, 17, 25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_div_1_Template, 17, 19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerComponent_div_2_Template, 17, 19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerComponent_div_3_Template, 17, 19, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "right");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_3__["CardPileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: ["#bottomPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-template-rows: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#bottomPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n\r\n    border-right: 1px solid black;\r\n}\r\n\r\n#bottomPlayerDeck[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#bottomPlayerRevealed[_ngcontent-%COMP%] {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#bottomPlayerHand[_ngcontent-%COMP%] {\r\n    grid-column-start: 4;\r\n    grid-column-end: 9;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 12%);\r\n}\r\n\r\n#bottomPlayerInPlay[_ngcontent-%COMP%] {\r\n    grid-column-start: 9;\r\n    grid-column-end: 10;\r\n}\r\n\r\n#bottomPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-column-start: 10;\r\n    grid-column-end: 10;\r\n}\r\n\r\n#leftPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 10%);\r\n    grid-template-columns: 100%;\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n#leftPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n    font-size:small;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n#leftPlayerDeck[_ngcontent-%COMP%]{\r\n    grid-row-start: 3;\r\n    grid-row-end: 4;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#leftPlayerRevealed[_ngcontent-%COMP%]{\r\n    grid-row-start: 4;\r\n    grid-row-end: 5;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#leftPlayerHand[_ngcontent-%COMP%] {\r\n    grid-row-start: 5;\r\n    grid-row-end: 9;\r\n    display: grid;\r\n    height: 100%;\r\n    width: 100%;\r\n    grid-template-rows: repeat(auto-fill, 10%);\r\n}\r\n\r\n#leftPlayerInPlay[_ngcontent-%COMP%]{\r\n    grid-row-start: 9;\r\n    grid-row-end: 10;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#leftPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-row-start: 10;\r\n    grid-row-end: 10;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n#topPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-template-rows: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#topPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n}\r\n\r\n#topPlayerInPlay[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n#topPlayerHand[_ngcontent-%COMP%] {\r\n    grid-column-start: 3;\r\n    grid-column-end: 8;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 5%);\r\n}\r\n\r\n#topPlayerRevealed[_ngcontent-%COMP%] {\r\n    grid-column-start: 8;\r\n    grid-column-end: 9;\r\n}\r\n\r\n#topPlayerDeck[_ngcontent-%COMP%] {\r\n    grid-column-start: 9;\r\n    grid-column-end: 10;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#topPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-column-start: 10;\r\n    grid-column-end: 11;\r\n    font-size:small;\r\n    \r\n    border-left: 1px solid black;\r\n}\r\n\r\n#rightPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 10%);\r\n    grid-template-columns: 100%;\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n#rightPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-row-start: 1;\r\n    grid-row-end: 2;\r\n}\r\n\r\n#rightPlayerInPlay[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n#rightPlayerHand[_ngcontent-%COMP%] {\r\n    grid-row-start: 3;\r\n    grid-row-end: 7;\r\n    display: grid;\r\n    height: 100%;\r\n    width: 100%;\r\n    grid-template-rows: repeat(auto-fill, 10%);\r\n}\r\n\r\n#rightPlayerRevealed[_ngcontent-%COMP%] {\r\n    grid-column-start: 7;\r\n    grid-column-end: 8;\r\n}\r\n\r\n#rightPlayerDeck[_ngcontent-%COMP%]{\r\n    grid-row-start: 8;\r\n    grid-row-end: 9;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#rightPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-row-start: 9;\r\n    grid-row-end: 11;\r\n    font-size:small;\r\n    \r\n    border-top: 1px solid black;\r\n}\r\n\r\n#playerInfoText[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7O0lBRWxCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZiw0QkFBNEI7QUFDaEM7O0FBUUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTs7SUFFZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm90dG9tUGxheWVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2JvdHRvbVBsYXllckluZm8ge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblxyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNib3R0b21QbGF5ZXJEZWNrIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNib3R0b21QbGF5ZXJSZXZlYWxlZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYm90dG9tUGxheWVySGFuZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogOTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEyJSk7XHJcbn1cclxuXHJcbiNib3R0b21QbGF5ZXJJblBsYXkge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDk7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDEwO1xyXG59XHJcblxyXG4jYm90dG9tUGxheWVyRGlzY2FyZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTA7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDEwO1xyXG59XHJcblxyXG4jbGVmdFBsYXllciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4jbGVmdFBsYXllckluZm8ge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVyRGVja3tcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVyUmV2ZWFsZWR7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNDtcclxuICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGVmdFBsYXllckhhbmQge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDEwJSk7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVySW5QbGF5e1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDk7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDEwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVyRGlzY2FyZCB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTA7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDEwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4jdG9wUGxheWVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3RvcFBsYXllckRpc2NhcmQge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbn1cclxuXHJcbiN0b3BQbGF5ZXJJblBsYXkge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbn1cclxuXHJcbiN0b3BQbGF5ZXJIYW5kIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgNSUpO1xyXG59XHJcblxyXG4jdG9wUGxheWVyUmV2ZWFsZWQge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDg7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDk7XHJcbn1cclxuXHJcbiN0b3BQbGF5ZXJEZWNrIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jdG9wUGxheWVySW5mbyB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTA7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDExO1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG4gICAgXHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4jcmlnaHRQbGF5ZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxMCUpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuI3JpZ2h0UGxheWVyRGlzY2FyZCB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMjtcclxufVxyXG5cclxuI3JpZ2h0UGxheWVySW5QbGF5IHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG59XHJcblxyXG4jcmlnaHRQbGF5ZXJIYW5kIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA3O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAxMCUpO1xyXG59XHJcblxyXG4jcmlnaHRQbGF5ZXJSZXZlYWxlZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNztcclxuICAgIGdyaWQtY29sdW1uLWVuZDogODtcclxufVxyXG5cclxuI3JpZ2h0UGxheWVyRGVja3tcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA4O1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNyaWdodFBsYXllckluZm8ge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDk7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDExO1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG4gICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNwbGF5ZXJJbmZvVGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/setup-game/setup-game.component.ts":
/*!****************************************************!*\
  !*** ./src/app/setup-game/setup-game.component.ts ***!
  \****************************************************/
/*! exports provided: SetupGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupGameComponent", function() { return SetupGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Common/src/card-library */ "../Common/src/card-library.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function SetupGameComponent_tr_8_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetupGameComponent_tr_8_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetupGameComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SetupGameComponent_tr_8_td_8_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SetupGameComponent_tr_8_td_9_Template, 2, 0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", player_r4.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r4.setupReady === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r4.setupReady === false);
} }
function SetupGameComponent_app_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 19);
} if (rf & 2) {
    const card_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r7)("selected", card_r7 === ctx_r1.selectedCard)("revealed", true)("orientation", "bottom");
} }
function SetupGameComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preset_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", preset_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", preset_r8, " ");
} }
function SetupGameComponent_app_card_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 19);
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r9)("selected", ctx_r3.game.setupSelectedCards.indexOf(card_r9.name) >= 0)("revealed", true)("orientation", "bottom");
} }
class SetupGameComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.library = this.library = new _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"]();
        this.basicCards = [];
        this.kingdomCards = [];
        this.getCards();
        this.presets = this.library.getPresetNames();
        this.game = this.gameService.getGame();
        this.gameService.onGameChanged().subscribe((game) => {
            this.game = game;
            if (this.game !== undefined) {
                this.selectedPreset = this.game.setupPreset;
            }
        });
    }
    getCards() {
        const cards = this.library.getAllCards();
        for (const card of cards) {
            if (card.isKingdom === true) {
                this.kingdomCards.push(card);
            }
            else {
                this.basicCards.push(card);
            }
        }
    }
    selectPreset() {
        this.gameService.setupSelectPreset(this.selectedPreset);
    }
    onReady() {
        this.gameService.setupReady();
    }
    onStart() {
        this.gameService.setupStartGame();
    }
    // if you want to start a game, everyone needs to be ready, and you need 10 cards selected
    canStart() {
        let canStart = true;
        for (const player of this.game.players) {
            if (!player.setupReady) {
                canStart = false;
            }
        }
        if (this.game.setupSelectedCards.length !== 10) {
            canStart = false;
        }
        return canStart;
    }
}
SetupGameComponent.ɵfac = function SetupGameComponent_Factory(t) { return new (t || SetupGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
SetupGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetupGameComponent, selectors: [["app-setup-game"]], decls: 32, vars: 6, consts: [["id", "playerList"], ["id", "playerTable"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["id", "basicCardContainer", 1, "content"], ["id", "basicCards"], [3, "card", "selected", "revealed", "orientation", 4, "ngFor", "ngForOf"], ["id", "kingdomCardContainer", 1, "content"], ["id", "presets"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "kingdomCards"], ["id", "nestedTable"], [1, "colorBox"], ["style", "color: green;", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], [2, "color", "green"], [2, "color", "red"], [3, "card", "selected", "revealed", "orientation"], [3, "value"]], template: function SetupGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SetupGameComponent_tr_8_Template, 10, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetupGameComponent_Template_button_click_9_listener() { return ctx.onReady(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetupGameComponent_Template_button_click_11_listener() { return ctx.onStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Basic Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SetupGameComponent_app_card_18_Template, 1, 4, "app-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Kingdom Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reccomended Sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SetupGameComponent_Template_mat_select_valueChange_28_listener($event) { return ctx.selectedPreset = $event; })("selectionChange", function SetupGameComponent_Template_mat_select_selectionChange_28_listener() { return ctx.selectPreset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SetupGameComponent_mat_option_29_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SetupGameComponent_app_card_31_Template, 1, 4, "app-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canStart());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basicCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedPreset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.presets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kingdomCards);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: [".content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    width: 60%;\r\n  }\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n#basicCardContainer[_ngcontent-%COMP%] {\r\n    height: 20%;\r\n}\r\n\r\n#kingdomCardContainer[_ngcontent-%COMP%] {\r\n    height:80%\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n#basicCards[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height:100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-gap: 1em;\r\n}\r\n\r\n#presets[_ngcontent-%COMP%] {\r\n    height: 10%;\r\n}\r\n\r\n#kingdomCards[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height:90%;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 25%);\r\n    grid-template-rows: repeat(3, 30%);\r\n    grid-gap: 1em;\r\n}\r\n\r\n#playerList[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: white;\r\n}\r\n\r\n.colorBox[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n    height: 10Px;\r\n    border: 1px solid black;\r\n}\r\n\r\n#playerTable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#playerTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #playerTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(37, 37, 37);\r\n    padding: 8px;\r\n}\r\n\r\n#nestedTable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#nestedTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-width: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ2FtZS9zZXR1cC1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7QUFFRjtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7O0lBRVYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUM7O0lBRUcsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1nYW1lL3NldHVwLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuI2Jhc2ljQ2FyZENvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuI2tpbmdkb21DYXJkQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDo4MCVcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNiYXNpY0NhcmRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDEwJSk7XHJcbiAgICBncmlkLWdhcDogMWVtO1xyXG59XHJcblxyXG4jcHJlc2V0cyB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuI2tpbmdkb21DYXJkcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDMwJSk7XHJcbiAgICBncmlkLWdhcDogMWVtO1xyXG59XHJcblxyXG4jcGxheWVyTGlzdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxOCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb2xvckJveCB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBQeDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiNwbGF5ZXJUYWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4gI3BsYXllclRhYmxlIHRkLCBcclxuICNwbGF5ZXJUYWJsZSB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbiNuZXN0ZWRUYWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4jbmVzdGVkVGFibGUgdGR7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-setup-game',
                templateUrl: './setup-game.component.html',
                styleUrls: ['./setup-game.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-pile/card-pile.component */ "./src/app/card-pile/card-pile.component.ts");






function ShopComponent_app_card_pile_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-pile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_app_card_pile_6_Template_app_card_pile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onPileClicked(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", "Shop")("cards", item_r2)("revealed", true)("orientation", "bottom");
} }
function ShopComponent_app_card_pile_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-pile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_app_card_pile_9_Template_app_card_pile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onPileClicked(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", item_r5)("location", "Shop")("revealed", true)("orientation", "bottom");
} }
class ShopComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.basicCards = [];
        this.kingdomCards = [];
    }
    ngOnInit() {
        this.shop = this.gameService.getGame().shop;
        this.trash = this.gameService.getGame().trash;
        this.initShopPiles();
        this.gameService.onGameChanged().subscribe((game) => {
            this.shop = game.shop;
            this.trash = game.trash;
            this.initShopPiles();
        });
    }
    initShopPiles() {
        this.basicCards = [];
        this.kingdomCards = [];
        for (const item in this.shop) {
            if (this.shop[item][0].isKingdom) {
                this.kingdomCards.push(this.shop[item]);
            }
            else {
                this.basicCards.push(this.shop[item]);
            }
        }
    }
    onPileClicked(cards) {
        this.gameService.onCardSelected(cards[0]);
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 10, vars: 7, consts: [["id", "title"], ["id", "container"], ["id", "basicCards"], [3, "location", "cards", "revealed", "orientation", "click", 4, "ngFor", "ngForOf"], [3, "cards", "location", "showLocationLabel", "revealed", "orientation"], ["id", "kingdomCards"], [3, "cards", "location", "revealed", "orientation", "click", 4, "ngFor", "ngForOf"], [3, "location", "cards", "revealed", "orientation", "click"], [3, "cards", "location", "revealed", "orientation", "click"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShopComponent_app_card_pile_6_Template, 1, 4, "app-card-pile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-card-pile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShopComponent_app_card_pile_9_Template, 1, 4, "app-card-pile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basicCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx.trash)("location", "Trash")("showLocationLabel", true)("revealed", true)("orientation", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kingdomCards);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_4__["CardPileComponent"]], styles: ["#title[_ngcontent-%COMP%] {\r\n    height: 5%;\r\n    font-size: small;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    height: 95%;\r\n}\r\n\r\n#basicCards[_ngcontent-%COMP%] { \r\n    display: grid;    \r\n    grid-template-columns: repeat(8, 6%);\r\n    -moz-column-gap: 4em;\r\n         column-gap: 4em;\r\n\r\n    height: 25%;\r\n}\r\n\r\n#kingdomCards[_ngcontent-%COMP%] { \r\n    margin-top: 1px;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(5, calc(10% - 2em));\r\n    grid-template-rows: repeat(2, calc(50% - 1em));\r\n    -moz-column-gap: 10em;\r\n         column-gap: 10em;\r\n\r\n    height: 75%;\r\n}\r\n\r\napp-card-pile[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxvQkFBZTtTQUFmLGVBQWU7O0lBRWYsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELDhDQUE4QztJQUM5QyxxQkFBZ0I7U0FBaEIsZ0JBQWdCOztJQUVoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbiNiYXNpY0NhcmRzIHsgXHJcbiAgICBkaXNwbGF5OiBncmlkOyAgICBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDYlKTtcclxuICAgIGNvbHVtbi1nYXA6IDRlbTtcclxuXHJcbiAgICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuI2tpbmdkb21DYXJkcyB7IFxyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBjYWxjKDEwJSAtIDJlbSkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgY2FsYyg1MCUgLSAxZW0pKTtcclxuICAgIGNvbHVtbi1nYXA6IDEwZW07XHJcblxyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbn1cclxuXHJcbmFwcC1jYXJkLXBpbGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/status.service.ts":
/*!***********************************!*\
  !*** ./src/app/status.service.ts ***!
  \***********************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class StatusService {
    constructor() {
        this.onStatusChanged = () => {
            return this.statusSubject.asObservable();
        };
        status = '';
        this.statusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setStatus(newStatus) {
        this.status = newStatus;
        this.statusSubject.next(this.status);
    }
    getStatus() {
        return this.status;
    }
    updateStatus(game) {
        let status = '';
        const currentPlayer = game.players[game.currentPlayer];
        if (currentPlayer !== undefined) {
            status += currentPlayer.name + '\'s turn. ';
            status += currentPlayer.state + ' phase';
            this.setStatus(status);
        }
        else {
            this.setStatus('setting up game');
        }
    }
}
StatusService.ɵfac = function StatusService_Factory(t) { return new (t || StatusService)(); };
StatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatusService, factory: StatusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Colin\Desktop\Code\Dominion\WebApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map