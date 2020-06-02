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
var Copper = /** @class */ (function (_super) {
    __extends(Copper, _super);
    function Copper() {
        var _this = _super.call(this) || this;
        _this.coinValue = 1;
        _this.cost = 0;
        _this.startingAmount = 60;
        _this.isKingdom = false;
        _this.imageName = "copper.jpg";
        return _this;
    }
    Copper.cardName = "copper";
    return Copper;
}(treasure_card_definition_1.TreasureCardDefinition));
exports.Copper = Copper;
//# sourceMappingURL=copper.js.map