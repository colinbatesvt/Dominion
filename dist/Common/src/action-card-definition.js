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
var SubType;
(function (SubType) {
    SubType["none"] = "none";
    SubType["attack"] = "attack";
    SubType["reaction"] = "reaction";
})(SubType = exports.SubType || (exports.SubType = {}));
var ActionCardDefinition = /** @class */ (function (_super) {
    __extends(ActionCardDefinition, _super);
    function ActionCardDefinition() {
        var _this = _super.call(this) || this;
        _this.isKingdom = true;
        _this.subType = SubType.none;
        _this.startingAmount = 10;
        _this.cardType = card_definition_1.CardType.action;
        return _this;
    }
    return ActionCardDefinition;
}(card_definition_1.CardDefinition));
exports.ActionCardDefinition = ActionCardDefinition;
//# sourceMappingURL=action-card-definition.js.map