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
var Woodcutter = /** @class */ (function (_super) {
    __extends(Woodcutter, _super);
    function Woodcutter() {
        var _this = _super.call(this) || this;
        _this.cost = 3;
        _this.imageName = "woodcutter.jpg";
        return _this;
    }
    Woodcutter.prototype.execute = function (game, player) {
        // + 1 buy
        player.buys++;
        // + 2 coins
        player.coins += 2;
        game.finishExecution(this);
    };
    Woodcutter.cardName = "woodcutter";
    return Woodcutter;
}(action_card_definition_1.ActionCardDefinition));
exports.Woodcutter = Woodcutter;
//# sourceMappingURL=woodcutter.js.map