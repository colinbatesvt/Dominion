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
var Remodel = /** @class */ (function (_super) {
    __extends(Remodel, _super);
    function Remodel() {
        var _this = _super.call(this) || this;
        _this.cost = 4;
        _this.imageName = "remodel.jpg";
        _this, _this.handPick = true;
        return _this;
    }
    Remodel.prototype.execute = function (game, player) {
        // Trash a card from your hand gain a card costing up to 2 more than it
        if (player.hand.length > 0) {
            var selection = [];
            var trash = { location: player_1.Location.hand, isValid: function (card) { return true; }, count: 1 };
            selection.push(trash);
            player.pushSelection(selection, game);
            player.status = "Choose a card from your hand to trash";
            this.handPick = true;
        }
        else {
            game.finishExecution(this);
        }
    };
    Remodel.prototype.onSelection = function (game, player, cards) {
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
                var library_1 = new card_library_1.CardLibrary;
                var maxBuy_1 = library_1.getCardDefinition(trashCard.name).cost + 2;
                player.status = "Gain a card from the shop costing up to " + maxBuy_1;
                var selection = [];
                var gain = { location: player_1.Location.shop, isValid: function (card) {
                        return library_1.getCardDefinition(card.name).cost <= maxBuy_1;
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
            var gainCard = cards[0];
            //verify it's a card on top of it's shop pile
            if (game.shop[gainCard.name][0].id === gainCard.id) {
                player.gain(player_1.Location.discard, gainCard);
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
    };
    Remodel.cardName = "remodel";
    return Remodel;
}(action_card_definition_1.ActionCardDefinition));
exports.Remodel = Remodel;
//# sourceMappingURL=Remodel.js.map