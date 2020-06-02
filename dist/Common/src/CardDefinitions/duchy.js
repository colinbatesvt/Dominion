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
var Duchy = /** @class */ (function (_super) {
    __extends(Duchy, _super);
    function Duchy() {
        var _this = _super.call(this) || this;
        _this.cost = 5;
        _this.startingAmount = 12;
        _this.isKingdom = false;
        _this.imageName = "duchy.jpg";
        return _this;
    }
    Duchy.prototype.GetVictoryPoints = function () {
        return 3;
    };
    Duchy.cardName = "duchy";
    return Duchy;
}(victory_card_definition_1.VictoryCardDefinition));
exports.Duchy = Duchy;
//# sourceMappingURL=duchy.js.map