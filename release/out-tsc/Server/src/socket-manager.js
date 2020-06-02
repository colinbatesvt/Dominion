import socket from 'socket.io';
import { Game } from '../../Common/src/game';
import { HumanPlayer } from '../../Common/src/player';
export class SocketManager {
    initialize(server) {
        this.server = server;
        this.gameList = [];
        this.io = socket(this.server);
        this.setupSockets();
    }
    getGame(gameName) {
        for (const game of this.gameList) {
            if (game.name === gameName)
                return game;
        }
        return undefined;
    }
    setupSockets() {
        // socket setup
        this.io.on('connection', (connectedSocket) => {
            console.log('made socket connection', connectedSocket.id);
            connectedSocket.on('new-message', (message) => {
                console.log('chat message: ' + message);
                this.io.sockets.emit('new-message', message);
            });
            connectedSocket.on('join-game', (data, resultCallback) => {
                let opOk = true;
                let opError = "";
                const opReturnValue = {};
                console.log(data.playerName + ' joining game: ' + data.gameName);
                const joinGame = this.gameList.find(game => game.name === data.gameName);
                if (joinGame !== undefined) {
                    const error = joinGame.playerJoin(data.playerName, data.playerColor, connectedSocket.id);
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
                    connectedSocket.join(data.gameName);
                }
                this.io.sockets.emit('games-updated', this.gameList);
            });
            connectedSocket.on('create-game', (gameName, resultCallback) => {
                let opError = "";
                let opOk = true;
                for (const game of this.gameList) {
                    if (game.name === gameName) {
                        opError = "game with that name already exists";
                        opOk = false;
                    }
                }
                if (opOk === true) {
                    console.log('creating game: ' + gameName);
                    const newGame = new Game(gameName);
                    this.gameList.push(newGame);
                }
                resultCallback({ ok: opOk, error: opError });
                this.io.sockets.emit('games-updated', this.gameList);
            });
            connectedSocket.on('add-bot', (data, resultCallback) => {
                let opOk = true;
                let opError = "";
                const game = this.getGame(data.gameName);
                if (game !== undefined) {
                    const error = game.addBot(data.botName);
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
                this.io.sockets.emit('games-updated', this.gameList);
                console.log("done add bot");
            });
            connectedSocket.on('request-games-list', (data, resultCallback) => {
                resultCallback({ ok: true });
                connectedSocket.emit('games-updated', this.gameList);
            });
            connectedSocket.on('disconnect', () => {
                console.log('player left');
                for (const game of this.gameList) {
                    const foundPlayer = game.findPlayerById(connectedSocket.id);
                    if (foundPlayer !== undefined) {
                        if (foundPlayer instanceof HumanPlayer) {
                            const humanPlayer = foundPlayer;
                            console.log(foundPlayer.name + " disconnected");
                            humanPlayer.SetConnected(false);
                        }
                    }
                    if (game.hasNoActivePlayers()) {
                        const index = this.gameList.indexOf(game);
                        this.gameList.splice(index);
                    }
                }
                this.io.sockets.emit('games-updated', this.gameList);
            });
            connectedSocket.on('setup-card-selected', (data, resultCallback) => {
                console.log('card selected');
                const game = this.getGame(data.gameName);
                let bOk = true;
                if (game !== undefined) {
                    game.setupSelectCard(data.cardName);
                    this.io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('setup-preset-selected', (data, resultCallback) => {
                console.log('preset selected');
                const game = this.getGame(data.gameName);
                let bOk = true;
                if (game !== undefined) {
                    game.setupSelectPreset(data.presetName);
                    this.io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('setup-player-ready', (data, resultCallback) => {
                console.log('player ready');
                const game = this.getGame(data.gameName);
                let bOk = true;
                if (game !== undefined) {
                    bOk = game.setupPlayerReady(data.playerName);
                    if (bOk === true)
                        this.io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
            connectedSocket.on('setup-start-game', (data, resultCallback) => {
                console.log('game start');
                const game = this.getGame(data.gameName);
                let bOk = true;
                if (game !== undefined) {
                    bOk = game.setupStartGame();
                    // if(bOk === true)
                    // this.io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;
                resultCallback({ ok: bOk });
            });
        });
    }
    // override ServerInterface updateGame
    updateGame(game) {
        this.io.in(game.name).emit('game-updated', game);
    }
}
SocketManager.instance = new SocketManager();
//# sourceMappingURL=socket-manager.js.map