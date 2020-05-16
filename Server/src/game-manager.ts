
import { Game, GameState } from '../../Common/src/game'
import { Player } from '../../Common/src/player';

export class GameManager
{

    // active games
    private gameList: Game[];

    constructor() {
        this.gameList = [];
    }

    // gets
    public getGameList() {
        return this.gameList;
    }

    // respond to a join request
    // this got kinda ugly, can we pretty it up?
    public joinGame(data: any, resultCallback: any, connectedSocket: any) : boolean {
        let opOk = true;
        let opError = "";
        const opReturnValue: any = {};
        console.log(data.playerName + ' joining game: ' + data.gameName);

        let reconnectedPlayer : Player;

        const joinGame: Game = this.gameList.find(game => game.name === data.gameName);
        if(joinGame !== undefined)
        {
          // check for reconnect
          for(const player of joinGame.players)
          {
            if(player.name === data.playerName)
            {
              if(player.connected !== true)
              {
                  player.socketId = connectedSocket.socketId;
                  player.SetConnected(true);
                  reconnectedPlayer = player;
              }
            }
          }
          if(reconnectedPlayer === undefined)
          {
            if(joinGame.state !== GameState.Setup)
            {
              opOk = false;
              opError = "Unable to join game, game is already in progress";
            }
            if(opOk === true)
            {
              if(joinGame.players.length >= 4)
              {
                opOk = false;
                opError = "Unable to join game, player limit reached";
              }
              if(opOk === true)
              {
                for(const player of joinGame.players)
                {
                  if(player.name === data.playerName)
                  {
                    // if there is a player already connected with that name, you can't join
                    if(player.connected === true)
                    {
                      opOk = false;
                      opError = "There is already a player in the selected game with that name";
                    }
                  }
                  // player colors have to be unique
                  if(player.color === data.playerColor)
                  {
                      opOk = false;
                      opError = "There is already a player in the selected game with that favorite color";
                  }
                }
              }
            }
          }
          if(opOk === true)
          {
            let newPlayer: Player;
            if(reconnectedPlayer === undefined)
            {
              newPlayer = new Player(data.playerName, data.playerColor, connectedSocket.id);
              joinGame.addPlayer(newPlayer);
            }
            else
            {
              newPlayer = reconnectedPlayer;
            }
            opReturnValue.game = joinGame;
            opReturnValue.player = newPlayer;
          }
        }
        else
        {
          opError = "No game of that name";
        }
        resultCallback({ok: opOk, error: opError, returnValue: opReturnValue});
        return opOk;
    }

    public createGame(gameName: string, resultCallback: any) : boolean {
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

        return opOk;
    }

    public onDisconnect(connectedSocket: any) {
        for(const game of this.gameList)
        {
            const foundPlayer: Player = game.findPlayer(connectedSocket.id);
            if(foundPlayer !== undefined)
            {
                console.log(foundPlayer.name + " disconnected");
                foundPlayer.SetConnected(false);
            }

            if(game.hasNoActivePlayers())
            {
                const index = this.gameList.indexOf(game);
                this.gameList.splice(index);
            }
        }
    }
}