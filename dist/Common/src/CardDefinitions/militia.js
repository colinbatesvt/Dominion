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
var action_card_definition_1 = require("../action-card-definition");
var player_1 = require("../player");
var Militia = /** @class */ (function (_super) {
    __extends(Militia, _super);
    function Militia() {
        var _this = _super.call(this) || this;
        _this.cost = 4;
        _this.subType = action_card_definition_1.SubType.attack;
        _this.imageName = "militia.jpg";
        _this.playersDone = [];
        return _this;
    }
    Militia.prototype.execute = function (game, player) {
        player.coins += 2;
        this.playersDone = [];
        //each other player discards down to 3 cards in hand
        for (var _i = 0, _a = game.players; _i < _a.length; _i++) {
            var attackedPlayer = _a[_i];
            if (attackedPlayer.name !== player.name) {
                var bImmune = false;
                for (var _b = 0, _c = attackedPlayer.hand; _b < _c.length; _b++) {
                    var card = _c[_b];
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
                        var selection = [];
                        var discard = { location: player_1.Location.hand, isValid: function (card) { return true; }, count: attackedPlayer.hand.length - 3 };
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
        var bAllDone = true;
        for (var _d = 0, _e = this.playersDone; _d < _e.length; _d++) {
            var done = _e[_d];
            if (done === false) {
                bAllDone = false;
            }
        }
        //no one to attack, clean up
        if (bAllDone)
            game.finishExecution(this);
        else
            player.status = "Waiting for other players to discard";
    };
    Militia.prototype.onSelection = function (game, player, cards) {
        //make sure everything in the selection is in that players hand
        var valid = true;
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            var found = false;
            for (var _a = 0, _b = player.hand; _a < _b.length; _a++) {
                var handCard = _b[_a];
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
            for (var _c = 0, cards_2 = cards; _c < cards_2.length; _c++) {
                var card = cards_2[_c];
                player.discardCard(card);
            }
        }
        this.playersDone[player.index] = true;
        player.popSelection();
        player.status = "";
        //see if everyone has discarded, and if they have, clean up
        var bAllDone = true;
        for (var _d = 0, _e = this.playersDone; _d < _e.length; _d++) {
            var done = _e[_d];
            if (done === false) {
                bAllDone = false;
            }
        }
        if (bAllDone) {
            game.finishExecution(this);
            game.players[game.currentPlayer].status = "";
        }
        return true;
    };
    Militia.cardName = "militia";
    return Militia;
}(action_card_definition_1.ActionCardDefinition));
exports.Militia = Militia;
//# sourceMappingURL=militia.js.map