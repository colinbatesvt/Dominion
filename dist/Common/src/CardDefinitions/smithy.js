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
var Smithy = /** @class */ (function (_super) {
    __extends(Smithy, _super);
    function Smithy() {
        var _this = _super.call(this) || this;
        _this.cost = 4;
        _this.imageName = "smithy.jpg";
        return _this;
    }
    Smithy.prototype.execute = function (game, player) {
        // + 3 cards
        player.draw(3);
        game.finishExecution(this);
    };
    Smithy.cardName = "smithy";
    return Smithy;
}(action_card_definition_1.ActionCardDefinition));
exports.Smithy = Smithy;
//# sourceMappingURL=smithy.js.map