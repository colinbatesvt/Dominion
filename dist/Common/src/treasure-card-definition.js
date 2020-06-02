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
var TreasureCardDefinition = /** @class */ (function (_super) {
    __extends(TreasureCardDefinition, _super);
    function TreasureCardDefinition() {
        var _this = _super.call(this) || this;
        _this.coinValue = 0;
        _this.cardType = card_definition_1.CardType.treasure;
        return _this;
    }
    TreasureCardDefinition.prototype.getCoinValue = function () {
        return this.coinValue;
    };
    //increase the player's coin value when the card is played
    TreasureCardDefinition.prototype.execute = function (game, player) {
        player.coins += this.getCoinValue();
        game.finishExecution(this);
    };
    return TreasureCardDefinition;
}(card_definition_1.CardDefinition));
exports.TreasureCardDefinition = TreasureCardDefinition;
//# sourceMappingURL=treasure-card-definition.js.map