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
var Workshop = /** @class */ (function (_super) {
    __extends(Workshop, _super);
    function Workshop() {
        var _this = _super.call(this) || this;
        _this.cost = 3;
        _this.imageName = "workshop.jpg";
        return _this;
    }
    Workshop.prototype.execute = function (game, player) {
        // gain a card costing up to 4
        var selection = [];
        var gain = { location: player_1.Location.shop, isValid: function (card) {
                var library = new card_library_1.CardLibrary;
                return library.getCardDefinition(card.name).cost <= 4;
            }, count: 1 };
        selection.push(gain);
        player.pushSelection(selection, game);
        player.status = "Gain a card costing up to 4";
    };
    Workshop.prototype.onSelection = function (game, player, cards) {
        var gainCard = cards[0];
        if (game.shop[gainCard.name][0].id === gainCard.id) {
            player.gain(player_1.Location.discard, gainCard);
            game.shop[gainCard.name].splice(0, 1);
            player.popSelection();
            game.finishExecution(this);
            player.status = "";
        }
        return true;
    };
    Workshop.cardName = "workshop";
    return Workshop;
}(action_card_definition_1.ActionCardDefinition));
exports.Workshop = Workshop;
//# sourceMappingURL=workshop.js.map