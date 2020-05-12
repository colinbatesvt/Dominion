import { Player } from "./player";

enum GameState {
    Setup = 1,
    PlayGame,
    GameOver
};

export class Game {
    public state: GameState;
    public name: string;
    public players: Player[];

    constructor(gameName: string) {
        this.name = gameName;
        this.state = GameState.Setup;
        this.players = [];
    }

    public setGameState(newState: GameState)
    {
        this.state = newState;
    }

    public addPlayer(newPlayer: Player){
        this.players.push(newPlayer);
    }

    public removePlayer(remove: Player)
    {
        const index: number = this.players.indexOf(remove);
        this.players.splice(index, 1);
    }

    // does this game have any active players
    public hasNoActivePlayers() : boolean {
       let noActivePlayers: boolean = true;
       for(const player of this.players)
       {
           if(player.connected)
                noActivePlayers = false;
       }
       return noActivePlayers;
    }

    public findPlayer(socketId: any)
    {
        for (const player of this.players)
        {
            if(player.socketId === socketId)
                return player;
        }

    }
}