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
var Village = /** @class */ (function (_super) {
    __extends(Village, _super);
    function Village() {
        var _this = _super.call(this) || this;
        _this.cost = 3;
        _this.imageName = "village.jpg";
        return _this;
    }
    Village.prototype.execute = function (game, player) {
        // + 1 card
        player.draw(1);
        // + 2 actions
        player.actions += 2;
        game.finishExecution(this);
    };
    Village.cardName = "village";
    return Village;
}(action_card_definition_1.ActionCardDefinition));
exports.Village = Village;
//# sourceMappingURL=village.js.map