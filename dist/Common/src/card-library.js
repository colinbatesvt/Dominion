"use strict";
exports.__esModule = true;
var copper_1 = require("./CardDefinitions/copper");
var silver_1 = require("./CardDefinitions/silver");
var gold_1 = require("./CardDefinitions/gold");
var estate_1 = require("./CardDefinitions/estate");
var duchy_1 = require("./CardDefinitions/duchy");
var province_1 = require("./CardDefinitions/province");
var curse_1 = require("./CardDefinitions/curse");
var cellar_1 = require("./CardDefinitions/cellar");
var workshop_1 = require("./CardDefinitions/workshop");
var market_1 = require("./CardDefinitions/market");
var militia_1 = require("./CardDefinitions/militia");
var mine_1 = require("./CardDefinitions/mine");
var Moat_1 = require("./CardDefinitions/Moat");
var Remodel_1 = require("./CardDefinitions/Remodel");
var smithy_1 = require("./CardDefinitions/smithy");
var village_1 = require("./CardDefinitions/village");
var woodcutter_1 = require("./CardDefinitions/woodcutter");
var CardLibrary = /** @class */ (function () {
    function CardLibrary() {
        this.nextCardId = 0;
        this.cardIndex = {};
        // basic cards
        this.cardIndex[copper_1.Copper.cardName] = new copper_1.Copper();
        this.cardIndex[silver_1.Silver.cardName] = new silver_1.Silver();
        this.cardIndex[gold_1.Gold.cardName] = new gold_1.Gold();
        this.cardIndex[estate_1.Estate.cardName] = new estate_1.Estate();
        this.cardIndex[duchy_1.Duchy.cardName] = new duchy_1.Duchy();
        this.cardIndex[province_1.Province.cardName] = new province_1.Province();
        this.cardIndex[curse_1.Curse.cardName] = new curse_1.Curse();
        // actions
        this.cardIndex[cellar_1.Cellar.cardName] = new cellar_1.Cellar();
        this.cardIndex[market_1.Market.cardName] = new market_1.Market();
        this.cardIndex[militia_1.Militia.cardName] = new militia_1.Militia();
        this.cardIndex[mine_1.Mine.cardName] = new mine_1.Mine();
        this.cardIndex[Moat_1.Moat.cardName] = new Moat_1.Moat();
        this.cardIndex[Remodel_1.Remodel.cardName] = new Remodel_1.Remodel();
        this.cardIndex[smithy_1.Smithy.cardName] = new smithy_1.Smithy();
        this.cardIndex[village_1.Village.cardName] = new village_1.Village();
        this.cardIndex[woodcutter_1.Woodcutter.cardName] = new woodcutter_1.Woodcutter();
        this.cardIndex[workshop_1.Workshop.cardName] = new workshop_1.Workshop();
        // presets
        this.presetIndex = {};
        this.presetIndex['First Game'] = [
            cellar_1.Cellar.cardName,
            market_1.Market.cardName,
            militia_1.Militia.cardName,
            mine_1.Mine.cardName,
            Moat_1.Moat.cardName,
            Remodel_1.Remodel.cardName,
            smithy_1.Smithy.cardName,
            village_1.Village.cardName,
            woodcutter_1.Woodcutter.cardName,
            workshop_1.Workshop.cardName
        ];
    }
    CardLibrary.prototype.getAllCards = function () {
        var cards = [];
        for (var card in this.cardIndex) {
            cards.push(this.cardIndex[card].getCard(this.nextCardId));
            this.nextCardId++;
        }
        return cards;
    };
    CardLibrary.prototype.getCard = function (cardName) {
        if (this.cardIndex[cardName] !== undefined) {
            var card = this.cardIndex[cardName].getCard(this.nextCardId);
            this.nextCardId++;
            return card;
        }
        else
            return null;
    };
    CardLibrary.prototype.getCardDefinition = function (cardName) {
        return this.cardIndex[cardName];
    };
    CardLibrary.prototype.getBasicCardNames = function () {
        var cards = [];
        for (var card in this.cardIndex) {
            if (!this.cardIndex[card].isKingdom) {
                cards.push(this.cardIndex[card].getCardName());
            }
        }
        return cards;
    };
    CardLibrary.prototype.getPresetNames = function () {
        return Object.keys(this.presetIndex);
    };
    CardLibrary.prototype.getPresetCardNames = function (preset) {
        return this.presetIndex[preset];
    };
    return CardLibrary;
}());
exports.CardLibrary = CardLibrary;
//# sourceMappingURL=card-library.js.map