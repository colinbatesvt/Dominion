import socket from 'socket.io'
import { GameManager } from './game-manager';
import { Game } from '../../Common/src/game';

export class SocketManager {

    private server: any;
    private gameManager: GameManager;
    constructor(server: any, gameManager: GameManager) {
            this.server = server;
            this.gameManager = gameManager;
    }

    public setupSockets() {
        // socket setup
        const io = socket(this.server);
        io.on('connection', (connectedSocket) => {
            console.log('made socket connection', connectedSocket.id);

            connectedSocket.on('new-message', (message) => {
                console.log('chat message: ' + message);
                io.sockets.emit('new-message', message);
            });

            connectedSocket.on('join-game', (data, resultCallback) => {
                const ok = this.gameManager.joinGame(data, resultCallback, connectedSocket);
                if(ok === true)
                {
                    connectedSocket.join(data.gameName);
                }
                io.sockets.emit('games-updated', this.gameManager.getGameList());
            });

            connectedSocket.on('create-game', (gameName: string, resultCallback) => {
                this.gameManager.createGame(gameName, resultCallback);
                io.sockets.emit('games-updated', this.gameManager.getGameList());
            });

            connectedSocket.on('request-games-list', (data, resultCallback) => {
                resultCallback({ok: true});
                connectedSocket.emit('games-updated', this.gameManager.getGameList());
            });

            connectedSocket.on('disconnect', () => {
                console.log('player left');
                this.gameManager.onDisconnect(connectedSocket);
                io.sockets.emit('games-updated', this.gameManager.getGameList());
            });

            connectedSocket.on('setup-card-selected', (data, resultCallback) => {
                console.log('card selected');
                const game: Game = this.gameManager.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    game.setupSelectCard(data.cardName);
                    io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });

            connectedSocket.on('setup-preset-selected', (data, resultCallback) => {
                console.log('preset selected');
                const game: Game = this.gameManager.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    game.setupSelectPreset(data.presetName);
                    io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });

            connectedSocket.on('setup-player-ready', (data, resultCallback) => {
                console.log('player ready');
                const game: Game = this.gameManager.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    bOk = game.setupPlayerReady(data.playerName);
                    if(bOk === true)
                        io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });

            connectedSocket.on('setup-start-game', (data, resultCallback) => {
                console.log('game start');
                const game: Game = this.gameManager.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    bOk = game.setupStartGame();
                    if(bOk === true)
                        io.in(data.gameName).emit('game-updated', game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });
        });
    }

}