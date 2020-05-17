import { Player } from "./player";
import { Card } from "./card";
import { CardLibrary } from "./card-library";
import { CardDefinition } from "./card-definition";

export enum GameState {
    Setup = 'setup',
    PlayGame = 'play',
    GameOver = 'over'
};

export class Game {
    public state: GameState;
    public name: string;
    public players: Player[];
    public shop: Record<string, Card[]>;

    public setupSelectedCards: string[];
    public setupPreset: string;

    public library: CardLibrary;

    constructor(gameName: string) {
        this.name = gameName;
        this.state = GameState.Setup;
        this.players = [];
        this.shop = {};

        this.setupSelectedCards = [];
        this.setupPreset = '';

        this.library = new CardLibrary;
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

    public findPlayerById(socketId: any) : Player | undefined
    {
        for (const player of this.players)
        {
            if(player.socketId === socketId)
                return player;
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
            player.setupReady = !player.setupReady;
            return true;
        }
        else
            return false;
    }

    public setupStartGame() : boolean {

        // all players must be ready
        for(const player of this.players)
        {
            if(player.setupReady === false)
                return false;
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

        this.setGameState(GameState.PlayGame);
        return true;
    }
}