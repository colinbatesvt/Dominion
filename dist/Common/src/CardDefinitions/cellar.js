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
var Cellar = /** @class */ (function (_super) {
    __extends(Cellar, _super);
    function Cellar() {
        var _this = _super.call(this) || this;
        _this.cost = 2;
        _this.imageName = "cellar.jpg";
        return _this;
    }
    Cellar.prototype.execute = function (game, player) {
        // + 1 action
        player.actions++;
        //discard any number of cards, then draw that many
        var pickDiscard = { location: player_1.Location.hand, isValid: function (card) { return true; }, count: -1 };
        var selections = [];
        selections.push(pickDiscard);
        var prompts = ["discard"];
        player.pushPrompt(prompts);
        player.pushSelection(selections, game);
        player.status = "Choose any number of cards to discard";
    };
    Cellar.prototype.onPrompt = function (prompt, game, player, cards) {
        if (prompt === "discard") {
            // verify all these cards are actual cards in the user's hand
            var bAllFound = true;
            for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
                var card = cards_1[_i];
                var bFound = false;
                for (var _a = 0, _b = player.hand; _a < _b.length; _a++) {
                    var handCard = _b[_a];
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
                for (var _c = 0, cards_2 = cards; _c < cards_2.length; _c++) {
                    var card = cards_2[_c];
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
    };
    Cellar.cardName = "cellar";
    return Cellar;
}(action_card_definition_1.ActionCardDefinition));
exports.Cellar = Cellar;
//# sourceMappingURL=cellar.js.map