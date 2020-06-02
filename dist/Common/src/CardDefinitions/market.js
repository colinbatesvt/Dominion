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
var Market = /** @class */ (function (_super) {
    __extends(Market, _super);
    function Market() {
        var _this = _super.call(this) || this;
        _this.isKingdom = true;
        _this.imageName = "market.jpg";
        return _this;
    }
    Market.prototype.execute = function (game, player) {
        player.draw(1);
        player.actions++;
        player.buys++;
        player.coins++;
        game.finishExecution(this);
    };
    Market.cardName = "market";
    return Market;
}(action_card_definition_1.ActionCardDefinition));
exports.Market = Market;
//# sourceMappingURL=market.js.map