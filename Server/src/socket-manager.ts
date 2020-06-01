import socket from 'socket.io'
import async from 'async'
import { Game } from '../../Common/src/game';
import { Player, HumanPlayer } from '../../Common/src/player';
import { ServerInterface } from '../../Common/src/server-interface';

export class SocketManager implements ServerInterface{

    private server: any;
    // active games
    private gameList: Game[];

    private io: any;
    private socketsByGameName: Map<string, any[]>;

    constructor(server: any) {
        this.server = server;
        this.gameList = [];
        this.socketsByGameName = new Map<string, any[]>();
        this.io = socket(this.server);
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
        this.io.on('connection', (connectedSocket) => {
            console.log('made socket connection', connectedSocket.id);

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
                    this.socketsByGameName[data.gameName].push(connectedSocket);
                }
                this.io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on('create-game', (gameName: string, resultCallback: any) => {
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
                    const newGame = new Game(gameName, this.updateGame);
                    this.gameList.push(newGame);
                    this.socketsByGameName[gameName] = [];
                }

                resultCallback({ok: opOk, error:opError});
                this.io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on("leave-game", (data: any, resultCallback: any) => {
                let opOk = true;
                let opError = "";

                const game: Game = this.getGame(data.gameName);
                if(game !== undefined)
                {
                    const error = game.playerLeave(data.playerIndex);
                    if(error !== "")
                    {
                        opOk = false;
                        opError = error;
                    }
                    else {
                        if(game.hasNoActivePlayers())
                        {
                            this.socketsByGameName.delete(game.name);
                            const index = this.gameList.indexOf(game);
                            this.gameList.splice(index, 1);
                        }
                    }
                }
                else
                {
                    opOk = false;
                    opError = "No game with that name";
                }

                resultCallback({ok: opOk, error:opError});
                this.io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on('add-bot', (data: any, resultCallback: any) => {
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
                this.io.sockets.emit('games-updated', this.gameList);
                console.log("done add bot");
            });

            connectedSocket.on('request-games-list', (data: any, resultCallback: any) => {
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
                        this.socketsByGameName.delete(game.name);
                        const index = this.gameList.indexOf(game);
                        this.gameList.splice(index, 1);
                    }
                }
                this.io.sockets.emit('games-updated', this.gameList);
            });

            connectedSocket.on('setup-card-selected', (data: any, resultCallback: any) => {
                console.log('card selected');
                const game: Game = this.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    game.setupSelectCard(data.cardName);
                    this.updateGame(game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });

            connectedSocket.on('setup-preset-selected', (data: any, resultCallback: any) => {
                console.log('preset selected');
                const game: Game = this.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    game.setupSelectPreset(data.presetName);
                    this.updateGame(game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });

            connectedSocket.on('setup-player-ready', (data: any, resultCallback: any) => {
                console.log('player ready');
                const game: Game = this.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    bOk = game.setupPlayerReady(data.playerName);
                    if(bOk === true)
                        this.updateGame(game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });

            connectedSocket.on('setup-start-game', (data: any, resultCallback: any) => {
                console.log('game start');
                const game: Game = this.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    bOk = game.setupStartGame();
                    if(bOk === true)
                    {
                        game.advanceGame();
                        this.updateGame(game);
                    }
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});
            });
            connectedSocket.on('prompt-clicked', (data: any, resultCallback: any) => {
                console.log('prompt clicked (' + data.prompt + ')');
                const game: Game = this.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    game.onPromptClicked(data.playerIndex, data.prompt, data.cards);
                    this.updateGame(game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});

            });
            connectedSocket.on('cards-selected', (data: any, resultCallback: any) => {
                console.log('cards-selected (' + data.cards + ')');
                const game: Game = this.getGame(data.gameName);
                let bOk: boolean = true;
                if(game !== undefined)
                {
                    game.onCardsSelected(data.playerIndex, data.cards);
                    this.updateGame(game);
                }
                else
                    bOk = false;

                resultCallback({ok: bOk});

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
    }

    // override ServerInterface updateGame
    public updateGame(game: Game) {
        for(const playerSocket of this.socketsByGameName[game.name])
        {
            playerSocket.emit('game-updated', game);
        }
    }

}