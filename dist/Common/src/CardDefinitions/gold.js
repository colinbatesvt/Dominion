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
var treasure_card_definition_1 = require("../treasure-card-definition");
var Gold = /** @class */ (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        var _this = _super.call(this) || this;
        _this.coinValue = 3;
        _this.cost = 6;
        _this.startingAmount = 30;
        _this.isKingdom = false;
        _this.imageName = "gold.jpg";
        return _this;
    }
    Gold.cardName = "gold";
    return Gold;
}(treasure_card_definition_1.TreasureCardDefinition));
exports.Gold = Gold;
//# sourceMappingURL=gold.js.map