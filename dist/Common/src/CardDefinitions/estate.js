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
var Estate = /** @class */ (function (_super) {
    __extends(Estate, _super);
    function Estate() {
        var _this = _super.call(this) || this;
        _this.cost = 2;
        _this.startingAmount = 24;
        _this.isKingdom = false;
        _this.imageName = "estate.jpg";
        return _this;
    }
    Estate.prototype.GetVictoryPoints = function () {
        return 1;
    };
    Estate.cardName = "estate";
    return Estate;
}(victory_card_definition_1.VictoryCardDefinition));
exports.Estate = Estate;
//# sourceMappingURL=estate.js.map