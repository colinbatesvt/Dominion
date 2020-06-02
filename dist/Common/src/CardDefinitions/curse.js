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
var Curse = /** @class */ (function (_super) {
    __extends(Curse, _super);
    function Curse() {
        var _this = _super.call(this) || this;
        _this.cost = 0; // Wow, this card is free? It must be the best!
        _this.startingAmount = 30;
        _this.isKingdom = false;
        _this.imageName = "curse.jpg";
        return _this;
    }
    Curse.prototype.GetVictoryPoints = function () {
        return -1;
    };
    Curse.cardName = "curse";
    return Curse;
}(victory_card_definition_1.VictoryCardDefinition));
exports.Curse = Curse;
//# sourceMappingURL=curse.js.map