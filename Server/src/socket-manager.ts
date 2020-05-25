import socket from 'socket.io'
import { Game } from '../../Common/src/game';
import { Player, HumanPlayer } from '../../Common/src/player';

export class SocketManager {

    private server: any;
    // active games
    private gameList: Game[];
    constructor(server: any) {
            this.server = server;
            this.gameList = [];
    }

    public getGame(gameName: string) : Game
    {
        for(const game of this.gameList)
        {
            if(game.name === gameName)
                return game;
        }

        return undefined;
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
                let opOk = true;
                let opError = "";
                const opReturnValue: any = {};
                console.log(data.playerName + ' joining game: ' + data.gameName);

                const joinGame: Game = this.gameList.find(game => game.name === data.gameName);
                if(joinGame !== undefined)
                {
                    const error = joinGame.playerJoin(data.playerName, data.playerColor, connectedSocket.id);

                    if(error === "")
                    {
                        opOk = true;
                        opReturnValue.game = joinGame;
                        opReturnValue.player = joinGame.findPlayerByName(data.playerName);
                    }
                    else
                    {
                        opOk = false;
                        opError = error;
                    }
                }
                else
                {
                    opOk = false;
                    opError = "No game of that name";
                }
                resultCallback({ok: opOk, error: opError, returnValue: opReturnValue});
                if(opOk === true)
                {
                    connectedSocket.join(data.gameName);
                }
                io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on('create-game', (gameName: string, resultCallback) => {
                let opError = "";
                let opOk = true;
                for(const game of this.gameList)
                {
                    if(game.name === gameName)
                    {
                        opError = "game with that name already exists";
                        opOk = false;
                    }
                }

                if(opOk === true)
                {
                    console.log('creating game: ' + gameName);
                    const newGame = new Game(gameName);
                    this.gameList.push(newGame);
                }

                resultCallback({ok: opOk, error:opError});
                io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on('add-bot', (data, resultCallback) => {
                let opOk = true;
                let opError = "";

                const game: Game = this.getGame(data.gameName);
                if(game !== undefined)
                {
                    const error = game.addBot(data.botName);
                    if(error !== "")
                    {
                        opOk = false;
                        opError = error;
                    }
                }
                else
                {
                    opOk = false;
                    opError = "No game with that name";
                }

                resultCallback({ok: opOk, error:opError});
                io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on('request-games-list', (data, resultCallback) => {
                resultCallback({ok: true});
                connectedSocket.emit('games-updated', this.gameList);
            });

            connectedSocket.on('disconnect', () => {
                console.log('player left');
                for(const game of this.gameList)
                {
                    const foundPlayer: Player | undefined = game.findPlayerById(connectedSocket.id);
                    if(foundPlayer !== undefined)
                    {
                        if(foundPlayer instanceof HumanPlayer)
                        {
                            const humanPlayer = foundPlayer as HumanPlayer;
                            console.log(foundPlayer.name + " disconnected");
                            humanPlayer.SetConnected(false);
                        }
                    }

                    if(game.hasNoActivePlayers())
                    {
                        const index = this.gameList.indexOf(game);
                        this.gameList.splice(index);
                    }
                }
                io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on('setup-card-selected', (data, resultCallback) => {
                console.log('card selected');
                const game: Game = this.getGame(data.gameName);
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
                const game: Game = this.getGame(data.gameName);
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
                const game: Game = this.getGame(data.gameName);
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
                const game: Game = this.getGame(data.gameName);
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