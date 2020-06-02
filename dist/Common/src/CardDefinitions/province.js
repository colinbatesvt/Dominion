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
var victory_card_definition_1 = require("../victory-card-definition");
var Province = /** @class */ (function (_super) {
    __extends(Province, _super);
    function Province() {
        var _this = _super.call(this) || this;
        _this.cost = 8;
        _this.startingAmount = 12;
        _this.isKingdom = false;
        _this.imageName = "province.jpg";
        return _this;
    }
    Province.prototype.GetVictoryPoints = function () {
        return 6;
    };
    Province.cardName = "province";
    return Province;
}(victory_card_definition_1.VictoryCardDefinition));
exports.Province = Province;
//# sourceMappingURL=province.js.map