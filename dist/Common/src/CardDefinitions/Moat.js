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
var Moat = /** @class */ (function (_super) {
    __extends(Moat, _super);
    function Moat() {
        var _this = _super.call(this) || this;
        _this.cost = 2;
        _this.subType = action_card_definition_1.SubType.reaction;
        _this.imageName = "moat.jpg";
        return _this;
    }
    Moat.prototype.execute = function (game, player) {
        // + 2 cards
        player.draw(2);
        // when another player plays an attack card you may first reveal this from your hand, to be unaffected by it.
        game.finishExecution(this);
    };
    Moat.cardName = "moat";
    return Moat;
}(action_card_definition_1.ActionCardDefinition));
exports.Moat = Moat;
//# sourceMappingURL=Moat.js.map