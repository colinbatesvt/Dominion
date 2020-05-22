import { Player, GainLocation, PlayerState, HumanPlayer } from "./player";
import { Card } from "./card";
import { CardLibrary } from "./card-library";
import { CardDefinition } from "./card-definition";
import { Estate } from "./CardDefinitions/estate";
import { Copper } from "./CardDefinitions/copper";

export enum GameState {
    Setup = 'setup',
    PlayGame = 'play',
    GameOver = 'over'
};

export class Game {
    public state: GameState;
    public name: string;
    public players: Player[];
    public currentPlayer: number;
    public shop: Record<string, Card[]>;
    public trash: Card[];

    public setupSelectedCards: string[];
    public setupPreset: string;

    public library: CardLibrary;

    constructor(gameName: string) {
        this.name = gameName;
        this.state = GameState.Setup;
        this.players = [];
        this.currentPlayer = -1;
        this.shop = {};
        this.trash = [];

        this.setupSelectedCards = [];
        this.setupPreset = '';


        this.library = new CardLibrary;
    }

    public setGameState(newState: GameState)
    {
        this.state = newState;
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
           if(player instanceof HumanPlayer)
           {
               const humanPlayer: HumanPlayer = player as HumanPlayer;
                if(humanPlayer.connected)
                    noActivePlayers = false;
           }
       }
       return noActivePlayers;
    }

    public findPlayerById(socketId: any) : Player | undefined
    {
        for (const player of this.players)
        {
            if(player instanceof HumanPlayer)
            {
                const humanPlayer: HumanPlayer = player as HumanPlayer;
                if(humanPlayer.socketId === socketId)
                    return player;
            }
        }

        return undefined;
    }

    public findPlayerByName(playerName: string) : Player | undefined
    {
        for (const player of this.players)
        {
            if(player.name === playerName)
                return player;
        }

        return undefined;
    }

    //returns an error message or blank string on success
    public playerJoin(playerName: string, playerColor: string, socketId : any) : string {
        
          // check for reconnect
        for(const player of this.players)
        {
            if(player instanceof HumanPlayer)
            {
                const humanPlayer = player as HumanPlayer;
                if(humanPlayer.name === playerName)
                {
                    if(humanPlayer.connected !== true)
                    {
                        humanPlayer.socketId = socketId;
                        humanPlayer.SetConnected(true);
                        return "";
                    }
                }
            }
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
        
        for(const player of this.players)
        {
            //player names have to be unique
            if(player.name === playerName)
            {
                return "There is already a player in the selected game with that name";
            }
            
            // player colors have to be unique
            if(player.color === playerColor)
            {
               return "There is already a player in the selected game with that favorite color";
            }
        }

        //we got past all the checks, let the new guy in
        let newPlayer: HumanPlayer = new HumanPlayer(playerName, playerColor, socketId, this.players.length);
        this.players.push(newPlayer);

        return "";
    }

    // keep track of which cards are selected during the setup step
    public setupSelectCard(cardName: string)
    {
        // select a card, or deselect it if it's already selected

        const index: number = this.setupSelectedCards.indexOf(cardName);
        if(index == -1)
        {
            // only 10 kingdom cards can be selected at a time
            if(this.setupSelectedCards.length < 10 )
            {
                this.setupSelectedCards.push(cardName);
                
                // once you change the selected cards, that preset is no longer selected
                this.setupPreset = '';
            }
        }
        else
        {
            this.setupSelectedCards.splice(index, 1);

            // once you change the selected cards, that preset is no longer selected
            this.setupPreset = '';
        }
    }

    public setupSelectPreset(presetName: string) : boolean
    {
        const presetCardNames: string[] = this.library.getPresetCardNames(presetName);
        if(presetCardNames !== undefined)
        {
            this.setupPreset = presetName;
            this.setupSelectedCards = [];
            for(const cardName of presetCardNames)
            {
                this.setupSelectedCards.push(cardName);
            }
            return true;
        }

        return false;
    }

    // toggle whether the player is ready or not
    public setupPlayerReady(playerName: string) : boolean {
        const player: Player | undefined = this.findPlayerByName(playerName);
    
        if(player !== undefined)
        {
            if(player instanceof HumanPlayer)
            {
                const humanPlayer : HumanPlayer = player as HumanPlayer;
                humanPlayer.setupReady = !player.setupReady;
            }
            return true;
        }
        else
            return false;
    }

    public setupStartGame() : boolean {

        // all humasn players must be ready
        for(const player of this.players)
        {
            if(player instanceof HumanPlayer)
            {
                const humanPlayer : HumanPlayer = player as HumanPlayer;
                if(humanPlayer.setupReady === false)
                    return false;
            }
        }

        // we need 10 kingdom cards
        if(this.setupSelectedCards.length !== 10)
            return false;

        // time to setup the game!
        // distribute cards to the shop
        const basicCards: string[] = this.library.getBasicCardNames();

        for(const basicCard of basicCards)
        {
            this.shop[basicCard] = [];
            const definition : CardDefinition = this.library.getCardDefinition(basicCard);
            for (let i = 0; i < definition.startingAmount; i++) 
            {
                const newCard: Card | null = this.library.getCard(basicCard);

                if(newCard !== null)
                    this.shop[basicCard].push(newCard);
            }
        }

        for(const kingdomCard of this.setupSelectedCards)
        {
            this.shop[kingdomCard] = [];
            const definition : CardDefinition = this.library.getCardDefinition(kingdomCard);
            for (let i = 0; i < definition.startingAmount; i++) 
            {
                const newCard: Card | null = this.library.getCard(kingdomCard);

                if(newCard !== null)
                    this.shop[kingdomCard].push(newCard);
            }
        }

        for(const player of this.players)
        {
            //add 3 estates
            for(let i = 0; i < 3; i++)
            {
                const estate: Card | undefined = this.shop[Estate.cardName].pop();
                if(estate !== undefined)
                {
                    player.gain(GainLocation.deck, estate);
                }
            }

            //add 7 coppers
            for(let i = 0; i < 7; i++)
            {
                const estate: Card | undefined = this.shop[Copper.cardName].pop();
                if(estate !== undefined)
                {
                    player.gain(GainLocation.deck, estate);
                }
            }

            // now that we have our starting deck, shuffle and draw 5
            player.shuffle();

            player.draw(5);
        }

        // pick a starting player
        this.currentPlayer = Math.floor(Math.random() * this.players.length);
        this.players[this.currentPlayer].setState(PlayerState.Action);
        
        this.setGameState(GameState.PlayGame);
        return true;
    }
}