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
var Silver = /** @class */ (function (_super) {
    __extends(Silver, _super);
    function Silver() {
        var _this = _super.call(this) || this;
        _this.coinValue = 2;
        _this.cost = 3;
        _this.startingAmount = 40;
        _this.isKingdom = false;
        _this.imageName = "silver.jpg";
        return _this;
    }
    Silver.cardName = "silver";
    return Silver;
}(treasure_card_definition_1.TreasureCardDefinition));
exports.Silver = Silver;
//# sourceMappingURL=silver.js.map