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
var card_library_1 = require("../card-library");
var card_definition_1 = require("../card-definition");
var Mine = /** @class */ (function (_super) {
    __extends(Mine, _super);
    function Mine() {
        var _this = _super.call(this) || this;
        _this.cost = 5;
        _this.imageName = "mine.jpg";
        _this.handPick = true;
        return _this;
    }
    Mine.prototype.execute = function (game, player) {
        //you may trash a treasure from your hand. Gain a Treasure to your hand costing up to 3 more than it
        //check if they have a treasure card to discard
        var valid = false;
        for (var _i = 0, _a = player.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.type === card_definition_1.CardType.treasure)
                valid = true;
        }
        if (valid === true) {
            var selection = [];
            var trash = { location: player_1.Location.hand, isValid: function (card) { return card.type === card_definition_1.CardType.treasure; }, count: 1 };
            selection.push(trash);
            player.pushSelection(selection, game);
            this.handPick = true;
            player.status = "Choose a treasure card from your hand to trash";
        }
    };
    Mine.prototype.onSelection = function (game, player, cards) {
        //if this is the trash selection...
        if (this.handPick === true) {
            //selection should be a single card
            var trashCard = cards[0];
            var handIndex = -1;
            for (var i = 0; i < player.hand.length; i++) {
                var handCard = player.hand[i];
                if (handCard.id === trashCard.id) {
                    handIndex = i;
                }
            }
            if (handIndex !== -1) {
                player.hand.splice(handIndex, 1);
                game.trashCard(trashCard);
                //remove this selection, add gain selection
                player.popSelection();
                var selection = [];
                var library_1 = new card_library_1.CardLibrary;
                var maxBuy_1 = library_1.getCardDefinition(trashCard.name).cost + 3;
                var gain = { location: player_1.Location.shop, isValid: function (card) {
                        return library_1.getCardDefinition(card.name).cost <= maxBuy_1;
                    }, count: 1 };
                selection.push(gain);
                player.pushSelection(selection, game);
                this.handPick = false;
                player.status = "Gain a treasure card costing up to " + maxBuy_1;
            }
            else {
                return false;
            }
        }
        else {
            //selection should be a single card
            var gainCard = cards[0];
            //verify it's a card on top of it's shop pile
            if (game.shop[gainCard.name][0].id === gainCard.id) {
                player.gain(player_1.Location.discard, gainCard);
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
    };
    Mine.cardName = "mine";
    return Mine;
}(action_card_definition_1.ActionCardDefinition));
exports.Mine = Mine;
//# sourceMappingURL=mine.js.map