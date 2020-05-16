import socket from 'socket.io'
import { GameManager } from './game-manager';

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
        });
    }

}