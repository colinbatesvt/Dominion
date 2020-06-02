function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../Common/src/CardDefinitions/Moat.ts":
  /*!*********************************************!*\
    !*** ../Common/src/CardDefinitions/Moat.ts ***!
    \*********************************************/

  /*! exports provided: Moat */

  /***/
  function CommonSrcCardDefinitionsMoatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Moat", function () {
      return Moat;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");

    var Moat = /*#__PURE__*/function (_action_card_definiti) {
      _inherits(Moat, _action_card_definiti);

      var _super = _createSuper(Moat);

      function Moat() {
        var _this;

        _classCallCheck(this, Moat);

        _this = _super.call(this);
        _this.cost = 2;
        _this.subType = _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["SubType"].reaction;
        _this.imageName = "moat.jpg";
        return _this;
      }

      _createClass(Moat, [{
        key: "execute",
        value: function execute(game, player) {
          // + 2 cards
          player.draw(2); // when another player plays an attack card you may first reveal this from your hand, to be unaffected by it.

          game.finishExecution(this);
        }
      }]);

      return Moat;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Moat.cardName = "moat";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/Remodel.ts":
  /*!************************************************!*\
    !*** ../Common/src/CardDefinitions/Remodel.ts ***!
    \************************************************/

  /*! exports provided: Remodel */

  /***/
  function CommonSrcCardDefinitionsRemodelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Remodel", function () {
      return Remodel;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../player */
    "../Common/src/player.ts");
    /* harmony import */


    var _card_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../card-library */
    "../Common/src/card-library.ts");

    var Remodel = /*#__PURE__*/function (_action_card_definiti2) {
      _inherits(Remodel, _action_card_definiti2);

      var _super2 = _createSuper(Remodel);

      function Remodel() {
        var _this2;

        _classCallCheck(this, Remodel);

        _this2 = _super2.call(this);
        _this2.cost = 4;
        _this2.imageName = "remodel.jpg";
        _assertThisInitialized(_this2), _this2.handPick = true;
        return _this2;
      }

      _createClass(Remodel, [{
        key: "execute",
        value: function execute(game, player) {
          // Trash a card from your hand gain a card costing up to 2 more than it
          if (player.hand.length > 0) {
            var selection = [];
            var trash = {
              location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand,
              isValid: function isValid(card) {
                return true;
              },
              count: 1
            };
            selection.push(trash);
            player.pushSelection(selection, game);
            player.status = "Choose a card from your hand to trash";
            this.handPick = true;
          } else {
            game.finishExecution(this);
          }
        }
      }, {
        key: "onSelection",
        value: function onSelection(game, player, cards) {
          //if this is the trash selection...
          if (this.handPick === true) {
            //selection should be a single card
            var trashCard = cards[0];
            var handIndex = -1;

            for (var i = 0; i < player.hand.length; i++) {
              var handCard = player.hand[i];

              if (handCard.id === trashCard.id) {
                handIndex = i;
              }
            }

            if (handIndex !== -1) {
              player.hand.splice(handIndex, 1);
              game.trashCard(trashCard); //remove this selection, add gain selection

              player.popSelection();
              var library = new _card_library__WEBPACK_IMPORTED_MODULE_2__["CardLibrary"]();
              var maxBuy = library.getCardDefinition(trashCard.name).cost + 2;
              player.status = "Gain a card from the shop costing up to " + maxBuy;
              var selection = [];
              var gain = {
                location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].shop,
                isValid: function isValid(card) {
                  return library.getCardDefinition(card.name).cost <= maxBuy;
                },
                count: 1
              };
              selection.push(gain);
              player.pushSelection(selection, game);
              this.handPick = false;
            } else {
              return false;
            }
          } else {
            //selection should be a single card
            var gainCard = cards[0]; //verify it's a card on top of it's shop pile

            if (game.shop[gainCard.name][0].id === gainCard.id) {
              player.gain(_player__WEBPACK_IMPORTED_MODULE_1__["Location"].discard, gainCard);
              game.shop[gainCard.name].splice(0, 1);
              player.popSelection();
              player.status = "";
              game.finishExecution(this);
            } else {
              return false;
            }
          }

          return true;
        }
      }]);

      return Remodel;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Remodel.cardName = "remodel";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/cellar.ts":
  /*!***********************************************!*\
    !*** ../Common/src/CardDefinitions/cellar.ts ***!
    \***********************************************/

  /*! exports provided: Cellar */

  /***/
  function CommonSrcCardDefinitionsCellarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cellar", function () {
      return Cellar;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../player */
    "../Common/src/player.ts");

    var Cellar = /*#__PURE__*/function (_action_card_definiti3) {
      _inherits(Cellar, _action_card_definiti3);

      var _super3 = _createSuper(Cellar);

      function Cellar() {
        var _this3;

        _classCallCheck(this, Cellar);

        _this3 = _super3.call(this);
        _this3.cost = 2;
        _this3.imageName = "cellar.jpg";
        return _this3;
      }

      _createClass(Cellar, [{
        key: "execute",
        value: function execute(game, player) {
          // + 1 action
          player.actions++; //discard any number of cards, then draw that many

          var pickDiscard = {
            location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand,
            isValid: function isValid(card) {
              return true;
            },
            count: -1
          };
          var selections = [];
          selections.push(pickDiscard);
          var prompts = ["discard"];
          player.pushPrompt(prompts);
          player.pushSelection(selections, game);
          player.status = "Choose any number of cards to discard";
        }
      }, {
        key: "onPrompt",
        value: function onPrompt(prompt, game, player, cards) {
          if (prompt === "discard") {
            // verify all these cards are actual cards in the user's hand
            var bAllFound = true;

            var _iterator = _createForOfIteratorHelper(cards),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _card = _step.value;
                var bFound = false;

                var _iterator3 = _createForOfIteratorHelper(player.hand),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var handCard = _step3.value;

                    if (_card.id === handCard.id) {
                      bFound = true;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                if (bFound !== true) bAllFound = false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (bAllFound !== true) {
              return false;
            } else {
              var _iterator2 = _createForOfIteratorHelper(cards),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var card = _step2.value;
                  player.discardCard(card);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              player.draw(cards.length);
              player.popSelection();
              player.popPrompt();
              game.finishExecution(this);
              player.status = "";
            }

            return true;
          }

          return false;
        }
      }]);

      return Cellar;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Cellar.cardName = "cellar";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/copper.ts":
  /*!***********************************************!*\
    !*** ../Common/src/CardDefinitions/copper.ts ***!
    \***********************************************/

  /*! exports provided: Copper */

  /***/
  function CommonSrcCardDefinitionsCopperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Copper", function () {
      return Copper;
    });
    /* harmony import */


    var _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../treasure-card-definition */
    "../Common/src/treasure-card-definition.ts");

    var Copper = /*#__PURE__*/function (_treasure_card_defini) {
      _inherits(Copper, _treasure_card_defini);

      var _super4 = _createSuper(Copper);

      function Copper() {
        var _this4;

        _classCallCheck(this, Copper);

        _this4 = _super4.call(this);
        _this4.coinValue = 1;
        _this4.cost = 0;
        _this4.startingAmount = 60;
        _this4.isKingdom = false;
        _this4.imageName = "copper.jpg";
        return _this4;
      }

      return Copper;
    }(_treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__["TreasureCardDefinition"]);

    Copper.cardName = "copper";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/curse.ts":
  /*!**********************************************!*\
    !*** ../Common/src/CardDefinitions/curse.ts ***!
    \**********************************************/

  /*! exports provided: Curse */

  /***/
  function CommonSrcCardDefinitionsCurseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Curse", function () {
      return Curse;
    });
    /* harmony import */


    var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../victory-card-definition */
    "../Common/src/victory-card-definition.ts");

    var Curse = /*#__PURE__*/function (_victory_card_definit) {
      _inherits(Curse, _victory_card_definit);

      var _super5 = _createSuper(Curse);

      function Curse() {
        var _this5;

        _classCallCheck(this, Curse);

        _this5 = _super5.call(this);
        _this5.cost = 0; // Wow, this card is free? It must be the best!

        _this5.startingAmount = 30;
        _this5.isKingdom = false;
        _this5.imageName = "curse.jpg";
        return _this5;
      }

      _createClass(Curse, [{
        key: "GetVictoryPoints",
        value: function GetVictoryPoints() {
          return -1;
        }
      }]);

      return Curse;
    }(_victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"]);

    Curse.cardName = "curse";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/duchy.ts":
  /*!**********************************************!*\
    !*** ../Common/src/CardDefinitions/duchy.ts ***!
    \**********************************************/

  /*! exports provided: Duchy */

  /***/
  function CommonSrcCardDefinitionsDuchyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Duchy", function () {
      return Duchy;
    });
    /* harmony import */


    var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../victory-card-definition */
    "../Common/src/victory-card-definition.ts");

    var Duchy = /*#__PURE__*/function (_victory_card_definit2) {
      _inherits(Duchy, _victory_card_definit2);

      var _super6 = _createSuper(Duchy);

      function Duchy() {
        var _this6;

        _classCallCheck(this, Duchy);

        _this6 = _super6.call(this);
        _this6.cost = 5;
        _this6.startingAmount = 12;
        _this6.isKingdom = false;
        _this6.imageName = "duchy.jpg";
        return _this6;
      }

      _createClass(Duchy, [{
        key: "GetVictoryPoints",
        value: function GetVictoryPoints() {
          return 3;
        }
      }]);

      return Duchy;
    }(_victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"]);

    Duchy.cardName = "duchy";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/estate.ts":
  /*!***********************************************!*\
    !*** ../Common/src/CardDefinitions/estate.ts ***!
    \***********************************************/

  /*! exports provided: Estate */

  /***/
  function CommonSrcCardDefinitionsEstateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estate", function () {
      return Estate;
    });
    /* harmony import */


    var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../victory-card-definition */
    "../Common/src/victory-card-definition.ts");

    var Estate = /*#__PURE__*/function (_victory_card_definit3) {
      _inherits(Estate, _victory_card_definit3);

      var _super7 = _createSuper(Estate);

      function Estate() {
        var _this7;

        _classCallCheck(this, Estate);

        _this7 = _super7.call(this);
        _this7.cost = 2;
        _this7.startingAmount = 24;
        _this7.isKingdom = false;
        _this7.imageName = "estate.jpg";
        return _this7;
      }

      _createClass(Estate, [{
        key: "GetVictoryPoints",
        value: function GetVictoryPoints() {
          return 1;
        }
      }]);

      return Estate;
    }(_victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"]);

    Estate.cardName = "estate";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/gold.ts":
  /*!*********************************************!*\
    !*** ../Common/src/CardDefinitions/gold.ts ***!
    \*********************************************/

  /*! exports provided: Gold */

  /***/
  function CommonSrcCardDefinitionsGoldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gold", function () {
      return Gold;
    });
    /* harmony import */


    var _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../treasure-card-definition */
    "../Common/src/treasure-card-definition.ts");

    var Gold = /*#__PURE__*/function (_treasure_card_defini2) {
      _inherits(Gold, _treasure_card_defini2);

      var _super8 = _createSuper(Gold);

      function Gold() {
        var _this8;

        _classCallCheck(this, Gold);

        _this8 = _super8.call(this);
        _this8.coinValue = 3;
        _this8.cost = 6;
        _this8.startingAmount = 30;
        _this8.isKingdom = false;
        _this8.imageName = "gold.jpg";
        return _this8;
      }

      return Gold;
    }(_treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__["TreasureCardDefinition"]);

    Gold.cardName = "gold";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/market.ts":
  /*!***********************************************!*\
    !*** ../Common/src/CardDefinitions/market.ts ***!
    \***********************************************/

  /*! exports provided: Market */

  /***/
  function CommonSrcCardDefinitionsMarketTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Market", function () {
      return Market;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");

    var Market = /*#__PURE__*/function (_action_card_definiti4) {
      _inherits(Market, _action_card_definiti4);

      var _super9 = _createSuper(Market);

      function Market() {
        var _this9;

        _classCallCheck(this, Market);

        _this9 = _super9.call(this);
        _this9.isKingdom = true;
        _this9.imageName = "market.jpg";
        return _this9;
      }

      _createClass(Market, [{
        key: "execute",
        value: function execute(game, player) {
          player.draw(1);
          player.actions++;
          player.buys++;
          player.coins++;
          game.finishExecution(this);
        }
      }]);

      return Market;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Market.cardName = "market";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/militia.ts":
  /*!************************************************!*\
    !*** ../Common/src/CardDefinitions/militia.ts ***!
    \************************************************/

  /*! exports provided: Militia */

  /***/
  function CommonSrcCardDefinitionsMilitiaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Militia", function () {
      return Militia;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../player */
    "../Common/src/player.ts");

    var Militia = /*#__PURE__*/function (_action_card_definiti5) {
      _inherits(Militia, _action_card_definiti5);

      var _super10 = _createSuper(Militia);

      function Militia() {
        var _this10;

        _classCallCheck(this, Militia);

        _this10 = _super10.call(this);
        _this10.cost = 4;
        _this10.subType = _action_card_definition__WEBPACK_IMPORTED_MODULE_0__["SubType"].attack;
        _this10.imageName = "militia.jpg";
        _this10.playersDone = [];
        return _this10;
      }

      _createClass(Militia, [{
        key: "execute",
        value: function execute(game, player) {
          player.coins += 2;
          this.playersDone = []; //each other player discards down to 3 cards in hand

          var _iterator4 = _createForOfIteratorHelper(game.players),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var attackedPlayer = _step4.value;

              if (attackedPlayer.name !== player.name) {
                var bImmune = false;

                var _iterator6 = _createForOfIteratorHelper(attackedPlayer.hand),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var card = _step6.value;

                    // moat immunity, this should probably be a little more generic for futre reactions, but ya know...
                    if (card.name === "moat") {
                      bImmune = true;
                      card.revealedToOthers = true;
                    }
                  } //immune, don't wait for their response

                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                if (bImmune === true) {
                  this.playersDone.push(true);
                } else {
                  //not immune, but make sure they have more than three cards to discard
                  if (attackedPlayer.hand.length > 3) {
                    this.playersDone.push(false);
                    var selection = [];
                    var discard = {
                      location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand,
                      isValid: function isValid(card) {
                        return true;
                      },
                      count: attackedPlayer.hand.length - 3
                    };
                    selection.push(discard);
                    attackedPlayer.pushSelection(selection, game);
                    attackedPlayer.status = "Discard down to 3 cards.";
                  }
                }
              } else {
                this.playersDone.push(true);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          var bAllDone = true;

          var _iterator5 = _createForOfIteratorHelper(this.playersDone),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var done = _step5.value;

              if (done === false) {
                bAllDone = false;
              }
            } //no one to attack, clean up

          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (bAllDone) game.finishExecution(this);else player.status = "Waiting for other players to discard";
        }
      }, {
        key: "onSelection",
        value: function onSelection(game, player, cards) {
          //make sure everything in the selection is in that players hand
          var valid = true;

          var _iterator7 = _createForOfIteratorHelper(cards),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _card2 = _step7.value;
              var found = false;

              var _iterator10 = _createForOfIteratorHelper(player.hand),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var handCard = _step10.value;

                  if (_card2.id === handCard.id) {
                    found = true;
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              if (found === false) {
                valid = false;
              }
            } //if the selection was valid, discard the selected cards

          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          if (valid === false) return false;else {
            var _iterator8 = _createForOfIteratorHelper(cards),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var card = _step8.value;
                player.discardCard(card);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
          this.playersDone[player.index] = true;
          player.popSelection();
          player.status = ""; //see if everyone has discarded, and if they have, clean up

          var bAllDone = true;

          var _iterator9 = _createForOfIteratorHelper(this.playersDone),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var done = _step9.value;

              if (done === false) {
                bAllDone = false;
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          if (bAllDone) {
            game.finishExecution(this);
            game.players[game.currentPlayer].status = "";
          }

          return true;
        }
      }]);

      return Militia;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Militia.cardName = "militia";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/mine.ts":
  /*!*********************************************!*\
    !*** ../Common/src/CardDefinitions/mine.ts ***!
    \*********************************************/

  /*! exports provided: Mine */

  /***/
  function CommonSrcCardDefinitionsMineTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mine", function () {
      return Mine;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../player */
    "../Common/src/player.ts");
    /* harmony import */


    var _card_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../card-library */
    "../Common/src/card-library.ts");
    /* harmony import */


    var _card_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../card-definition */
    "../Common/src/card-definition.ts");

    var Mine = /*#__PURE__*/function (_action_card_definiti6) {
      _inherits(Mine, _action_card_definiti6);

      var _super11 = _createSuper(Mine);

      function Mine() {
        var _this11;

        _classCallCheck(this, Mine);

        _this11 = _super11.call(this);
        _this11.cost = 5;
        _this11.imageName = "mine.jpg";
        _this11.handPick = true;
        return _this11;
      }

      _createClass(Mine, [{
        key: "execute",
        value: function execute(game, player) {
          //you may trash a treasure from your hand. Gain a Treasure to your hand costing up to 3 more than it
          //check if they have a treasure card to discard
          var valid = false;

          var _iterator11 = _createForOfIteratorHelper(player.hand),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var card = _step11.value;
              if (card.type === _card_definition__WEBPACK_IMPORTED_MODULE_3__["CardType"].treasure) valid = true;
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          if (valid === true) {
            var selection = [];
            var trash = {
              location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].hand,
              isValid: function isValid(card) {
                return card.type === _card_definition__WEBPACK_IMPORTED_MODULE_3__["CardType"].treasure;
              },
              count: 1
            };
            selection.push(trash);
            player.pushSelection(selection, game);
            this.handPick = true;
            player.status = "Choose a treasure card from your hand to trash";
          }
        }
      }, {
        key: "onSelection",
        value: function onSelection(game, player, cards) {
          //if this is the trash selection...
          if (this.handPick === true) {
            //selection should be a single card
            var trashCard = cards[0];
            var handIndex = -1;

            for (var i = 0; i < player.hand.length; i++) {
              var handCard = player.hand[i];

              if (handCard.id === trashCard.id) {
                handIndex = i;
              }
            }

            if (handIndex !== -1) {
              player.hand.splice(handIndex, 1);
              game.trashCard(trashCard); //remove this selection, add gain selection

              player.popSelection();
              var selection = [];
              var library = new _card_library__WEBPACK_IMPORTED_MODULE_2__["CardLibrary"]();
              var maxBuy = library.getCardDefinition(trashCard.name).cost + 3;
              var gain = {
                location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].shop,
                isValid: function isValid(card) {
                  return library.getCardDefinition(card.name).cost <= maxBuy;
                },
                count: 1
              };
              selection.push(gain);
              player.pushSelection(selection, game);
              this.handPick = false;
              player.status = "Gain a treasure card costing up to " + maxBuy;
            } else {
              return false;
            }
          } else {
            //selection should be a single card
            var gainCard = cards[0]; //verify it's a card on top of it's shop pile

            if (game.shop[gainCard.name][0].id === gainCard.id) {
              player.gain(_player__WEBPACK_IMPORTED_MODULE_1__["Location"].discard, gainCard);
              game.shop[gainCard.name].splice(0, 1);
              player.popSelection();
              game.finishExecution(this);
              player.status = "";
            } else {
              return false;
            }
          }

          return true;
        }
      }]);

      return Mine;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Mine.cardName = "mine";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/province.ts":
  /*!*************************************************!*\
    !*** ../Common/src/CardDefinitions/province.ts ***!
    \*************************************************/

  /*! exports provided: Province */

  /***/
  function CommonSrcCardDefinitionsProvinceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Province", function () {
      return Province;
    });
    /* harmony import */


    var _victory_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../victory-card-definition */
    "../Common/src/victory-card-definition.ts");

    var Province = /*#__PURE__*/function (_victory_card_definit4) {
      _inherits(Province, _victory_card_definit4);

      var _super12 = _createSuper(Province);

      function Province() {
        var _this12;

        _classCallCheck(this, Province);

        _this12 = _super12.call(this);
        _this12.cost = 8;
        _this12.startingAmount = 12;
        _this12.isKingdom = false;
        _this12.imageName = "province.jpg";
        return _this12;
      }

      _createClass(Province, [{
        key: "GetVictoryPoints",
        value: function GetVictoryPoints() {
          return 6;
        }
      }]);

      return Province;
    }(_victory_card_definition__WEBPACK_IMPORTED_MODULE_0__["VictoryCardDefinition"]);

    Province.cardName = "province";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/silver.ts":
  /*!***********************************************!*\
    !*** ../Common/src/CardDefinitions/silver.ts ***!
    \***********************************************/

  /*! exports provided: Silver */

  /***/
  function CommonSrcCardDefinitionsSilverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Silver", function () {
      return Silver;
    });
    /* harmony import */


    var _treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../treasure-card-definition */
    "../Common/src/treasure-card-definition.ts");

    var Silver = /*#__PURE__*/function (_treasure_card_defini3) {
      _inherits(Silver, _treasure_card_defini3);

      var _super13 = _createSuper(Silver);

      function Silver() {
        var _this13;

        _classCallCheck(this, Silver);

        _this13 = _super13.call(this);
        _this13.coinValue = 2;
        _this13.cost = 3;
        _this13.startingAmount = 40;
        _this13.isKingdom = false;
        _this13.imageName = "silver.jpg";
        return _this13;
      }

      return Silver;
    }(_treasure_card_definition__WEBPACK_IMPORTED_MODULE_0__["TreasureCardDefinition"]);

    Silver.cardName = "silver";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/smithy.ts":
  /*!***********************************************!*\
    !*** ../Common/src/CardDefinitions/smithy.ts ***!
    \***********************************************/

  /*! exports provided: Smithy */

  /***/
  function CommonSrcCardDefinitionsSmithyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Smithy", function () {
      return Smithy;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");

    var Smithy = /*#__PURE__*/function (_action_card_definiti7) {
      _inherits(Smithy, _action_card_definiti7);

      var _super14 = _createSuper(Smithy);

      function Smithy() {
        var _this14;

        _classCallCheck(this, Smithy);

        _this14 = _super14.call(this);
        _this14.cost = 4;
        _this14.imageName = "smithy.jpg";
        return _this14;
      }

      _createClass(Smithy, [{
        key: "execute",
        value: function execute(game, player) {
          // + 3 cards
          player.draw(3);
          game.finishExecution(this);
        }
      }]);

      return Smithy;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Smithy.cardName = "smithy";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/village.ts":
  /*!************************************************!*\
    !*** ../Common/src/CardDefinitions/village.ts ***!
    \************************************************/

  /*! exports provided: Village */

  /***/
  function CommonSrcCardDefinitionsVillageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Village", function () {
      return Village;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");

    var Village = /*#__PURE__*/function (_action_card_definiti8) {
      _inherits(Village, _action_card_definiti8);

      var _super15 = _createSuper(Village);

      function Village() {
        var _this15;

        _classCallCheck(this, Village);

        _this15 = _super15.call(this);
        _this15.cost = 3;
        _this15.imageName = "village.jpg";
        return _this15;
      }

      _createClass(Village, [{
        key: "execute",
        value: function execute(game, player) {
          // + 1 card
          player.draw(1); // + 2 actions

          player.actions += 2;
          game.finishExecution(this);
        }
      }]);

      return Village;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Village.cardName = "village";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/woodcutter.ts":
  /*!***************************************************!*\
    !*** ../Common/src/CardDefinitions/woodcutter.ts ***!
    \***************************************************/

  /*! exports provided: Woodcutter */

  /***/
  function CommonSrcCardDefinitionsWoodcutterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Woodcutter", function () {
      return Woodcutter;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");

    var Woodcutter = /*#__PURE__*/function (_action_card_definiti9) {
      _inherits(Woodcutter, _action_card_definiti9);

      var _super16 = _createSuper(Woodcutter);

      function Woodcutter() {
        var _this16;

        _classCallCheck(this, Woodcutter);

        _this16 = _super16.call(this);
        _this16.cost = 3;
        _this16.imageName = "woodcutter.jpg";
        return _this16;
      }

      _createClass(Woodcutter, [{
        key: "execute",
        value: function execute(game, player) {
          // + 1 buy
          player.buys++; // + 2 coins

          player.coins += 2;
          game.finishExecution(this);
        }
      }]);

      return Woodcutter;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Woodcutter.cardName = "woodcutter";
    /***/
  },

  /***/
  "../Common/src/CardDefinitions/workshop.ts":
  /*!*************************************************!*\
    !*** ../Common/src/CardDefinitions/workshop.ts ***!
    \*************************************************/

  /*! exports provided: Workshop */

  /***/
  function CommonSrcCardDefinitionsWorkshopTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Workshop", function () {
      return Workshop;
    });
    /* harmony import */


    var _action_card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../action-card-definition */
    "../Common/src/action-card-definition.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../player */
    "../Common/src/player.ts");
    /* harmony import */


    var _card_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../card-library */
    "../Common/src/card-library.ts");

    var Workshop = /*#__PURE__*/function (_action_card_definiti10) {
      _inherits(Workshop, _action_card_definiti10);

      var _super17 = _createSuper(Workshop);

      function Workshop() {
        var _this17;

        _classCallCheck(this, Workshop);

        _this17 = _super17.call(this);
        _this17.cost = 3;
        _this17.imageName = "workshop.jpg";
        return _this17;
      }

      _createClass(Workshop, [{
        key: "execute",
        value: function execute(game, player) {
          // gain a card costing up to 4
          var selection = [];
          var gain = {
            location: _player__WEBPACK_IMPORTED_MODULE_1__["Location"].shop,
            isValid: function isValid(card) {
              var library = new _card_library__WEBPACK_IMPORTED_MODULE_2__["CardLibrary"]();
              return library.getCardDefinition(card.name).cost <= 4;
            },
            count: 1
          };
          selection.push(gain);
          player.pushSelection(selection, game);
          player.status = "Gain a card costing up to 4";
        }
      }, {
        key: "onSelection",
        value: function onSelection(game, player, cards) {
          var gainCard = cards[0];

          if (game.shop[gainCard.name][0].id === gainCard.id) {
            player.gain(_player__WEBPACK_IMPORTED_MODULE_1__["Location"].discard, gainCard);
            game.shop[gainCard.name].splice(0, 1);
            player.popSelection();
            game.finishExecution(this);
            player.status = "";
          }

          return true;
        }
      }]);

      return Workshop;
    }(_action_card_definition__WEBPACK_IMPORTED_MODULE_0__["ActionCardDefinition"]);

    Workshop.cardName = "workshop";
    /***/
  },

  /***/
  "../Common/src/action-card-definition.ts":
  /*!***********************************************!*\
    !*** ../Common/src/action-card-definition.ts ***!
    \***********************************************/

  /*! exports provided: SubType, ActionCardDefinition */

  /***/
  function CommonSrcActionCardDefinitionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubType", function () {
      return SubType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionCardDefinition", function () {
      return ActionCardDefinition;
    });
    /* harmony import */


    var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./card-definition */
    "../Common/src/card-definition.ts");

    var SubType;

    (function (SubType) {
      SubType["none"] = "none";
      SubType["attack"] = "attack";
      SubType["reaction"] = "reaction";
    })(SubType || (SubType = {}));

    var ActionCardDefinition = /*#__PURE__*/function (_card_definition__WEB) {
      _inherits(ActionCardDefinition, _card_definition__WEB);

      var _super18 = _createSuper(ActionCardDefinition);

      function ActionCardDefinition() {
        var _this18;

        _classCallCheck(this, ActionCardDefinition);

        _this18 = _super18.call(this);
        _this18.isKingdom = true;
        _this18.subType = SubType.none;
        _this18.startingAmount = 10;
        _this18.cardType = _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].action;
        return _this18;
      }

      return ActionCardDefinition;
    }(_card_definition__WEBPACK_IMPORTED_MODULE_0__["CardDefinition"]);
    /***/

  },

  /***/
  "../Common/src/card-definition.ts":
  /*!****************************************!*\
    !*** ../Common/src/card-definition.ts ***!
    \****************************************/

  /*! exports provided: CardType, CardDefinition */

  /***/
  function CommonSrcCardDefinitionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardType", function () {
      return CardType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDefinition", function () {
      return CardDefinition;
    });

    var CardType;

    (function (CardType) {
      CardType[CardType["any"] = 0] = "any";
      CardType[CardType["action"] = 1] = "action";
      CardType[CardType["victory"] = 2] = "victory";
      CardType[CardType["treasure"] = 3] = "treasure";
    })(CardType || (CardType = {}));

    ;

    var CardDefinition = /*#__PURE__*/function () {
      function CardDefinition() {
        _classCallCheck(this, CardDefinition);

        this.imageName = "";
        this.cost = 0;
        this.startingAmount = 0;
        this.isKingdom = true;
        this.cardType = CardType.action;
      }

      _createClass(CardDefinition, [{
        key: "getCard",
        value: function getCard(id) {
          var card = {
            id: id,
            imageName: this.GetImageName(),
            name: this.constructor.cardName,
            isKingdom: this.isKingdom,
            type: this.cardType,
            revealedToOthers: false
          };
          return card;
        }
      }, {
        key: "getCardName",
        value: function getCardName() {
          return this.constructor.cardName;
        }
      }, {
        key: "GetImageName",
        value: function GetImageName() {
          return this.imageName;
        } //execute the card's behaviour, this should be overriden by concrete subclasses that have behaviour on the card being played

      }, {
        key: "execute",
        value: function execute(game, player) {} //for cards that require the user to select something, they can override this

      }, {
        key: "onSelection",
        value: function onSelection(game, player, cards) {
          return true;
        }
      }, {
        key: "onPrompt",
        value: function onPrompt(prompt, game, player, cards) {
          return true;
        }
      }]);

      return CardDefinition;
    }();
    /***/

  },

  /***/
  "../Common/src/card-library.ts":
  /*!*************************************!*\
    !*** ../Common/src/card-library.ts ***!
    \*************************************/

  /*! exports provided: CardLibrary */

  /***/
  function CommonSrcCardLibraryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardLibrary", function () {
      return CardLibrary;
    });
    /* harmony import */


    var _CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./CardDefinitions/copper */
    "../Common/src/CardDefinitions/copper.ts");
    /* harmony import */


    var _CardDefinitions_silver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./CardDefinitions/silver */
    "../Common/src/CardDefinitions/silver.ts");
    /* harmony import */


    var _CardDefinitions_gold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./CardDefinitions/gold */
    "../Common/src/CardDefinitions/gold.ts");
    /* harmony import */


    var _CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./CardDefinitions/estate */
    "../Common/src/CardDefinitions/estate.ts");
    /* harmony import */


    var _CardDefinitions_duchy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./CardDefinitions/duchy */
    "../Common/src/CardDefinitions/duchy.ts");
    /* harmony import */


    var _CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./CardDefinitions/province */
    "../Common/src/CardDefinitions/province.ts");
    /* harmony import */


    var _CardDefinitions_curse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./CardDefinitions/curse */
    "../Common/src/CardDefinitions/curse.ts");
    /* harmony import */


    var _CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./CardDefinitions/cellar */
    "../Common/src/CardDefinitions/cellar.ts");
    /* harmony import */


    var _CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./CardDefinitions/workshop */
    "../Common/src/CardDefinitions/workshop.ts");
    /* harmony import */


    var _CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./CardDefinitions/market */
    "../Common/src/CardDefinitions/market.ts");
    /* harmony import */


    var _CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./CardDefinitions/militia */
    "../Common/src/CardDefinitions/militia.ts");
    /* harmony import */


    var _CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./CardDefinitions/mine */
    "../Common/src/CardDefinitions/mine.ts");
    /* harmony import */


    var _CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./CardDefinitions/Moat */
    "../Common/src/CardDefinitions/Moat.ts");
    /* harmony import */


    var _CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./CardDefinitions/Remodel */
    "../Common/src/CardDefinitions/Remodel.ts");
    /* harmony import */


    var _CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./CardDefinitions/smithy */
    "../Common/src/CardDefinitions/smithy.ts");
    /* harmony import */


    var _CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./CardDefinitions/village */
    "../Common/src/CardDefinitions/village.ts");
    /* harmony import */


    var _CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./CardDefinitions/woodcutter */
    "../Common/src/CardDefinitions/woodcutter.ts");

    var CardLibrary = /*#__PURE__*/function () {
      function CardLibrary() {
        _classCallCheck(this, CardLibrary);

        this.nextCardId = 0;
        this.cardIndex = {}; // basic cards

        this.cardIndex[_CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_0__["Copper"].cardName] = new _CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_0__["Copper"]();
        this.cardIndex[_CardDefinitions_silver__WEBPACK_IMPORTED_MODULE_1__["Silver"].cardName] = new _CardDefinitions_silver__WEBPACK_IMPORTED_MODULE_1__["Silver"]();
        this.cardIndex[_CardDefinitions_gold__WEBPACK_IMPORTED_MODULE_2__["Gold"].cardName] = new _CardDefinitions_gold__WEBPACK_IMPORTED_MODULE_2__["Gold"]();
        this.cardIndex[_CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__["Estate"].cardName] = new _CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__["Estate"]();
        this.cardIndex[_CardDefinitions_duchy__WEBPACK_IMPORTED_MODULE_4__["Duchy"].cardName] = new _CardDefinitions_duchy__WEBPACK_IMPORTED_MODULE_4__["Duchy"]();
        this.cardIndex[_CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"].cardName] = new _CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"]();
        this.cardIndex[_CardDefinitions_curse__WEBPACK_IMPORTED_MODULE_6__["Curse"].cardName] = new _CardDefinitions_curse__WEBPACK_IMPORTED_MODULE_6__["Curse"](); // actions

        this.cardIndex[_CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__["Cellar"].cardName] = new _CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__["Cellar"]();
        this.cardIndex[_CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__["Market"].cardName] = new _CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__["Market"]();
        this.cardIndex[_CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__["Militia"].cardName] = new _CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__["Militia"]();
        this.cardIndex[_CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__["Mine"].cardName] = new _CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__["Mine"]();
        this.cardIndex[_CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__["Moat"].cardName] = new _CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__["Moat"]();
        this.cardIndex[_CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__["Remodel"].cardName] = new _CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__["Remodel"]();
        this.cardIndex[_CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__["Smithy"].cardName] = new _CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__["Smithy"]();
        this.cardIndex[_CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__["Village"].cardName] = new _CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__["Village"]();
        this.cardIndex[_CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__["Woodcutter"].cardName] = new _CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__["Woodcutter"]();
        this.cardIndex[_CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__["Workshop"].cardName] = new _CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__["Workshop"](); // presets

        this.presetIndex = {};
        this.presetIndex['First Game'] = [_CardDefinitions_cellar__WEBPACK_IMPORTED_MODULE_7__["Cellar"].cardName, _CardDefinitions_market__WEBPACK_IMPORTED_MODULE_9__["Market"].cardName, _CardDefinitions_militia__WEBPACK_IMPORTED_MODULE_10__["Militia"].cardName, _CardDefinitions_mine__WEBPACK_IMPORTED_MODULE_11__["Mine"].cardName, _CardDefinitions_Moat__WEBPACK_IMPORTED_MODULE_12__["Moat"].cardName, _CardDefinitions_Remodel__WEBPACK_IMPORTED_MODULE_13__["Remodel"].cardName, _CardDefinitions_smithy__WEBPACK_IMPORTED_MODULE_14__["Smithy"].cardName, _CardDefinitions_village__WEBPACK_IMPORTED_MODULE_15__["Village"].cardName, _CardDefinitions_woodcutter__WEBPACK_IMPORTED_MODULE_16__["Woodcutter"].cardName, _CardDefinitions_workshop__WEBPACK_IMPORTED_MODULE_8__["Workshop"].cardName];
      }

      _createClass(CardLibrary, [{
        key: "getAllCards",
        value: function getAllCards() {
          var cards = [];

          for (var card in this.cardIndex) {
            cards.push(this.cardIndex[card].getCard(this.nextCardId));
            this.nextCardId++;
          }

          return cards;
        }
      }, {
        key: "getCard",
        value: function getCard(cardName) {
          if (this.cardIndex[cardName] !== undefined) {
            var card = this.cardIndex[cardName].getCard(this.nextCardId);
            this.nextCardId++;
            return card;
          } else return null;
        }
      }, {
        key: "getCardDefinition",
        value: function getCardDefinition(cardName) {
          return this.cardIndex[cardName];
        }
      }, {
        key: "getBasicCardNames",
        value: function getBasicCardNames() {
          var cards = [];

          for (var card in this.cardIndex) {
            if (!this.cardIndex[card].isKingdom) {
              cards.push(this.cardIndex[card].getCardName());
            }
          }

          return cards;
        }
      }, {
        key: "getPresetNames",
        value: function getPresetNames() {
          return Object.keys(this.presetIndex);
        }
      }, {
        key: "getPresetCardNames",
        value: function getPresetCardNames(preset) {
          return this.presetIndex[preset];
        }
      }]);

      return CardLibrary;
    }();
    /***/

  },

  /***/
  "../Common/src/game.ts":
  /*!*****************************!*\
    !*** ../Common/src/game.ts ***!
    \*****************************/

  /*! exports provided: GameState, Game */

  /***/
  function CommonSrcGameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameState", function () {
      return GameState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Game", function () {
      return Game;
    });
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./player */
    "../Common/src/player.ts");
    /* harmony import */


    var _card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card-library */
    "../Common/src/card-library.ts");
    /* harmony import */


    var _card_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./card-definition */
    "../Common/src/card-definition.ts");
    /* harmony import */


    var _CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./CardDefinitions/estate */
    "../Common/src/CardDefinitions/estate.ts");
    /* harmony import */


    var _CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./CardDefinitions/copper */
    "../Common/src/CardDefinitions/copper.ts");
    /* harmony import */


    var _CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./CardDefinitions/province */
    "../Common/src/CardDefinitions/province.ts");

    var GameState;

    (function (GameState) {
      GameState["Setup"] = "setup";
      GameState["PlayGame"] = "play";
      GameState["GameOver"] = "over";
    })(GameState || (GameState = {}));

    ;

    var Game = /*#__PURE__*/function () {
      function Game(gameName, serverCallback) {
        _classCallCheck(this, Game);

        this.name = gameName;
        this.state = GameState.Setup;
        this.players = [];
        this.currentPlayer = -1;
        this.shop = {};
        this.trash = [];
        this.setupSelectedCards = [];
        this.setupPreset = '';
        this.library = new _card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"]();
        this.executingCards = [];
      }

      _createClass(Game, [{
        key: "setGameState",
        value: function setGameState(newState) {
          this.state = newState;
        }
      }, {
        key: "removePlayer",
        value: function removePlayer(remove) {
          var index = this.players.indexOf(remove);
          this.players.splice(index, 1);
        } // does this game have any active players

      }, {
        key: "hasNoActivePlayers",
        value: function hasNoActivePlayers() {
          var noActivePlayers = true;

          var _iterator12 = _createForOfIteratorHelper(this.players),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var player = _step12.value;

              if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                var humanPlayer = player;
                if (humanPlayer.connected) noActivePlayers = false;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          return noActivePlayers;
        }
      }, {
        key: "findPlayerById",
        value: function findPlayerById(socketId) {
          var _iterator13 = _createForOfIteratorHelper(this.players),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var player = _step13.value;

              if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                var humanPlayer = player;
                if (humanPlayer.socketId === socketId) return player;
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          return undefined;
        }
      }, {
        key: "findPlayerByName",
        value: function findPlayerByName(playerName) {
          var _iterator14 = _createForOfIteratorHelper(this.players),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var player = _step14.value;
              if (player.name === playerName) return player;
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          return undefined;
        } //returns an error message or blank string on success

      }, {
        key: "playerJoin",
        value: function playerJoin(playerName, playerColor, socketId) {
          // check for reconnect
          var _iterator15 = _createForOfIteratorHelper(this.players),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var player = _step15.value;

              if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                var humanPlayer = player;

                if (humanPlayer.name === playerName) {
                  if (humanPlayer.connected !== true) {
                    humanPlayer.socketId = socketId;
                    humanPlayer.SetConnected(true);
                    console.log(humanPlayer.name + ' reconnected. Socket ID = ' + socketId);
                    return "";
                  }
                }
              }
            } //game better not be already going

          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          if (this.state !== GameState.Setup) {
            return "Unable to join game, game is already in progress";
          } //only 4 players  in dominion


          if (this.players.length >= 4) {
            return "Unable to join game, player limit reached";
          }

          var _iterator16 = _createForOfIteratorHelper(this.players),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _player = _step16.value;

              //player names have to be unique
              if (_player.name === playerName) {
                return "There is already a player in the selected game with that name";
              } // player colors have to be unique


              if (_player.color === playerColor) {
                return "There is already a player in the selected game with that favorite color";
              }
            } //we got past all the checks, let the new guy in

          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          var newPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"](playerName, playerColor, socketId, this.players.length);
          this.players.push(newPlayer);
          return "";
        }
      }, {
        key: "playerLeave",
        value: function playerLeave(playerIndex) {
          if (playerIndex < this.players.length) {
            this.players.splice(playerIndex, 1);
          } else {
            return "invalid index";
          }

          return "";
        } //returns an error message or blank string on success

      }, {
        key: "addBot",
        value: function addBot(botName) {
          //disable bots for now, getting this to work with socketio is going to be complicated
          return "";
          /*
          const foundPlayer: Player | undefined = this.findPlayerByName(botName);
            //name needs to be unique
          if(foundPlayer !== undefined)
          {
             return "there is already a player in the game with that name";
          }
            //game better not be already going
          if(this.state !== GameState.Setup)
          {
              return "Unable to join game, game is already in progress";
          }
            //only 4 players  in dominion
          if(this.players.length >= 4)
          {
              return "Unable to join game, player limit reached";
          }
            let bColorTaken = true;
          let color: string = "";
          while(bColorTaken)
          {
              color = this.getRandomColor();
              for(const player of this.players)
              {
                  // color is taken, find a different one
                  if(player.color === color)
                      continue;
              }
              bColorTaken = false;
          }
            const bot: AIPlayer = new AIPlayer(botName, color, this.players.length, this);
          this.players.push(bot);
          console.log("added bot: " + botName);
          return "";
          */
        }
      }, {
        key: "getRandomColor",
        value: function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';

          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }

          return color;
        } // keep track of which cards are selected during the setup step

      }, {
        key: "setupSelectCard",
        value: function setupSelectCard(cardName) {
          // select a card, or deselect it if it's already selected
          var index = this.setupSelectedCards.indexOf(cardName);

          if (index == -1) {
            // only 10 kingdom cards can be selected at a time
            if (this.setupSelectedCards.length < 10) {
              this.setupSelectedCards.push(cardName); // once you change the selected cards, that preset is no longer selected

              this.setupPreset = '';
            }
          } else {
            this.setupSelectedCards.splice(index, 1); // once you change the selected cards, that preset is no longer selected

            this.setupPreset = '';
          }
        }
      }, {
        key: "setupSelectPreset",
        value: function setupSelectPreset(presetName) {
          var presetCardNames = this.library.getPresetCardNames(presetName);

          if (presetCardNames !== undefined) {
            this.setupPreset = presetName;
            this.setupSelectedCards = [];

            var _iterator17 = _createForOfIteratorHelper(presetCardNames),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var cardName = _step17.value;
                this.setupSelectedCards.push(cardName);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            return true;
          }

          return false;
        } // toggle whether the player is ready or not

      }, {
        key: "setupPlayerReady",
        value: function setupPlayerReady(playerName) {
          var player = this.findPlayerByName(playerName);

          if (player !== undefined) {
            if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
              var humanPlayer = player;
              humanPlayer.setupReady = !player.setupReady;
            }

            return true;
          } else return false;
        }
      }, {
        key: "setupStartGame",
        value: function setupStartGame() {
          // all humasn players must be ready
          var _iterator18 = _createForOfIteratorHelper(this.players),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var player = _step18.value;

              if (player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) {
                var humanPlayer = player;
                if (humanPlayer.setupReady === false) return false;
              }
            } // we need 10 kingdom cards

          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          if (this.setupSelectedCards.length !== 10) return false; // time to setup the game!
          // distribute cards to the shop

          var basicCards = this.library.getBasicCardNames();

          var _iterator19 = _createForOfIteratorHelper(basicCards),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var basicCard = _step19.value;
              this.shop[basicCard] = [];
              var definition = this.library.getCardDefinition(basicCard);

              for (var i = 0; i < definition.startingAmount; i++) {
                var newCard = this.library.getCard(basicCard);
                if (newCard !== null) this.shop[basicCard].push(newCard);
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          var _iterator20 = _createForOfIteratorHelper(this.setupSelectedCards),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var kingdomCard = _step20.value;
              this.shop[kingdomCard] = [];

              var _definition = this.library.getCardDefinition(kingdomCard);

              for (var _i = 0; _i < _definition.startingAmount; _i++) {
                var _newCard = this.library.getCard(kingdomCard);

                if (_newCard !== null) this.shop[kingdomCard].push(_newCard);
              }
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          var _iterator21 = _createForOfIteratorHelper(this.players),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _player2 = _step21.value;

              //add 3 estates
              for (var _i2 = 0; _i2 < 3; _i2++) {
                var estate = this.shop[_CardDefinitions_estate__WEBPACK_IMPORTED_MODULE_3__["Estate"].cardName].pop();

                if (estate !== undefined) {
                  _player2.gain(_player__WEBPACK_IMPORTED_MODULE_0__["Location"].deck, estate);
                }
              } //add 7 coppers


              for (var _i3 = 0; _i3 < 7; _i3++) {
                var _estate = this.shop[_CardDefinitions_copper__WEBPACK_IMPORTED_MODULE_4__["Copper"].cardName].pop();

                if (_estate !== undefined) {
                  _player2.gain(_player__WEBPACK_IMPORTED_MODULE_0__["Location"].deck, _estate);
                }
              } // now that we have our starting deck, shuffle and draw 5


              _player2.shuffle();

              _player2.draw(5);
            } // pick a starting player

          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }

          this.currentPlayer = Math.floor(Math.random() * this.players.length);
          this.players[this.currentPlayer].actions = 1;
          this.players[this.currentPlayer].buys = 1;
          this.players[this.currentPlayer].coins = 0;

          this.shop[_CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"].cardName].splice(1, 8);
          /* for testing game over
          for(const player of this.players)
          {
              const victoryCards = Math.floor(Math.random() * 10);
              for(let i = 0; i < victoryCards; i++)
              {
                  const card: Card | null = this.library.getCard("estate");
                  if(card !== null)
                  {
                      player.deck.push(card);
                  }
              }
          }
          */


          this.setGameState(GameState.PlayGame);
          return true;
        }
      }, {
        key: "trashCard",
        value: function trashCard(card) {
          this.trash.unshift(card);
        }
      }, {
        key: "advanceGame",
        value: function advanceGame() {
          var waitingForPlayer = false;

          while (waitingForPlayer === false) {
            var currentPlayer = this.players[this.currentPlayer]; //get ready of anything currently executing

            for (var i = this.executingCards.length - 1; i >= 0; i--) {
              var card = this.executingCards[i];
              this.finishExecution(card);
            } // they are still waiting, give them something to do


            if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].WaitingForTurn) {
              currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action, this);
            } else if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action) {
              currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Buy, this);
            } else if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Buy) {
              currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].CleanUp, this);
            } else if (currentPlayer.state === _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].CleanUp) {
              //nothing for user/AI to do, just auto clean up
              currentPlayer.cleanUp();
              currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].WaitingForTurn, this);
              this.currentPlayer = (this.currentPlayer + 1) % this.players.length; // after clean up, move to the next player

              currentPlayer = this.players[this.currentPlayer]; //you get 1 action, 1 buy, and no coins to start your turn

              currentPlayer.setState(_player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action, this);
              currentPlayer.actions = 1;
              currentPlayer.buys = 1;
              currentPlayer.coins = 0;
            }

            currentPlayer.addStateActions(this); //if we need to wait for huiman action, get out of here

            if (currentPlayer.userSelections.length > 0 && currentPlayer instanceof _player__WEBPACK_IMPORTED_MODULE_0__["HumanPlayer"]) waitingForPlayer = true;
          }
        }
      }, {
        key: "checkGameOver",
        value: function checkGameOver() {
          var gameOver = false;
          if (this.shop[_CardDefinitions_province__WEBPACK_IMPORTED_MODULE_5__["Province"].cardName].length === 0) gameOver = true;else {
            var empty = 0;

            for (var card in this.shop) {
              if (this.shop[card].length === 0) empty++;
            }

            if (empty >= 3) gameOver = true;
          }
          return gameOver;
        } //a player chose something, decide what to do with it

      }, {
        key: "onCardsSelected",
        value: function onCardsSelected(playerIndex, cards) {
          var player = this.players[playerIndex];
          var validSelection = false;
          var currentSelections = player.userSelections[player.userSelections.length - 1];

          var _iterator22 = _createForOfIteratorHelper(currentSelections),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var selection = _step22.value;
              var allCardsValid = true;

              var _iterator25 = _createForOfIteratorHelper(cards),
                  _step25;

              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var _card4 = _step25.value;

                  if (selection.isValid(_card4) === false) {
                    allCardsValid = false;
                  }
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }

              if (allCardsValid === true) validSelection = true;
            } //cards not valid

          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }

          if (validSelection === false) return false; //if there's an executing card, it gets the selection

          if (this.executingCards.length > 0) {
            if (this.executingCards[this.executingCards.length - 1].onSelection(this, player, cards) === false) return false;
          } //determine what to do with the selection based on turn phase
          else if (player.state == _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Action) {
              if (cards.length > 0 && player.actions > 0) {
                //1 card selected at a time
                var card = cards[0]; //card better be in your hand

                var _iterator23 = _createForOfIteratorHelper(player.hand),
                    _step23;

                try {
                  for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                    var handCard = _step23.value;

                    if (handCard.id === card.id && card.type === _card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].action) {
                      //the user chose to play this action card
                      var cardDefinition = this.library.getCardDefinition(card.name);

                      if (cardDefinition.cardType === _card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].action) {
                        this.executingCards.push(cardDefinition);
                        player.actions--; //remove card from hand, put it in play

                        var index = -1;

                        for (var i = 0; i < player.hand.length; i++) {
                          if (player.hand[i].id === card.id) index = i;
                        }

                        player.hand.splice(index, 1);
                        player.inPlay.unshift(card);
                        cardDefinition.execute(this, player);
                      } else {
                        return false;
                      }
                    }
                  }
                } catch (err) {
                  _iterator23.e(err);
                } finally {
                  _iterator23.f();
                }
              }
            } else if (player.state == _player__WEBPACK_IMPORTED_MODULE_0__["PlayerState"].Buy && player.buys > 0) {
              if (cards.length > 0) {
                //1 card selected at a time
                var _card3 = cards[0]; //if this is a card in the players hand, and it's a treasure card, play it

                var _iterator24 = _createForOfIteratorHelper(player.hand),
                    _step24;

                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    var _handCard = _step24.value;

                    if (_handCard.id === _card3.id && _card3.type === _card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].treasure) {
                      var treasureCardDefinition = this.library.getCardDefinition(_card3.name);
                      this.executingCards.push(treasureCardDefinition); //remove card from hand, put it in play

                      var _index = -1;

                      for (var _i4 = 0; _i4 < player.hand.length; _i4++) {
                        if (player.hand[_i4].id === _card3.id) _index = _i4;
                      }

                      player.hand.splice(_index, 1);
                      player.inPlay.unshift(_card3);
                      treasureCardDefinition.execute(this, player);
                    }
                  } //if this is a card in the shop, buy it
                  //we know the card is in the shop if it is the top card of it's buy pile

                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }

                if (this.shop[_card3.name][0].id === _card3.id) {
                  var cost = this.library.getCardDefinition(_card3.name).cost;

                  if (player.coins >= cost) {
                    this.shop[_card3.name].splice(0, 1);

                    player.gain(_player__WEBPACK_IMPORTED_MODULE_0__["Location"].discard, _card3);
                    player.coins -= cost;
                    player.buys--;
                  } else {
                    return false;
                  } //the game always ends after buying something, so check if it's over here


                  if (this.checkGameOver()) {
                    //Game Over! show the end screen
                    this.state = GameState.GameOver;
                  }
                }
              }
            }

          return true;
        }
      }, {
        key: "onPromptClicked",
        value: function onPromptClicked(playerIndex, prompt, cards) {
          if (this.executingCards.length > 0) {
            if (this.executingCards[this.executingCards.length - 1].onPrompt(prompt, this, this.players[playerIndex], cards) === true) return;
          }

          if (prompt == 'done') {
            this.advanceGame();
          }
        } //called by a card definition when execution is finished

      }, {
        key: "finishExecution",
        value: function finishExecution(finishing) {
          var current = this.executingCards[this.executingCards.length - 1]; // this better be the same card, things can't finish out of order

          if (current.getCardName() === finishing.getCardName()) {
            this.executingCards.splice(this.executingCards.length - 1, 1);
          } else {
            console.log('ERROR: cards finished executing out of order');
            return;
          }
        }
      }]);

      return Game;
    }();
    /***/

  },

  /***/
  "../Common/src/player.ts":
  /*!*******************************!*\
    !*** ../Common/src/player.ts ***!
    \*******************************/

  /*! exports provided: Location, PlayerState, Player, HumanPlayer, AIPlayer */

  /***/
  function CommonSrcPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Location", function () {
      return Location;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerState", function () {
      return PlayerState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HumanPlayer", function () {
      return HumanPlayer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AIPlayer", function () {
      return AIPlayer;
    });
    /* harmony import */


    var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./card-definition */
    "../Common/src/card-definition.ts");
    /* harmony import */


    var _card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card-library */
    "../Common/src/card-library.ts");

    var Location;

    (function (Location) {
      Location[Location["deck"] = 0] = "deck";
      Location[Location["revealed"] = 1] = "revealed";
      Location[Location["hand"] = 2] = "hand";
      Location[Location["inPlay"] = 3] = "inPlay";
      Location[Location["discard"] = 4] = "discard";
      Location[Location["shop"] = 5] = "shop";
    })(Location || (Location = {}));

    var PlayerState;

    (function (PlayerState) {
      PlayerState["Action"] = "action";
      PlayerState["Buy"] = "buy";
      PlayerState["CleanUp"] = "clean-up";
      PlayerState["WaitingForTurn"] = "waiting";
    })(PlayerState || (PlayerState = {}));

    var Player = /*#__PURE__*/function () {
      function Player(playerName, playerColor, index) {
        _classCallCheck(this, Player);

        this.library = new _card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"]();
        this.name = playerName;
        this.index = index;
        this.color = playerColor;
        this.state = PlayerState.WaitingForTurn;
        this.setupReady = false;
        this.deck = [];
        this.revealed = [];
        this.hand = [];
        this.inPlay = [];
        this.discard = [];
        this.actions = 0;
        this.buys = 0;
        this.coins = 0;
        this.userSelections = [];
        this.userPrompts = [];
        this.status = "";
      }

      _createClass(Player, [{
        key: "gain",
        value: function gain(location, card) {
          switch (location) {
            case Location.deck:
              this.deck.push(card);
              break;

            case Location.hand:
              this.hand.push(card);
              break;

            case Location.discard:
              this.discard.unshift(card); //add to front of discard so player can see it

              break;
          }
        }
      }, {
        key: "draw",
        value: function draw(drawCount) {
          for (var i = 0; i < drawCount; i++) {
            if (this.deck.length > 0) {
              var card = this.deck.pop();

              if (card !== undefined) {
                this.hand.push(card);
              }
            } //no cards in deck, move cards from discard to deck
            else {
                while (this.discard.length > 0) {
                  var discardCard = this.discard.pop();
                  if (discardCard !== undefined) this.deck.push(discardCard);
                } // shuffle, then draw if we have a deck


                this.shuffle();

                if (this.deck.length > 0) {
                  var _card5 = this.deck.pop();

                  if (_card5 !== undefined) {
                    this.hand.push(_card5);
                  }
                }
              }
          }
        }
      }, {
        key: "shuffle",
        value: function shuffle() {
          // perform a fisher-yates shuffle on the deck array
          // this is done by swapping each element of the array with a random previous element
          for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            var _ref = [this.deck[j], this.deck[i]];
            this.deck[i] = _ref[0];
            this.deck[j] = _ref[1];
          }
        }
      }, {
        key: "discardCard",
        value: function discardCard(card) {
          for (var i = 0; i < this.hand.length; i++) {
            if (this.hand[i].id === card.id) {
              this.hand.splice(i, 1);
            }
          }

          this.discard.push(card);
        } //execute the clean up phase

      }, {
        key: "cleanUp",
        value: function cleanUp() {
          //move revealed into discard (prob shouldn't be any at this point...)
          while (this.revealed.length > 0) {
            var card = this.revealed[0];
            this.revealed.splice(0, 1);
            this.discard.push(card);
          } //move hand into discard


          while (this.hand.length > 0) {
            var _card6 = this.hand[0];
            _card6.revealedToOthers = false;
            this.hand.splice(0, 1);
            this.discard.push(_card6);
          } //move in play into discard


          while (this.inPlay.length > 0) {
            var _card7 = this.inPlay[0];
            _card7.revealedToOthers = false;
            this.inPlay.splice(0, 1);
            this.discard.push(_card7);
          } //draw a new hand


          this.draw(5); //reset values

          this.actions = 0;
          this.buys = 0;
          this.coins = 0;
        } //how many cards of the given type are in our hand?

      }, {
        key: "typeAmountInHand",
        value: function typeAmountInHand(type) {
          var count = 0; //if the current player has actions left, but no action cards in their hand, move to buy phase

          var _iterator26 = _createForOfIteratorHelper(this.hand),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var card = _step26.value;
              if (this.library.getCardDefinition(card.name).cardType == _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].action) count++;
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          return count;
        } //set the current state, and set what kind of card we want the user to pick

      }, {
        key: "setState",
        value: function setState(state, game) {
          this.state = state; //when moving to a new phase, we start fresh

          this.userSelections = [];
          this.userPrompts = [];
        }
      }, {
        key: "addStateActions",
        value: function addStateActions(game) {
          // tell the user what we're looking for
          if (this.state === PlayerState.WaitingForTurn) {//nothing to pick
          } else if (this.state === PlayerState.Action) {
            //in the action phase you choose actions to play from your hand
            var actionPhaseSelections = [];
            var pickAction = {
              location: Location.hand,
              isValid: function isValid(card) {
                return card.type === _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].action;
              },
              count: 1
            };
            actionPhaseSelections.push(pickAction);
            this.userPrompts.push(['done']);
            this.pushSelection(actionPhaseSelections, game);
          } else if (this.state === PlayerState.Buy) {
            //in the buy phase you can play treasure cards to get more coins, and use coins to buy from the shop
            var buyPhaseSelections = [];
            var pickTreasure = {
              location: Location.hand,
              isValid: function isValid(card) {
                return card.type === _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].treasure;
              },
              count: 1
            };
            var pickShop = {
              location: Location.shop,
              isValid: function isValid(card) {
                return true;
              },
              count: 1
            };
            buyPhaseSelections.push(pickTreasure);
            buyPhaseSelections.push(pickShop);
            this.userPrompts.push(['done']);
            this.pushSelection(buyPhaseSelections, game);
          } else if (this.state === PlayerState.CleanUp) {//nothing to pick
          }
        }
      }, {
        key: "pushSelection",
        value: function pushSelection(selection, game) {
          this.userSelections.push(selection); //if we give the AI a selection, just do it

          if (this instanceof AIPlayer) {
            var ai = this;
            ai.doCurrentSelection(game);
          }
        }
      }, {
        key: "popSelection",
        value: function popSelection() {
          var popped = this.userSelections[this.userSelections.length - 1];
          this.userSelections.splice(this.userSelections.length - 1, 1);
          return popped;
        }
      }, {
        key: "pushPrompt",
        value: function pushPrompt(prompts) {
          this.userPrompts.push(prompts);
        }
      }, {
        key: "popPrompt",
        value: function popPrompt() {
          var popped = this.userPrompts[this.userPrompts.length - 1];
          this.userPrompts.splice(this.userPrompts.length - 1, 1);
          return popped;
        }
      }]);

      return Player;
    }();

    var HumanPlayer = /*#__PURE__*/function (_Player) {
      _inherits(HumanPlayer, _Player);

      var _super19 = _createSuper(HumanPlayer);

      function HumanPlayer(playerName, playerColor, socketId, index) {
        var _this19;

        _classCallCheck(this, HumanPlayer);

        _this19 = _super19.call(this, playerName, playerColor, index);
        _this19.socketId = socketId;
        _this19.connected = true;
        _this19.setupReady = false;
        return _this19;
      }

      _createClass(HumanPlayer, [{
        key: "SetConnected",
        value: function SetConnected(connected) {
          this.connected = connected;
        }
      }]);

      return HumanPlayer;
    }(Player);

    var AIPlayer = /*#__PURE__*/function (_Player2) {
      _inherits(AIPlayer, _Player2);

      var _super20 = _createSuper(AIPlayer);

      function AIPlayer(playerName, playerColor, index, game) {
        var _this20;

        _classCallCheck(this, AIPlayer);

        _this20 = _super20.call(this, playerName, playerColor, index);
        _this20.setupReady = true; // this.game = game;

        return _this20;
      } //ugly sleep, yuck


      _createClass(AIPlayer, [{
        key: "wait",
        value: function wait(ms) {
          var start = new Date().getTime();
          var end = start;

          while (end < start + ms) {
            end = new Date().getTime();
          }
        }
      }, {
        key: "doCurrentSelection",
        value: function doCurrentSelection(game) {
          //wait a bit to let users see what's happening
          this.wait(1000);

          if (this.userSelections.length > 0) {
            var currentSelection = this.userSelections[this.userSelections.length - 1];

            for (var i = 0; i < currentSelection.length; i++) {
              var selection = currentSelection[i];

              switch (selection.location) {
                case Location.hand:
                  var cards = [];

                  var _iterator27 = _createForOfIteratorHelper(this.hand),
                      _step27;

                  try {
                    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                      var card = _step27.value;

                      if (selection.isValid(card) === true) {
                        cards.push(card);

                        if (cards.length === selection.count) {
                          //tell the game we choose these cards
                          if (game.onCardsSelected(this.index, cards) === true) return;
                        }
                      }
                    } //didn't find anything, send back a blank

                  } catch (err) {
                    _iterator27.e(err);
                  } finally {
                    _iterator27.f();
                  }

                  if (i == currentSelection.length - 1) {
                    game.onCardsSelected(this.index, cards);
                  }

                  break;

                case Location.deck:
                  break;

                case Location.shop:
                  for (var _card8 in game.shop) {
                    var _cards = [];

                    _cards.push(game.shop[_card8][0]);

                    if (game.onCardsSelected(this.index, _cards) === true) return;
                  } //somehow none of the cards in the shop worked, uh oh


                  break;

                case Location.discard:
                  //need to implement this if it's ever a thing
                  break;

                case Location.inPlay:
                  break;
              }
            }
          }
        }
      }]);

      return AIPlayer;
    }(Player);
    /***/

  },

  /***/
  "../Common/src/treasure-card-definition.ts":
  /*!*************************************************!*\
    !*** ../Common/src/treasure-card-definition.ts ***!
    \*************************************************/

  /*! exports provided: TreasureCardDefinition */

  /***/
  function CommonSrcTreasureCardDefinitionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreasureCardDefinition", function () {
      return TreasureCardDefinition;
    });
    /* harmony import */


    var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./card-definition */
    "../Common/src/card-definition.ts");

    var TreasureCardDefinition = /*#__PURE__*/function (_card_definition__WEB2) {
      _inherits(TreasureCardDefinition, _card_definition__WEB2);

      var _super21 = _createSuper(TreasureCardDefinition);

      function TreasureCardDefinition() {
        var _this21;

        _classCallCheck(this, TreasureCardDefinition);

        _this21 = _super21.call(this);
        _this21.coinValue = 0;
        _this21.cardType = _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].treasure;
        return _this21;
      }

      _createClass(TreasureCardDefinition, [{
        key: "getCoinValue",
        value: function getCoinValue() {
          return this.coinValue;
        } //increase the player's coin value when the card is played

      }, {
        key: "execute",
        value: function execute(game, player) {
          player.coins += this.getCoinValue();
          game.finishExecution(this);
        }
      }]);

      return TreasureCardDefinition;
    }(_card_definition__WEBPACK_IMPORTED_MODULE_0__["CardDefinition"]);
    /***/

  },

  /***/
  "../Common/src/victory-card-definition.ts":
  /*!************************************************!*\
    !*** ../Common/src/victory-card-definition.ts ***!
    \************************************************/

  /*! exports provided: VictoryCardDefinition */

  /***/
  function CommonSrcVictoryCardDefinitionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VictoryCardDefinition", function () {
      return VictoryCardDefinition;
    });
    /* harmony import */


    var _card_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./card-definition */
    "../Common/src/card-definition.ts");

    var VictoryCardDefinition = /*#__PURE__*/function (_card_definition__WEB3) {
      _inherits(VictoryCardDefinition, _card_definition__WEB3);

      var _super22 = _createSuper(VictoryCardDefinition);

      function VictoryCardDefinition() {
        var _this22;

        _classCallCheck(this, VictoryCardDefinition);

        _this22 = _super22.call(this);
        _this22.cardType = _card_definition__WEBPACK_IMPORTED_MODULE_0__["CardType"].victory;
        return _this22;
      }

      return VictoryCardDefinition;
    }(_card_definition__WEBPACK_IMPORTED_MODULE_0__["CardDefinition"]);
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./join-game/join-game.component */
    "./src/app/join-game/join-game.component.ts");
    /* harmony import */


    var _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./setup-game/setup-game.component */
    "./src/app/setup-game/setup-game.component.ts");
    /* harmony import */


    var _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./play-game/play-game.component */
    "./src/app/play-game/play-game.component.ts");
    /* harmony import */


    var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game-over/game-over.component */
    "./src/app/game-over/game-over.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");

    function AppComponent_app_join_game_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-join-game");
      }
    }

    function AppComponent_app_setup_game_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-setup-game");
      }
    }

    function AppComponent_app_play_game_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-play-game");
      }
    }

    function AppComponent_app_game_over_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-over");
      }
    }

    function AppComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_h1_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onCloseSelected();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r4.viewedCard)("selected", false)("orientation", "bottom")("revealed", true);
      }
    }

    function AppComponent_div_5_app_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 10);
      }

      if (rf & 2) {
        var pileCard_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", pileCard_r9)("selected", false)("orientation", "bottom")("revealed", true);
      }
    }

    function AppComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_h1_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onCloseSelected();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_app_card_5_Template, 1, 4, "app-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewedPile);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(gameService) {
        _classCallCheck(this, AppComponent);

        this.gameService = gameService;
        this.title = 'Dominion';
        this.viewedCard = undefined;
        this.viewedPile = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.gameService.onGameChanged().subscribe(function (game) {
            _this23.game = game;
          });
          this.gameService.onViewedCardChanged().subscribe(function (viewedCard) {
            _this23.viewedCard = viewedCard;
          });
          this.gameService.onViewedPileChanged().subscribe(function (viewedPile) {
            _this23.viewedPile = viewedPile;
          });
        }
      }, {
        key: "onCloseSelected",
        value: function onCloseSelected() {
          this.gameService.setViewedCard(undefined);
          this.gameService.setViewedPile([], '');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 6,
      consts: [[4, "ngIf"], ["id", "viewedCard", 4, "ngIf"], ["id", "viewedPile", 4, "ngIf"], ["id", "viewedCard"], ["id", "grayOut"], ["id", "close", 3, "click"], ["id", "card", 3, "card", "selected", "orientation", "revealed"], ["id", "viewedPile"], ["id", "pileView"], ["id", "pileCard", 3, "card", "selected", "orientation", "revealed", 4, "ngFor", "ngForOf"], ["id", "pileCard", 3, "card", "selected", "orientation", "revealed"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_join_game_0_Template, 1, 0, "app-join-game", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_setup_game_1_Template, 1, 0, "app-setup-game", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_play_game_2_Template, 1, 0, "app-play-game", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_game_over_3_Template, 1, 0, "app-game-over", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 5, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 6, 1, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game != undefined && ctx.game.state === "setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game != undefined && ctx.game.state === "play");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game != undefined && ctx.game.state === "over");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewedCard != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewedPile.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_3__["JoinGameComponent"], _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_4__["SetupGameComponent"], _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_5__["PlayGameComponent"], _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_6__["GameOverComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\napp-play-game[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n#viewedCard[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 10 ;\r\n}\r\n\r\n#viewedPile[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 10 ;\r\n}\r\n\r\n#grayOut[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(125, 125, 125, 0.7);\r\n  \r\n}\r\n\r\n#pileView[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  width: 80%;\r\n  height: 20%;\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n  position: absolute;\r\n  height: 50%;\r\n  width: 80%;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n#pileCard[_ngcontent-%COMP%] {\r\n  height: 90%;\r\n  width: auto;\r\n  display: inline-block;\r\n  text-align: center;\r\n  padding: 14px;\r\n  text-decoration: none;\r\n}\r\n\r\n#card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 50%;\r\n  width: auto;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n#close[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n  color:black;\r\n  border-radius: 50%;\r\n  border: solid 2px black;\r\n  cursor: pointer;\r\n  width: 24px;\r\n  height: 24px;\r\n  font-size: 24px;\r\n  line-height: 24px;\r\n  text-align: center;\r\n\r\n  position: absolute;\r\n  left: 10%;\r\n  top: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07RUFDTiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsTUFBTTtFQUNOLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDOztBQUU1Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hcHAtcGxheS1nYW1lIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbiN2aWV3ZWRDYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwIC8qanVzdCB0byBtYWtlIHN1cmUgaXRzIG9uIHRvcCovO1xyXG59XHJcblxyXG4jdmlld2VkUGlsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMCAvKmp1c3QgdG8gbWFrZSBzdXJlIGl0cyBvbiB0b3AqLztcclxufVxyXG5cclxuI2dyYXlPdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNSwgMTI1LCAxMjUsIDAuNyk7XHJcbiAgXHJcbn1cclxuXHJcbiNwaWxlVmlldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI3BpbGVDYXJkIHtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICB0b3A6IDEwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./join-game/join-game.component */
    "./src/app/join-game/join-game.component.ts");
    /* harmony import */


    var _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./play-game/play-game.component */
    "./src/app/play-game/play-game.component.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./setup-game/setup-game.component */
    "./src/app/setup-game/setup-game.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");
    /* harmony import */


    var _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./card-pile/card-pile.component */
    "./src/app/card-pile/card-pile.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./game-over/game-over.component */
    "./src/app/game-over/game-over.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js"); // angular material imports


    var config = {
      url: 'http://localhost:3000',
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__["CookieService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config), _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_7__["JoinGameComponent"], _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_8__["PlayGameComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"], _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_18__["SetupGameComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_20__["PlayerComponent"], _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_21__["CardPileComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_22__["ShopComponent"], _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_23__["GameOverComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_7__["JoinGameComponent"], _play_game_play_game_component__WEBPACK_IMPORTED_MODULE_8__["PlayGameComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"], _setup_game_setup_game_component__WEBPACK_IMPORTED_MODULE_18__["SetupGameComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_20__["PlayerComponent"], _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_21__["CardPileComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_22__["ShopComponent"], _game_over_game_over_component__WEBPACK_IMPORTED_MODULE_23__["GameOverComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config), _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"]],
          providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_24__["CookieService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/banner/banner.component.ts":
  /*!********************************************!*\
    !*** ./src/app/banner/banner.component.ts ***!
    \********************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);

        this.imgSrc = '/assets/dominion-banner.jfif';
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 1,
      vars: 0,
      consts: [["src", "assets/dominion-banner.jfif"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["img[_ngcontent-%COMP%] {\r\n    max-height: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n    background-color: cornsilk;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/card-pile/card-pile.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/card-pile/card-pile.component.ts ***!
    \**************************************************/

  /*! exports provided: CardPileComponent */

  /***/
  function srcAppCardPileCardPileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardPileComponent", function () {
      return CardPileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CardPileComponent_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location);
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3) {
      return {
        "bottom": a0,
        "left": a1,
        "top": a2,
        "right": a3
      };
    };

    function CardPileComponent_img_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardPileComponent_img_1_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx_r1.hovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.getImgSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c0, ctx_r1.orientation === "bottom", ctx_r1.orientation === "left", ctx_r1.orientation === "top", ctx_r1.orientation === "right"));
      }
    }

    function CardPileComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.cards.length);
      }
    }

    var CardPileComponent = /*#__PURE__*/function () {
      function CardPileComponent(gameService) {
        _classCallCheck(this, CardPileComponent);

        this.gameService = gameService;
        this.location = '';
        this.showLocationLabel = false;
        this.hovered = false;
      }

      _createClass(CardPileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getImgSrc",
        value: function getImgSrc() {
          var url = '/assets/card_images/';
          url += this.orientation;
          url += '/';

          if (this.revealed === true) {
            url += this.cards[0].imageName;
          } else {
            url += 'Card_Back.jpg';
          }

          return url;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.revealed === true) {
            this.gameService.setViewedPile(this.cards, this.location);
          }
        }
      }]);

      return CardPileComponent;
    }();

    CardPileComponent.ɵfac = function CardPileComponent_Factory(t) {
      return new (t || CardPileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]));
    };

    CardPileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardPileComponent,
      selectors: [["app-card-pile"]],
      inputs: {
        cards: "cards",
        revealed: "revealed",
        orientation: "orientation",
        location: "location",
        showLocationLabel: "showLocationLabel"
      },
      decls: 4,
      vars: 3,
      consts: [["id", "title", 4, "ngIf"], [3, "hovered", "ngClass", "src", "click", 4, "ngIf"], ["id", "hoverArea", 3, "mouseenter", "mouseleave", "click"], ["id", "count", 4, "ngIf"], ["id", "title"], [3, "ngClass", "src", "click"], ["id", "count"]],
      template: function CardPileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardPileComponent_p_0_Template, 2, 1, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardPileComponent_img_1_Template, 1, 9, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardPileComponent_Template_div_mouseenter_2_listener() {
            return ctx.hovered = true;
          })("mouseleave", function CardPileComponent_Template_div_mouseleave_2_listener() {
            return ctx.hovered = false;
          })("click", function CardPileComponent_Template_div_click_2_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardPileComponent_p_3_Template, 2, 1, "p", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLocationLabel === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 10%;\r\n}\r\n\r\n#hoverArea[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 11;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 5px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n#count[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(90% - 5px);\r\n}\r\n\r\n.top[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.hovered[_ngcontent-%COMP%]\r\n{\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  max-width: 190px;\r\n  max-height: 300px;\r\n  height: auto;\r\n  width: auto;\r\n  z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1waWxlL2NhcmQtcGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsOEVBQThFO0VBQzlFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0FBQ1I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXBpbGUvY2FyZC1waWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4jaG92ZXJBcmVhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEycHggNDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2NvdW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDkwJSAtIDVweCk7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cHgpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDVweCk7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDVweCk7XHJcbn1cclxuXHJcbi5ob3ZlcmVkXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWF4LXdpZHRoOiAxOTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgei1pbmRleDogMTA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardPileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card-pile',
          templateUrl: './card-pile.component.html',
          styleUrls: ['./card-pile.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }];
      }, {
        cards: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        revealed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        location: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showLocationLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1, a2, a3) {
      return {
        "bottom": a0,
        "left": a1,
        "top": a2,
        "right": a3
      };
    };

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(gameService) {
        _classCallCheck(this, CardComponent);

        this.gameService = gameService;
        this.selected = false;
        this.highlighted = false;
        this.hovered = false;
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getImgSrc",
        value: function getImgSrc() {
          var url = '/assets/card_images/';
          url += this.orientation;
          url += '/';

          if (this.revealed === true) {
            url += this.card.imageName;
          } else {
            url += 'Card_Back.jpg';
          }

          return url;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.gameService.onCardSelected(this.card);
        }
      }, {
        key: "onView",
        value: function onView() {
          this.gameService.setViewedCard(this.card);
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        card: "card",
        selected: "selected",
        highlighted: "highlighted",
        orientation: "orientation",
        revealed: "revealed"
      },
      decls: 2,
      vars: 15,
      consts: [[3, "src", "ngClass", "click"], ["id", "hoverArea", 3, "mouseenter", "mouseleave", "click"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_img_click_0_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardComponent_Template_div_mouseenter_1_listener() {
            return ctx.hovered = true;
          })("mouseleave", function CardComponent_Template_div_mouseleave_1_listener() {
            return ctx.hovered = false;
          })("click", function CardComponent_Template_div_click_1_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.hovered)("selected", ctx.selected)("unselected", !ctx.selected)("highlighted", ctx.highlighted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.getImgSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c0, ctx.orientation === "bottom", ctx.orientation === "left", ctx.orientation === "top", ctx.orientation === "right"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: #80e5ff;\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    margin: 0px;\r\n  }\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: #ecff80;\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    margin: 0px;\r\n  }\r\n\r\n#hoverArea[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 11;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 5px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.top[_ngcontent-%COMP%] {\r\n  max-height: calc(100% - 5px);\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 5px);\r\n}\r\n\r\n.hovered[_ngcontent-%COMP%]\r\n{\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  max-width: 190px;\r\n  max-height: 300px;\r\n  height: auto;\r\n  width: auto;\r\n  z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhFQUE4RTtFQUM5RSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwZTVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuLmhpZ2hsaWdodGVkIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlY2ZmODA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiNob3ZlckFyZWEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTJweCA0MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBtYXJnaW46IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNXB4KTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNXB4KTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XHJcbn1cclxuXHJcbi5ob3ZlcmVkXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWF4LXdpZHRoOiAxOTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgei1pbmRleDogMTA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }];
      }, {
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        highlighted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        revealed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game-over/game-over.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/game-over/game-over.component.ts ***!
    \**************************************************/

  /*! exports provided: GameOverComponent */

  /***/
  function srcAppGameOverGameOverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameOverComponent", function () {
      return GameOverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../Common/src/card-library */
    "../Common/src/card-library.ts");
    /* harmony import */


    var _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../Common/src/card-definition */
    "../Common/src/card-definition.ts");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function GameOverComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r1[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r1[1]);
      }
    }

    var GameOverComponent = /*#__PURE__*/function () {
      function GameOverComponent(gameService) {
        _classCallCheck(this, GameOverComponent);

        this.gameService = gameService;
        this.orderedPlayers = [];
        this.winner = '';
      }

      _createClass(GameOverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var game = this.gameService.getGame(); // calculate victory points for each player, and put them in order by amount of points

          var cardLibrary = new _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"]();

          var _iterator28 = _createForOfIteratorHelper(game.players),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var _player3 = _step28.value;
              var playerPoints = 0;

              var _iterator30 = _createForOfIteratorHelper(_player3.deck),
                  _step30;

              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var card = _step30.value;

                  if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    var victoryCardDefinition = cardLibrary.getCardDefinition(card.name);
                    playerPoints += victoryCardDefinition.GetVictoryPoints();
                    console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
                  }
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }

              var _iterator31 = _createForOfIteratorHelper(_player3.revealed),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var _card9 = _step31.value;

                  if (_card9.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    var _victoryCardDefinition = cardLibrary.getCardDefinition(_card9.name);

                    playerPoints += _victoryCardDefinition.GetVictoryPoints();
                    console.log('counting points: ' + _card9.name + ': ' + _victoryCardDefinition.GetVictoryPoints());
                  }
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }

              var _iterator32 = _createForOfIteratorHelper(_player3.hand),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var _card10 = _step32.value;

                  if (_card10.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    var _victoryCardDefinition2 = cardLibrary.getCardDefinition(_card10.name);

                    playerPoints += _victoryCardDefinition2.GetVictoryPoints();
                    console.log('counting points: ' + _card10.name + ': ' + _victoryCardDefinition2.GetVictoryPoints());
                  }
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }

              var _iterator33 = _createForOfIteratorHelper(_player3.inPlay),
                  _step33;

              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                  var _card11 = _step33.value;

                  if (_card11.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    var _victoryCardDefinition3 = cardLibrary.getCardDefinition(_card11.name);

                    playerPoints += _victoryCardDefinition3.GetVictoryPoints();
                    console.log('counting points: ' + _card11.name + ': ' + _victoryCardDefinition3.GetVictoryPoints());
                  }
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }

              var _iterator34 = _createForOfIteratorHelper(_player3.discard),
                  _step34;

              try {
                for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                  var _card12 = _step34.value;

                  if (_card12.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].victory) {
                    var _victoryCardDefinition4 = cardLibrary.getCardDefinition(_card12.name);

                    playerPoints += _victoryCardDefinition4.GetVictoryPoints();
                    console.log('counting points: ' + _card12.name + ': ' + _victoryCardDefinition4.GetVictoryPoints());
                  }
                }
              } catch (err) {
                _iterator34.e(err);
              } finally {
                _iterator34.f();
              }

              var inserted = false;

              for (var i = 0; i <= this.orderedPlayers.length && inserted === false; i++) {
                if (i === this.orderedPlayers.length) {
                  this.orderedPlayers.push([_player3.name, playerPoints]);
                  inserted = true;
                } else if (playerPoints > this.orderedPlayers[i][1]) {
                  this.orderedPlayers.splice(i, 0, [_player3.name, playerPoints]);
                  inserted = true;
                }
              }
            } // check for tie

          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }

          if (this.orderedPlayers.length >= 2 && this.orderedPlayers[0][1] === this.orderedPlayers[1][1]) {
            this.winner = 'It\'s a tie between (';

            var _iterator29 = _createForOfIteratorHelper(this.orderedPlayers),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var player = _step29.value;

                if (player[1] === this.orderedPlayers[0][1]) {
                  this.winner += ' ' + player[0];
                }
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }

            this.winner += ' )!';
          } else {
            this.winner = this.orderedPlayers[0][0] + ' wins!';
          }
        }
      }, {
        key: "onLeaveGame",
        value: function onLeaveGame() {
          this.gameService.leaveGame();
        }
      }]);

      return GameOverComponent;
    }();

    GameOverComponent.ɵfac = function GameOverComponent_Factory(t) {
      return new (t || GameOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]));
    };

    GameOverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameOverComponent,
      selectors: [["app-game-over"]],
      decls: 18,
      vars: 2,
      consts: [["id", "content"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"]],
      template: function GameOverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Victory Points");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GameOverComponent_tr_15_Template, 5, 2, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameOverComponent_Template_button_click_16_listener() {
            return ctx.onLeaveGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Leave Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.winner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderedPlayers);
        }
      },
      directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: ["app-banner[_ngcontent-%COMP%] { \r\n    display: flex;\r\n    border-width: 1px;\r\n    height: 20%;\r\n    width: 100%;\r\n  }\r\n  \r\n#content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n  \r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(37, 37, 37);\r\n    padding: 8px;\r\n}\r\n  \r\n.mat-card[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n  \r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUVGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWJhbm5lciB7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiNjb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuICBcclxuLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuICBcclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameOverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-over',
          templateUrl: './game-over.component.html',
          styleUrls: ['./game-over.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game.service.ts":
  /*!*********************************!*\
    !*** ./src/app/game.service.ts ***!
    \*********************************/

  /*! exports provided: GameService */

  /***/
  function srcAppGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _Common_src_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Common/src/game */
    "../Common/src/game.ts");
    /* harmony import */


    var _Common_src_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Common/src/player */
    "../Common/src/player.ts");
    /* harmony import */


    var _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Common/src/card-definition */
    "../Common/src/card-definition.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./status.service */
    "./src/app/status.service.ts");

    var GameService = /*#__PURE__*/function () {
      function GameService(socket, statusService) {
        var _this24 = this;

        _classCallCheck(this, GameService);

        this.socket = socket;
        this.statusService = statusService;

        this.onGameChanged = function () {
          return _this24.gameSubject.asObservable();
        };

        this.onGamesUpdated = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this24.socket.on('games-updated', function (games) {
              if (_this24.game !== undefined) {
                var bFound = false;

                var _iterator35 = _createForOfIteratorHelper(games),
                    _step35;

                try {
                  for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                    var game = _step35.value;

                    if (game.name === _this24.game.name) {
                      bFound = true;

                      if (game.players.length > _this24.player.index && game.players[_this24.player.index].name === _this24.player.name) {
                        console.log('updated game');
                        _this24.game = game;

                        _this24.gameSubject.next(_this24.game);
                      } else {
                        console.log('we left the game'); // we aren't in the game anymore, clear out

                        _this24.game = undefined;
                        _this24.player = undefined;

                        _this24.gameSubject.next(_this24.game);
                      }
                    }
                  }
                } catch (err) {
                  _iterator35.e(err);
                } finally {
                  _iterator35.f();
                }

                if (bFound === false) {
                  console.log('we left the game'); // we aren't in the game anymore, clear out

                  _this24.game = undefined;
                  _this24.player = undefined;

                  _this24.gameSubject.next(_this24.game);
                }
              }

              observer.next(games);
            });
          });
        };

        this.onViewedCardChanged = function () {
          return _this24.viewedCardSubject.asObservable();
        };

        this.onViewedPileChanged = function () {
          return _this24.viewedPileSubject.asObservable();
        };

        this.gameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.viewedCardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedCards = [];
        this.viewedPile = [];
        this.viewedPileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.socket.on('game-updated', function (game) {
          if (_this24.game !== undefined) {
            _this24.game = game;
            _this24.player = game.players[_this24.player.index];

            _this24.gameSubject.next(_this24.game);

            console.log(_this24.player);

            _this24.statusService.updateStatus(_this24.game);
          }
        });
      }

      _createClass(GameService, [{
        key: "getPlayer",
        value: function getPlayer() {
          return this.player;
        } // server communication through socket io

      }, {
        key: "sendToServer",
        value: function sendToServer(event, data, returnCallback) {
          var _this25 = this;

          console.log('emiting: ' + event);
          this.socket.emit(event, data, function (result) {
            if (result.ok === true) {
              returnCallback(result.returnValue);
            } else {
              _this25.statusService.setStatus(result.error);

              console.log('error sending: ' + event + '. reason: ' + result.error);
            }

            return result.returnValue;
          });
        }
      }, {
        key: "joinGame",
        value: function joinGame(myPlayerName, myPlayerColor, myGameName) {
          var _this26 = this;

          this.sendToServer('join-game', {
            playerName: myPlayerName,
            playerColor: myPlayerColor,
            gameName: myGameName
          }, function (returnValue) {
            _this26.player = returnValue.player;
            _this26.game = returnValue.game;

            _this26.gameSubject.next(_this26.game);
          });
        }
      }, {
        key: "createGame",
        value: function createGame(newPlayerName, newPlayerColor, newGameName) {
          var _this27 = this;

          // create the game, and join it if it's created successfully
          this.sendToServer('create-game', newGameName, function () {
            _this27.joinGame(newPlayerName, newPlayerColor, newGameName);
          });
        }
      }, {
        key: "leaveGame",
        value: function leaveGame() {
          this.sendToServer('leave-game', {
            gameName: this.game.name,
            playerIndex: this.player.index
          }, function () {});
        }
      }, {
        key: "addBot",
        value: function addBot(myBotName) {
          console.log(this.game);
          this.sendToServer('add-bot', {
            gameName: this.game.name,
            botName: myBotName
          }, function () {});
        }
      }, {
        key: "requestGames",
        value: function requestGames() {
          this.sendToServer('request-games-list', {}, function () {});
        }
      }, {
        key: "setupSelectCard",
        value: function setupSelectCard(card) {
          this.sendToServer('setup-card-selected', {
            gameName: this.game.name,
            cardName: card.name
          }, function () {});
        }
      }, {
        key: "setupSelectPreset",
        value: function setupSelectPreset(selectedPreset) {
          this.sendToServer('setup-preset-selected', {
            gameName: this.game.name,
            presetName: selectedPreset
          }, function () {});
        }
      }, {
        key: "setupReady",
        value: function setupReady() {
          this.sendToServer('setup-player-ready', {
            gameName: this.game.name,
            playerName: this.player.name
          }, function () {});
        }
      }, {
        key: "setupStartGame",
        value: function setupStartGame() {
          this.sendToServer('setup-start-game', {
            gameName: this.game.name
          }, function () {});
        }
      }, {
        key: "getGame",
        value: function getGame() {
          return this.game;
        }
      }, {
        key: "onPromptClicked",
        value: function onPromptClicked(clickedPrompt) {
          this.sendToServer('prompt-clicked', {
            gameName: this.game.name,
            playerIndex: this.player.index,
            prompt: clickedPrompt,
            cards: this.selectedCards
          }, function () {});
          this.selectedCards = [];
        }
      }, {
        key: "onCardSelected",
        value: function onCardSelected(card) {
          // card selected for setup
          if (this.game.state === _Common_src_game__WEBPACK_IMPORTED_MODULE_2__["GameState"].Setup) {
            this.setupSelectCard(card);
            return;
          } // card selected in game
          // if the card is already selected, remove it from the selection


          for (var i = 0; i < this.selectedCards.length; i++) {
            var selectedCard = this.selectedCards[i];

            if (selectedCard.id === card.id) {
              this.selectedCards.splice(i, 1);
              return;
            }
          }

          this.selectedCards.push(card);
          var count = this.player.userSelections[this.player.userSelections.length - 1][0].count;

          if (this.selectedCards.length >= count && count !== -1) {
            this.sendToServer('cards-selected', {
              gameName: this.game.name,
              playerIndex: this.player.index,
              cards: this.selectedCards
            }, function () {});
            this.selectedCards = [];
          }
        }
      }, {
        key: "isCardSelected",
        value: function isCardSelected(card) {
          var _iterator36 = _createForOfIteratorHelper(this.selectedCards),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var selectedCard = _step36.value;

              if (selectedCard.id === card.id) {
                return true;
              }
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }

          return false;
        }
      }, {
        key: "isCardHighlighted",
        value: function isCardHighlighted(card) {
          if (this.player.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_3__["PlayerState"].Action) {
            if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_4__["CardType"].action && this.player.actions > 0) {
              return true;
            }
          } else if (this.player.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_3__["PlayerState"].Buy) {
            if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_4__["CardType"].treasure) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "setViewedCard",
        value: function setViewedCard(card) {
          this.viewedCard = card;
          this.viewedPile = [];
          this.viewedCardSubject.next(this.viewedCard);
        }
      }, {
        key: "setViewedPile",
        value: function setViewedPile(cards, location) {
          // you can only view a a pile when clicking the shop piles doesn't buy/gain something
          var pickingFromShop = false;

          if (this.player.userSelections.length > 0) {
            var _iterator37 = _createForOfIteratorHelper(this.player.userSelections[this.player.userSelections.length - 1]),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var selection = _step37.value;

                if (selection.location === _Common_src_player__WEBPACK_IMPORTED_MODULE_3__["Location"].shop) {
                  pickingFromShop = true;
                }
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }
          }

          if (location !== 'Shop' || !pickingFromShop) {
            this.viewedCard = undefined;
            this.viewedPile = cards;
            this.viewedPileSubject.next(this.viewedPile);
          }
        }
      }]);

      return GameService;
    }();

    GameService.ɵfac = function GameService_Factory(t) {
      return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_status_service__WEBPACK_IMPORTED_MODULE_6__["StatusService"]));
    };

    GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]
        }, {
          type: _status_service__WEBPACK_IMPORTED_MODULE_6__["StatusService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/join-game/join-game.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/join-game/join-game.component.ts ***!
    \**************************************************/

  /*! exports provided: JoinGameComponent */

  /***/
  function srcAppJoinGameJoinGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinGameComponent", function () {
      return JoinGameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../status.service */
    "./src/app/status.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function JoinGameComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.status, " ");
      }
    }

    function JoinGameComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGameComponent_tr_23_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var gameName_r2 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onJoin(gameName_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Join");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gameName_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gameName_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.playerCounts[i_r3], "/4");
      }
    }

    var JoinGameComponent = /*#__PURE__*/function () {
      function JoinGameComponent(gameService, statusService, cookieService) {
        _classCallCheck(this, JoinGameComponent);

        this.gameService = gameService;
        this.statusService = statusService;
        this.cookieService = cookieService;
        this.gameNames = [];
        this.playerCounts = [];
        this.newGameName = '';
        this.playerName = this.cookieService.get('player-name');
        this.playerColor = '#000000';
        this.status = '';
      }

      _createClass(JoinGameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          // listen for the list of games being updated
          this.gameService.onGamesUpdated().subscribe(function (games) {
            _this28.gameNames = [];
            _this28.playerCounts = [];

            var _iterator38 = _createForOfIteratorHelper(games),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var game = _step38.value;

                _this28.gameNames.push(game.name);

                _this28.playerCounts.push(game.players.length);
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          });
          this.statusService.onStatusChanged().subscribe(function (newStatus) {
            _this28.status = newStatus;
          });
          this.gameService.requestGames();
        }
      }, {
        key: "onJoin",
        value: function onJoin(gameName) {
          if (this.playerName !== '') {
            this.cookieService.set('player-name', this.playerName);
            this.gameService.joinGame(this.playerName, this.playerColor, gameName);
          } else {
            this.statusService.setStatus('Please enter a player name');
          }
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          if (this.playerName === '' && this.newGameName === '') {
            this.statusService.setStatus('Please enter a game and player name');
          } else if (this.playerName === '') {
            this.statusService.setStatus('Please enter a player name');
          } else if (this.newGameName === '') {
            this.statusService.setStatus('Please enter a game name');
          } else {
            this.cookieService.set('player-name', this.playerName);
            this.gameService.createGame(this.playerName, this.playerColor, this.newGameName);
            this.newGameName = '';
          }
        }
      }]);

      return JoinGameComponent;
    }();

    JoinGameComponent.ɵfac = function JoinGameComponent_Factory(t) {
      return new (t || JoinGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]));
    };

    JoinGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinGameComponent,
      selectors: [["app-join-game"]],
      decls: 30,
      vars: 5,
      consts: [["id", "status", 4, "ngIf"], ["id", "content"], ["type", "text", "placeholder", "", 3, "ngModel", "ngModelChange"], ["type", "color", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], ["id", "status"]],
      template: function JoinGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JoinGameComponent_div_4_Template, 5, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create/Join Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinGameComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.playerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Favorite Color: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinGameComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.playerColor = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Player Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, JoinGameComponent_tr_23_Template, 8, 2, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Create New Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JoinGameComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.newGameName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGameComponent_Template_button_click_28_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gameNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newGameName);
        }
      },
      directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: ["app-banner[_ngcontent-%COMP%] { \r\n  display: flex;\r\n  border-width: 1px;\r\n  height: 20%;\r\n  width: 100%;\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(37, 37, 37);\r\n    padding: 8px;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#status[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi1nYW1lL2pvaW4tZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvam9pbi1nYW1lL2pvaW4tZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWJhbm5lciB7IFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjb250ZW50e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG50ZCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM3LCAzNywgMzcpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbiNzdGF0dXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-game',
          templateUrl: './join-game.component.html',
          styleUrls: ['./join-game.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }, {
          type: _status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/play-game/play-game.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/play-game/play-game.component.ts ***!
    \**************************************************/

  /*! exports provided: PlayGameComponent */

  /***/
  function srcAppPlayGamePlayGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayGameComponent", function () {
      return PlayGameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Common_src_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../Common/src/player */
    "../Common/src/player.ts");
    /* harmony import */


    var _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../Common/src/card-definition */
    "../Common/src/card-definition.ts");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../status.service */
    "./src/app/status.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../player/player.component */
    "./src/app/player/player.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function PlayGameComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayGameComponent_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var prompt_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onPromptClicked(prompt_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prompt_r4 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlighted", ctx_r0.isPromptHighlighted(prompt_r4) === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prompt_r4);
      }
    }

    function PlayGameComponent_app_player_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 9);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r1.leftPlayer)("orientation", "left");
      }
    }

    function PlayGameComponent_app_player_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 10);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r2.topPlayer)("orientation", "top");
      }
    }

    function PlayGameComponent_app_player_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 11);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r3.rightPlayer)("orientation", "right");
      }
    }

    var PlayGameComponent = /*#__PURE__*/function () {
      function PlayGameComponent(gameService, statusService) {
        _classCallCheck(this, PlayGameComponent);

        this.gameService = gameService;
        this.statusService = statusService;
        this.game = gameService.getGame();
        this.myPlayer = gameService.getPlayer();
        this.initPlayers();
        this.status = statusService.getStatus();
      }

      _createClass(PlayGameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.statusService.onStatusChanged().subscribe(function (newStatus) {
            _this29.status = newStatus;
          });
          this.gameService.onGameChanged().subscribe(function (game) {
            _this29.game = game;

            _this29.initPlayers();
          });
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          if (this.myPlayer.status !== '') {
            return this.myPlayer.status;
          } else {
            return this.status;
          }
        }
      }, {
        key: "onPromptClicked",
        value: function onPromptClicked(prompt) {
          this.gameService.onPromptClicked(prompt);
        }
      }, {
        key: "isPromptHighlighted",
        value: function isPromptHighlighted(prompt) {
          if (prompt === 'done') {
            if (this.myPlayer.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_1__["PlayerState"].Action) {
              var anyActions = false;

              var _iterator39 = _createForOfIteratorHelper(this.myPlayer.hand),
                  _step39;

              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var card = _step39.value;

                  if (card.type === _Common_src_card_definition__WEBPACK_IMPORTED_MODULE_2__["CardType"].action) {
                    anyActions = true;
                  }
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }

              if (this.myPlayer.actions === 0 || anyActions === false) {
                return true;
              }
            } else if (this.myPlayer.state === _Common_src_player__WEBPACK_IMPORTED_MODULE_1__["PlayerState"].Buy && this.myPlayer.buys === 0) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "initPlayers",
        value: function initPlayers() {
          if (this.game !== undefined) {
            this.myPlayer = this.game.players[this.myPlayer.index];

            if (this.game.players.length === 2) {
              this.topPlayer = this.game.players[(this.myPlayer.index + 1) % 2];
            } else if (this.game.players.length === 3) {
              this.leftPlayer = this.game.players[(this.myPlayer.index + 1) % 3];
              this.topPlayer = this.game.players[(this.myPlayer.index + 2) % 3];
            } else if (this.game.players.length === 4) {
              this.leftPlayer = this.game.players[(this.myPlayer.index + 1) % 4];
              this.topPlayer = this.game.players[(this.myPlayer.index + 2) % 4];
              this.rightPlayer = this.game.players[(this.myPlayer.index + 3) % 4];
            }
          }
        }
      }]);

      return PlayGameComponent;
    }();

    PlayGameComponent.ɵfac = function PlayGameComponent_Factory(t) {
      return new (t || PlayGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"]));
    };

    PlayGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayGameComponent,
      selectors: [["app-play-game"]],
      decls: 10,
      vars: 7,
      consts: [["id", "status"], ["mat-button", "", 3, "highlighted", "click", 4, "ngFor", "ngForOf"], ["id", "game"], ["id", "leftPlayer", 3, "player", "orientation", 4, "ngIf"], ["id", "topPlayer", 3, "player", "orientation", 4, "ngIf"], ["id", "rightPlayer", 3, "player", "orientation", 4, "ngIf"], ["id", "myPlayer", 3, "player", "orientation"], ["id", "shop"], ["mat-button", "", 3, "click"], ["id", "leftPlayer", 3, "player", "orientation"], ["id", "topPlayer", 3, "player", "orientation"], ["id", "rightPlayer", 3, "player", "orientation"]],
      template: function PlayGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayGameComponent_button_2_Template, 2, 3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayGameComponent_app_player_5_Template, 1, 2, "app-player", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayGameComponent_app_player_6_Template, 1, 2, "app-player", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayGameComponent_app_player_7_Template, 1, 2, "app-player", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-player", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-shop", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getStatus(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myPlayer.userPrompts[ctx.myPlayer.userPrompts.length - 1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leftPlayer !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topPlayer !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rightPlayer !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx.myPlayer)("orientation", "bottom");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _player_player_component__WEBPACK_IMPORTED_MODULE_7__["PlayerComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: ["#status[_ngcontent-%COMP%] {\r\n    height: 5%;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n#game[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-template-rows: repeat(10, 10%);\r\n\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    border: 1px solid purple;\r\n}\r\n\r\n#leftPlayer[_ngcontent-%COMP%]{\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start:2;\r\n    grid-row-end:11;\r\n\r\n    border: 1px solid black;\r\n}\r\n\r\n#topPlayer[_ngcontent-%COMP%]{\r\n    grid-column-start: 1;\r\n    grid-column-end: 10;\r\n    grid-row-start:1;\r\n    grid-row-end:2;\r\n    \r\n    border: 1px solid black;\r\n}\r\n\r\n#rightPlayer[_ngcontent-%COMP%]{\r\n    grid-column-start: 10;\r\n    grid-column-end: 10;\r\n    grid-row-start:1;\r\n    grid-row-end:9;\r\n\r\n    border: 1px solid black;\r\n}\r\n\r\n#myPlayer[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 11;\r\n    grid-row-start:9;\r\n    grid-row-end:11;\r\n\r\n    border: 1px solid black;\r\n}\r\n\r\n#shop[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 10;\r\n    grid-row-start:2;\r\n    grid-row-end:9;\r\n\r\n    margin: 8px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n    border-style: solid;\r\n    border-color: #ecff80;\r\n    border-radius: 5px;\r\n    border-width: 5px;\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS1nYW1lL3BsYXktZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7O0lBRW5DLFdBQVc7SUFDWCxXQUFXOztJQUVYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYzs7SUFFZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjOztJQUVkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYzs7SUFFZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wbGF5LWdhbWUvcGxheS1nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3N0YXR1cyB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNnYW1le1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxMCUpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSk7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVye1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDoyO1xyXG4gICAgZ3JpZC1yb3ctZW5kOjExO1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jdG9wUGxheWVye1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDEwO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6MTtcclxuICAgIGdyaWQtcm93LWVuZDoyO1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3JpZ2h0UGxheWVye1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDEwO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMDtcclxuICAgIGdyaWQtcm93LXN0YXJ0OjE7XHJcbiAgICBncmlkLXJvdy1lbmQ6OTtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI215UGxheWVyIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMTtcclxuICAgIGdyaWQtcm93LXN0YXJ0Ojk7XHJcbiAgICBncmlkLXJvdy1lbmQ6MTE7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNzaG9wIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMDtcclxuICAgIGdyaWQtcm93LXN0YXJ0OjI7XHJcbiAgICBncmlkLXJvdy1lbmQ6OTtcclxuXHJcbiAgICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWNmZjgwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-play-game',
          templateUrl: './play-game.component.html',
          styleUrls: ['./play-game.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
        }, {
          type: _status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/player/player.component.ts":
  /*!********************************************!*\
    !*** ./src/app/player/player.component.ts ***!
    \********************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../card-pile/card-pile.component */
    "./src/app/card-pile/card-pile.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");

    function PlayerComponent_div_0_app_card_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 13);
      }

      if (rf & 2) {
        var card_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r5)("highlighted", ctx_r4.isCardHighlighted(card_r5) === true && ctx_r4.isCardSelected(card_r5) === false)("selected", ctx_r4.isCardSelected(card_r5) === true)("revealed", true)("orientation", "bottom");
      }
    }

    function PlayerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-card-pile", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-card-pile", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerComponent_div_0_app_card_14_Template, 1, 5, "app-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-card-pile", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-card-pile", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.player.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r0.player.actions, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r0.player.buys, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r0.player.coins, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.deck)("location", "Deck")("showLocationLabel", true)("revealed", false)("orientation", "bottom");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.revealed)("revealed", true)("orientation", "bottom");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.player.hand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.inPlay)("location", "In Play")("showLocationLabel", true)("revealed", true)("orientation", "bottom");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r0.player.discard)("location", "Discard")("showLocationLabel", true)("revealed", true)("orientation", "bottom");
      }
    }

    function PlayerComponent_div_1_app_card_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 22);
      }

      if (rf & 2) {
        var card_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r7)("revealed", card_r7.revealedToOthers)("orientation", "left");
      }
    }

    function PlayerComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-card-pile", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-card-pile", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerComponent_div_1_app_card_14_Template, 1, 3, "app-card", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-card-pile", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-card-pile", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r1.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.player.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r1.player.actions, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r1.player.buys, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r1.player.coins, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.deck)("revealed", false)("orientation", "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.revealed)("revealed", true)("orientation", "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.player.hand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.inPlay)("revealed", true)("orientation", "left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r1.player.discard)("revealed", true)("orientation", "left");
      }
    }

    function PlayerComponent_div_2_app_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 22);
      }

      if (rf & 2) {
        var card_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r9)("revealed", card_r9.revealedToOthers)("orientation", "top");
      }
    }

    function PlayerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-pile", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-pile", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_div_2_app_card_4_Template, 1, 3, "app-card", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-card-pile", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-card-pile", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.discard)("revealed", true)("orientation", "top");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.inPlay)("revealed", true)("orientation", "top");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.player.hand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.revealed)("revealed", true)("orientation", "top");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r2.player.deck)("revealed", false)("orientation", "top");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r2.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.player.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r2.player.actions, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r2.player.buys, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r2.player.coins, "");
      }
    }

    function PlayerComponent_div_3_app_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 22);
      }

      if (rf & 2) {
        var card_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r11)("revealed", card_r11.revealedToOthers)("orientation", "right");
      }
    }

    function PlayerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-pile", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-pile", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_div_3_app_card_4_Template, 1, 3, "app-card", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-card-pile", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-card-pile", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.discard)("revealed", true)("orientation", "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.inPlay)("revealed", true)("orientation", "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.player.hand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.revealed)("revealed", true)("orientation", "top");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx_r3.player.deck)("revealed", false)("orientation", "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r3.player.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.player.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Actions: ", ctx_r3.player.actions, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buys: ", ctx_r3.player.buys, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins: ", ctx_r3.player.coins, "");
      }
    }

    var PlayerComponent = /*#__PURE__*/function () {
      function PlayerComponent(gameService) {
        _classCallCheck(this, PlayerComponent);

        this.gameService = gameService;
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isCardSelected",
        value: function isCardSelected(card) {
          return this.gameService.isCardSelected(card) === true;
        }
      }, {
        key: "isCardHighlighted",
        value: function isCardHighlighted(card) {
          return this.gameService.isCardHighlighted(card) === true;
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]));
    };

    PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      inputs: {
        player: "player",
        orientation: "orientation"
      },
      decls: 4,
      vars: 4,
      consts: [["id", "bottomPlayer", 4, "ngIf"], ["id", "leftPlayer", 4, "ngIf"], ["id", "topPlayer", 4, "ngIf"], ["id", "rightPlayer", 4, "ngIf"], ["id", "bottomPlayer"], ["id", "bottomPlayerInfo"], ["id", "playerInfoText"], ["id", "bottomPlayerDeck", 3, "cards", "location", "showLocationLabel", "revealed", "orientation"], ["id", "bottomPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "bottomPlayerHand"], [3, "card", "highlighted", "selected", "revealed", "orientation", 4, "ngFor", "ngForOf"], ["id", "bottomPlayerInPlay", 3, "cards", "location", "showLocationLabel", "revealed", "orientation"], ["id", "bottomPlayerDiscard", 3, "cards", "location", "showLocationLabel", "revealed", "orientation"], [3, "card", "highlighted", "selected", "revealed", "orientation"], ["id", "leftPlayer"], ["id", "leftPlayerInfo"], ["id", "leftPlayerDeck", 3, "cards", "revealed", "orientation"], ["id", "leftPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "leftPlayerHand"], [3, "card", "revealed", "orientation", 4, "ngFor", "ngForOf"], ["id", "leftPlayerInPlay", 3, "cards", "revealed", "orientation"], ["id", "leftPlayerDiscard", 3, "cards", "revealed", "orientation"], [3, "card", "revealed", "orientation"], ["id", "topPlayer"], ["id", "topPlayerDiscard", 3, "cards", "revealed", "orientation"], ["id", "topPlayerInPlay", 3, "cards", "revealed", "orientation"], ["id", "topPlayerHand"], ["id", "topPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "topPlayerDeck", 3, "cards", "revealed", "orientation"], ["id", "topPlayerInfo"], ["id", "rightPlayer"], ["id", "rightPlayerDiscard", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerInPlay", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerHand"], ["id", "rightPlayerRevealed", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerDeck", 3, "cards", "revealed", "orientation"], ["id", "rightPlayerInfo"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlayerComponent_div_0_Template, 17, 25, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_div_1_Template, 17, 19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerComponent_div_2_Template, 17, 19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerComponent_div_3_Template, 17, 19, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orientation === "right");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_3__["CardPileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]],
      styles: ["#bottomPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-template-rows: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#bottomPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n\r\n    border-right: 1px solid black;\r\n}\r\n\r\n#bottomPlayerDeck[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#bottomPlayerRevealed[_ngcontent-%COMP%] {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#bottomPlayerHand[_ngcontent-%COMP%] {\r\n    grid-column-start: 4;\r\n    grid-column-end: 9;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 12%);\r\n}\r\n\r\n#bottomPlayerInPlay[_ngcontent-%COMP%] {\r\n    grid-column-start: 9;\r\n    grid-column-end: 10;\r\n}\r\n\r\n#bottomPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-column-start: 10;\r\n    grid-column-end: 10;\r\n}\r\n\r\n#leftPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 10%);\r\n    grid-template-columns: 100%;\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n#leftPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n    font-size:small;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n#leftPlayerDeck[_ngcontent-%COMP%]{\r\n    grid-row-start: 3;\r\n    grid-row-end: 4;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#leftPlayerRevealed[_ngcontent-%COMP%]{\r\n    grid-row-start: 4;\r\n    grid-row-end: 5;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#leftPlayerHand[_ngcontent-%COMP%] {\r\n    grid-row-start: 5;\r\n    grid-row-end: 9;\r\n    display: grid;\r\n    height: 100%;\r\n    width: 100%;\r\n    grid-template-rows: repeat(auto-fill, 10%);\r\n}\r\n\r\n#leftPlayerInPlay[_ngcontent-%COMP%]{\r\n    grid-row-start: 9;\r\n    grid-row-end: 10;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#leftPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-row-start: 10;\r\n    grid-row-end: 10;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n#topPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-template-rows: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#topPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n}\r\n\r\n#topPlayerInPlay[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n#topPlayerHand[_ngcontent-%COMP%] {\r\n    grid-column-start: 3;\r\n    grid-column-end: 8;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 5%);\r\n}\r\n\r\n#topPlayerRevealed[_ngcontent-%COMP%] {\r\n    grid-column-start: 8;\r\n    grid-column-end: 9;\r\n}\r\n\r\n#topPlayerDeck[_ngcontent-%COMP%] {\r\n    grid-column-start: 9;\r\n    grid-column-end: 10;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#topPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-column-start: 10;\r\n    grid-column-end: 11;\r\n    font-size:small;\r\n    \r\n    border-left: 1px solid black;\r\n}\r\n\r\n#rightPlayer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 10%);\r\n    grid-template-columns: 100%;\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n#rightPlayerDiscard[_ngcontent-%COMP%] {\r\n    grid-row-start: 1;\r\n    grid-row-end: 2;\r\n}\r\n\r\n#rightPlayerInPlay[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n#rightPlayerHand[_ngcontent-%COMP%] {\r\n    grid-row-start: 3;\r\n    grid-row-end: 7;\r\n    display: grid;\r\n    height: 100%;\r\n    width: 100%;\r\n    grid-template-rows: repeat(auto-fill, 10%);\r\n}\r\n\r\n#rightPlayerRevealed[_ngcontent-%COMP%] {\r\n    grid-column-start: 7;\r\n    grid-column-end: 8;\r\n}\r\n\r\n#rightPlayerDeck[_ngcontent-%COMP%]{\r\n    grid-row-start: 8;\r\n    grid-row-end: 9;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n#rightPlayerInfo[_ngcontent-%COMP%] {\r\n    grid-row-start: 9;\r\n    grid-row-end: 11;\r\n    font-size:small;\r\n    \r\n    border-top: 1px solid black;\r\n}\r\n\r\n#playerInfoText[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7O0lBRWxCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZiw0QkFBNEI7QUFDaEM7O0FBUUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTs7SUFFZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm90dG9tUGxheWVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2JvdHRvbVBsYXllckluZm8ge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblxyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNib3R0b21QbGF5ZXJEZWNrIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNib3R0b21QbGF5ZXJSZXZlYWxlZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYm90dG9tUGxheWVySGFuZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogOTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEyJSk7XHJcbn1cclxuXHJcbiNib3R0b21QbGF5ZXJJblBsYXkge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDk7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDEwO1xyXG59XHJcblxyXG4jYm90dG9tUGxheWVyRGlzY2FyZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTA7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDEwO1xyXG59XHJcblxyXG4jbGVmdFBsYXllciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwJSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4jbGVmdFBsYXllckluZm8ge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVyRGVja3tcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVyUmV2ZWFsZWR7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNDtcclxuICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGVmdFBsYXllckhhbmQge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDEwJSk7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVySW5QbGF5e1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDk7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDEwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNsZWZ0UGxheWVyRGlzY2FyZCB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTA7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDEwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4jdG9wUGxheWVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMTAlKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3RvcFBsYXllckRpc2NhcmQge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbn1cclxuXHJcbiN0b3BQbGF5ZXJJblBsYXkge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbn1cclxuXHJcbiN0b3BQbGF5ZXJIYW5kIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgNSUpO1xyXG59XHJcblxyXG4jdG9wUGxheWVyUmV2ZWFsZWQge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDg7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDk7XHJcbn1cclxuXHJcbiN0b3BQbGF5ZXJEZWNrIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA5O1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jdG9wUGxheWVySW5mbyB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTA7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDExO1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG4gICAgXHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4jcmlnaHRQbGF5ZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxMCUpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuI3JpZ2h0UGxheWVyRGlzY2FyZCB7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMjtcclxufVxyXG5cclxuI3JpZ2h0UGxheWVySW5QbGF5IHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG59XHJcblxyXG4jcmlnaHRQbGF5ZXJIYW5kIHtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA3O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCAxMCUpO1xyXG59XHJcblxyXG4jcmlnaHRQbGF5ZXJSZXZlYWxlZCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNztcclxuICAgIGdyaWQtY29sdW1uLWVuZDogODtcclxufVxyXG5cclxuI3JpZ2h0UGxheWVyRGVja3tcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA4O1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNyaWdodFBsYXllckluZm8ge1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDk7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDExO1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG4gICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNwbGF5ZXJJbmZvVGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player',
          templateUrl: './player.component.html',
          styleUrls: ['./player.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }];
      }, {
        player: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/setup-game/setup-game.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/setup-game/setup-game.component.ts ***!
    \****************************************************/

  /*! exports provided: SetupGameComponent */

  /***/
  function srcAppSetupGameSetupGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupGameComponent", function () {
      return SetupGameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../Common/src/card-library */
    "../Common/src/card-library.ts");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function SetupGameComponent_tr_8_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SetupGameComponent_tr_8_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SetupGameComponent_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SetupGameComponent_tr_8_td_8_Template, 2, 0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SetupGameComponent_tr_8_td_9_Template, 2, 0, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", player_r4.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r4.setupReady === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r4.setupReady === false);
      }
    }

    function SetupGameComponent_app_card_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 19);
      }

      if (rf & 2) {
        var card_r7 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r7)("selected", card_r7 === ctx_r1.selectedCard)("revealed", true)("orientation", "bottom");
      }
    }

    function SetupGameComponent_mat_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var preset_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", preset_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", preset_r8, " ");
      }
    }

    function SetupGameComponent_app_card_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 19);
      }

      if (rf & 2) {
        var card_r9 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r9)("selected", ctx_r3.game.setupSelectedCards.indexOf(card_r9.name) >= 0)("revealed", true)("orientation", "bottom");
      }
    }

    var SetupGameComponent = /*#__PURE__*/function () {
      function SetupGameComponent(gameService) {
        _classCallCheck(this, SetupGameComponent);

        this.gameService = gameService;
      }

      _createClass(SetupGameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.library = this.library = new _Common_src_card_library__WEBPACK_IMPORTED_MODULE_1__["CardLibrary"]();
          this.basicCards = [];
          this.kingdomCards = [];
          this.getCards();
          this.presets = this.library.getPresetNames();
          this.game = this.gameService.getGame();
          this.gameService.onGameChanged().subscribe(function (game) {
            _this30.game = game;

            if (_this30.game !== undefined) {
              _this30.selectedPreset = _this30.game.setupPreset;
            }
          });
        }
      }, {
        key: "getCards",
        value: function getCards() {
          var cards = this.library.getAllCards();

          var _iterator40 = _createForOfIteratorHelper(cards),
              _step40;

          try {
            for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
              var card = _step40.value;

              if (card.isKingdom === true) {
                this.kingdomCards.push(card);
              } else {
                this.basicCards.push(card);
              }
            }
          } catch (err) {
            _iterator40.e(err);
          } finally {
            _iterator40.f();
          }
        }
      }, {
        key: "selectPreset",
        value: function selectPreset() {
          this.gameService.setupSelectPreset(this.selectedPreset);
        }
      }, {
        key: "onReady",
        value: function onReady() {
          this.gameService.setupReady();
        }
      }, {
        key: "onStart",
        value: function onStart() {
          this.gameService.setupStartGame();
        } // if you want to start a game, everyone needs to be ready, and you need 10 cards selected

      }, {
        key: "canStart",
        value: function canStart() {
          var canStart = true;

          var _iterator41 = _createForOfIteratorHelper(this.game.players),
              _step41;

          try {
            for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
              var player = _step41.value;

              if (!player.setupReady) {
                canStart = false;
              }
            }
          } catch (err) {
            _iterator41.e(err);
          } finally {
            _iterator41.f();
          }

          if (this.game.setupSelectedCards.length !== 10) {
            canStart = false;
          }

          return canStart;
        }
      }]);

      return SetupGameComponent;
    }();

    SetupGameComponent.ɵfac = function SetupGameComponent_Factory(t) {
      return new (t || SetupGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
    };

    SetupGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SetupGameComponent,
      selectors: [["app-setup-game"]],
      decls: 32,
      vars: 6,
      consts: [["id", "playerList"], ["id", "playerTable"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["id", "basicCardContainer", 1, "content"], ["id", "basicCards"], [3, "card", "selected", "revealed", "orientation", 4, "ngFor", "ngForOf"], ["id", "kingdomCardContainer", 1, "content"], ["id", "presets"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "kingdomCards"], ["id", "nestedTable"], [1, "colorBox"], ["style", "color: green;", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], [2, "color", "green"], [2, "color", "red"], [3, "card", "selected", "revealed", "orientation"], [3, "value"]],
      template: function SetupGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Players");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SetupGameComponent_tr_8_Template, 10, 5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetupGameComponent_Template_button_click_9_listener() {
            return ctx.onReady();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetupGameComponent_Template_button_click_11_listener() {
            return ctx.onStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Basic Cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SetupGameComponent_app_card_18_Template, 1, 4, "app-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Kingdom Cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reccomended Sets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SetupGameComponent_Template_mat_select_valueChange_28_listener($event) {
            return ctx.selectedPreset = $event;
          })("selectionChange", function SetupGameComponent_Template_mat_select_selectionChange_28_listener() {
            return ctx.selectPreset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SetupGameComponent_mat_option_29_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SetupGameComponent_app_card_31_Template, 1, 4, "app-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.game.players);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canStart());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basicCards);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedPreset);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.presets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kingdomCards);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      styles: [".content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    width: 60%;\r\n  }\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n#basicCardContainer[_ngcontent-%COMP%] {\r\n    height: 20%;\r\n}\r\n\r\n#kingdomCardContainer[_ngcontent-%COMP%] {\r\n    height:80%\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n#basicCards[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height:100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 10%);\r\n    grid-gap: 1em;\r\n}\r\n\r\n#presets[_ngcontent-%COMP%] {\r\n    height: 10%;\r\n}\r\n\r\n#kingdomCards[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height:90%;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 25%);\r\n    grid-template-rows: repeat(3, 30%);\r\n    grid-gap: 1em;\r\n}\r\n\r\n#playerList[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: white;\r\n}\r\n\r\n.colorBox[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n    height: 10Px;\r\n    border: 1px solid black;\r\n}\r\n\r\n#playerTable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#playerTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #playerTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid rgb(37, 37, 37);\r\n    padding: 8px;\r\n}\r\n\r\n#nestedTable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#nestedTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-width: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ2FtZS9zZXR1cC1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7QUFFRjtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7O0lBRVYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUM7O0lBRUcsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1nYW1lL3NldHVwLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuI2Jhc2ljQ2FyZENvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuI2tpbmdkb21DYXJkQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDo4MCVcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNiYXNpY0NhcmRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDEwJSk7XHJcbiAgICBncmlkLWdhcDogMWVtO1xyXG59XHJcblxyXG4jcHJlc2V0cyB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuI2tpbmdkb21DYXJkcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDMwJSk7XHJcbiAgICBncmlkLWdhcDogMWVtO1xyXG59XHJcblxyXG4jcGxheWVyTGlzdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxOCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb2xvckJveCB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBQeDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiNwbGF5ZXJUYWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4gI3BsYXllclRhYmxlIHRkLCBcclxuICNwbGF5ZXJUYWJsZSB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbiNuZXN0ZWRUYWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4jbmVzdGVkVGFibGUgdGR7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-setup-game',
          templateUrl: './setup-game.component.html',
          styleUrls: ['./setup-game.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shop/shop.component.ts":
  /*!****************************************!*\
    !*** ./src/app/shop/shop.component.ts ***!
    \****************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game.service */
    "./src/app/game.service.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../card-pile/card-pile.component */
    "./src/app/card-pile/card-pile.component.ts");

    function ShopComponent_app_card_pile_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-pile", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_app_card_pile_6_Template_app_card_pile_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onPileClicked(item_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("location", "Shop")("cards", item_r2)("revealed", true)("orientation", "bottom");
      }
    }

    function ShopComponent_app_card_pile_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-pile", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_app_card_pile_9_Template_app_card_pile_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var item_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onPileClicked(item_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", item_r5)("location", "Shop")("revealed", true)("orientation", "bottom");
      }
    }

    var ShopComponent = /*#__PURE__*/function () {
      function ShopComponent(gameService) {
        _classCallCheck(this, ShopComponent);

        this.gameService = gameService;
        this.basicCards = [];
        this.kingdomCards = [];
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.shop = this.gameService.getGame().shop;
          this.trash = this.gameService.getGame().trash;
          this.initShopPiles();
          this.gameService.onGameChanged().subscribe(function (game) {
            _this31.shop = game.shop;
            _this31.trash = game.trash;

            _this31.initShopPiles();
          });
        }
      }, {
        key: "initShopPiles",
        value: function initShopPiles() {
          this.basicCards = [];
          this.kingdomCards = [];

          for (var item in this.shop) {
            if (this.shop[item][0].isKingdom) {
              this.kingdomCards.push(this.shop[item]);
            } else {
              this.basicCards.push(this.shop[item]);
            }
          }
        }
      }, {
        key: "onPileClicked",
        value: function onPileClicked(cards) {
          this.gameService.onCardSelected(cards[0]);
        }
      }]);

      return ShopComponent;
    }();

    ShopComponent.ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]));
    };

    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["app-shop"]],
      decls: 10,
      vars: 7,
      consts: [["id", "title"], ["id", "container"], ["id", "basicCards"], [3, "location", "cards", "revealed", "orientation", "click", 4, "ngFor", "ngForOf"], [3, "cards", "location", "showLocationLabel", "revealed", "orientation"], ["id", "kingdomCards"], [3, "cards", "location", "revealed", "orientation", "click", 4, "ngFor", "ngForOf"], [3, "location", "cards", "revealed", "orientation", "click"], [3, "cards", "location", "revealed", "orientation", "click"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShopComponent_app_card_pile_6_Template, 1, 4, "app-card-pile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-card-pile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShopComponent_app_card_pile_9_Template, 1, 4, "app-card-pile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basicCards);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx.trash)("location", "Trash")("showLocationLabel", true)("revealed", true)("orientation", "bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kingdomCards);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_pile_card_pile_component__WEBPACK_IMPORTED_MODULE_4__["CardPileComponent"]],
      styles: ["#title[_ngcontent-%COMP%] {\r\n    height: 5%;\r\n    font-size: small;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    height: 95%;\r\n}\r\n\r\n#basicCards[_ngcontent-%COMP%] { \r\n    display: grid;    \r\n    grid-template-columns: repeat(8, 6%);\r\n    -moz-column-gap: 4em;\r\n         column-gap: 4em;\r\n\r\n    height: 25%;\r\n}\r\n\r\n#kingdomCards[_ngcontent-%COMP%] { \r\n    margin-top: 1px;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(5, calc(10% - 2em));\r\n    grid-template-rows: repeat(2, calc(50% - 1em));\r\n    -moz-column-gap: 10em;\r\n         column-gap: 10em;\r\n\r\n    height: 75%;\r\n}\r\n\r\napp-card-pile[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxvQkFBZTtTQUFmLGVBQWU7O0lBRWYsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELDhDQUE4QztJQUM5QyxxQkFBZ0I7U0FBaEIsZ0JBQWdCOztJQUVoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUge1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbiNiYXNpY0NhcmRzIHsgXHJcbiAgICBkaXNwbGF5OiBncmlkOyAgICBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDYlKTtcclxuICAgIGNvbHVtbi1nYXA6IDRlbTtcclxuXHJcbiAgICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuI2tpbmdkb21DYXJkcyB7IFxyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBjYWxjKDEwJSAtIDJlbSkpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgY2FsYyg1MCUgLSAxZW0pKTtcclxuICAgIGNvbHVtbi1nYXA6IDEwZW07XHJcblxyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbn1cclxuXHJcbmFwcC1jYXJkLXBpbGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shop',
          templateUrl: './shop.component.html',
          styleUrls: ['./shop.component.css']
        }]
      }], function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/status.service.ts":
  /*!***********************************!*\
    !*** ./src/app/status.service.ts ***!
    \***********************************/

  /*! exports provided: StatusService */

  /***/
  function srcAppStatusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusService", function () {
      return StatusService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StatusService = /*#__PURE__*/function () {
      function StatusService() {
        var _this32 = this;

        _classCallCheck(this, StatusService);

        this.onStatusChanged = function () {
          return _this32.statusSubject.asObservable();
        };

        status = '';
        this.statusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(StatusService, [{
        key: "setStatus",
        value: function setStatus(newStatus) {
          this.status = newStatus;
          this.statusSubject.next(this.status);
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          return this.status;
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(game) {
          var status = '';
          var currentPlayer = game.players[game.currentPlayer];

          if (currentPlayer !== undefined) {
            status += currentPlayer.name + '\'s turn. ';
            status += currentPlayer.state + ' phase';
            this.setStatus(status);
          } else {
            this.setStatus('setting up game');
          }
        }
      }]);

      return StatusService;
    }();

    StatusService.ɵfac = function StatusService_Factory(t) {
      return new (t || StatusService)();
    };

    StatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StatusService,
      factory: StatusService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Colin\Desktop\Code\Dominion\WebApp\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map