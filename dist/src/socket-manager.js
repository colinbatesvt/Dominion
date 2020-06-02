"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var socket_io_1 = __importDefault(require("socket.io"));
var game_1 = require("../Common/src/game");
var player_1 = require("../Common/src/player");
var SocketManager = /** @class */ (function () {
    function SocketManager(server) {
        this.server = server;
        this.gameList = [];
        this.socketsByGameName = new Map();
        this.io = socket_io_1["default"](this.server);
    }
    SocketManager.prototype.getGame = function (gameName) {
        for (var _i = 0, _a = this.gameList; _i < _a.length; _i++) {
            var game = _a[_i];
            if (game.name === gameName)
                return game;
        }
        return undefined;
    };
    SocketManager.prototype.setupSockets = function () {
        var _this = this;
        // socket setup
        this.io.on('connection', function (connectedSocket) {
            console.log('made socket connection', connectedSocket.id);
            connectedSocket.on('join-game', function (data, resultCallback) {
                var opOk = true;
                var opError = "";
                var opReturnValue = {};
                console.log(data.playerName + ' joining game: ' + data.gameName);
                var joinGame = _this.gameList.find(function (game) { return game.name === data.gameName; });
                if (joinGame !== undefined) {
                    var error = joinGame.playerJoin(data.playerName, data.playerColor, connectedSocket.id);
                    if (error === "") {
                        opOk = true;
                        opReturnValue.game = joinGame;
                        opReturnValue.player = joinGame.findPlayerByName(data.playerName);
                    }
                    else {
                        opOk = false;
                        opError = error;
                    }
                }
                else {
                    opOk = false;
                    opError = "No game of that name";
                }
                resultCallback({ ok: opOk, error: opError, returnValue: opReturnValue });
                if (opOk === true) {
                    _this.socketsByGameName[data.gameName].push(connectedSocket);
                    _this.io.sockets.emit('games-updated', _this.gameList);
                }
            });
            connectedSocket.on('create-game', function (gameName, resultCallback) {
                var opError = "";
                var opOk = true;
                for (var _i = 0, _a = _this.gameList; _i < _a.length; _i++) {
                    var game = _a[_i];
                    if (game.name === gameName) {
                        opError = "game with that name already exists";
                        opOk = false;
                    }
                }
                if (opOk === true) {
                    console.log('creating game: ' + gameName);
                    var newGame = new game_1.Game(gameName, _this.updateGame);
                    _this.gameList.push(newGame);
                    _this.socketsByGameName[gameName] = [];
                }
                resultCallback({ ok: opOk, error: opError });
                _this.io.sockets.emit('games-updated', _this.gameList);
            });
            connectedSocket.on("leave-game", function (data, resultCallback) {
                var opOk = true;
                var opError = "";
                var game = _this.getGame(data.gameName);
                if (game !== undefined) {
                    var error = game.playerLeave(data.playerIndex);
                    if (error !== "") {
                        opOk = false;
                        opError = error;
                    }
                    else {
                        if (game.hasNoActivePlayers()) {
                            _this.socketsByGameName["delete"](game.name);
                            var index = _this.gameList.indexOf(game);
                            _this.gameList.splice(index, 1);
                        }
                    }
                }
                else {
                    opOk = false;
                    opError = "No game with that name";
                }
                resultCallback({ ok: opOk, error: opError });
                _this.io.sockets.emit('games-updated', _this.gameList);
            });
            connectedSocket.on('add-bot', function (data, resultCallback) {
                var opOk = true;
                var opError = "";
                var game = _this.getGame(data.gameName);
                if (game !== undefined) {
                    var error = game.addBot(data.botName);
                    if (error !== "") {
                        opOk = false;
                        opError = error;
                    }
                }
                else {
                    opOk = false;
                    opError = "No game with that name";
                }
                resultCallback({ ok: opOk, error: opError });
                _this.io.sockets.emit('games-updated', _this.gameList);
                console.log("done add bot");
            });
            connectedSocket.on('request-games-list', function (data, resultCallback) {
                resultCallback({ ok: true });
                connectedSocket.emit('games-updated', _this.gameList);
            });
            connectedSocket.on('disconnect', function () {
                for (var _i = 0, _a = _this.gameList; _i < _a.length; _i++) {
                    var game = _a[_i];
                    var foundPlayer = game.findPlayerById(connectedSocket.id);
                    if (foundPlayer !== undefined) {
                        if (foundPlayer instanceof player_1.HumanPlayer) {
                            var humanPlayer = foundPlayer;
                            console.log(foundPlayer.name + " disconnected");
                            humanPlayer.SetConnected(false);
                        }
                    }
                    if (game.hasNoActivePlayers()) {
                        _this.socketsByGameName["delete"](game.name);
                        var index = _this.gameList.indexOf(game);
                        _this.gameList.splice(index, 1);
                    }
                }
                _this.io.sockets.emit('games-updated', _this.gameList);
            });
            connectedSocket.on('setup-card-selected', function (data, resultCallback) {
                console.log('card selected');
                var game = _this.getGame(data.gameName);
                var bOk = true;
                if (game !== undefined) {
                    game.setupSelectCard(data.cardName);
                    _this.updateGame(game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('setup-preset-selected', function (data, resultCallback) {
                console.log('preset selected');
                var game = _this.getGame(data.gameName);
                var bOk = true;
                if (game !== undefined) {
                    game.setupSelectPreset(data.presetName);
                    _this.updateGame(game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('setup-player-ready', function (data, resultCallback) {
                console.log('player ready');
                var game = _this.getGame(data.gameName);
                var bOk = true;
                if (game !== undefined) {
                    bOk = game.setupPlayerReady(data.playerName);
                    if (bOk === true)
                        _this.updateGame(game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('setup-start-game', function (data, resultCallback) {
                console.log('game start');
                var game = _this.getGame(data.gameName);
                var bOk = true;
                if (game !== undefined) {
                    bOk = game.setupStartGame();
                    if (bOk === true) {
                        game.advanceGame();
                        _this.updateGame(game);
                    }
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('prompt-clicked', function (data, resultCallback) {
                console.log('prompt clicked (' + data.prompt + ')');
                var game = _this.getGame(data.gameName);
                var bOk = true;
                if (game !== undefined) {
                    game.onPromptClicked(data.playerIndex, data.prompt, data.cards);
                    _this.updateGame(game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('cards-selected', function (data, resultCallback) {
                console.log('cards-selected (' + data.cards + ')');
                var game = _this.getGame(data.gameName);
                var bOk = true;
                if (game !== undefined) {
                    game.onCardsSelected(data.playerIndex, data.cards);
                    _this.updateGame(game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
        });
        // start game loop
        /*
        const UPS = 20;
        const gameLoop = setInterval(() => {
            for(const game of this.gameList)
            {
                if(game.needsAdvance)
                {
                    game.advanceGame(this);
                    this.updateGame(game);
                }
            }
        }, 1000 / UPS);
        */
    };
    // override ServerInterface updateGame
    SocketManager.prototype.updateGame = function (game) {
        for (var _i = 0, _a = this.socketsByGameName[game.name]; _i < _a.length; _i++) {
            var playerSocket = _a[_i];
            playerSocket.emit('game-updated', game);
        }
    };
    return SocketManager;
}());
exports.SocketManager = SocketManager;
//# sourceMappingURL=socket-manager.js.map