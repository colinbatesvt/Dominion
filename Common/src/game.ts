import { Player, Location, PlayerState, HumanPlayer, AIPlayer, UserSelection } from "./player";
import { Card } from "./card";
import { CardLibrary } from "./card-library";
import { CardDefinition, CardType } from "./card-definition";
import { Estate } from "./CardDefinitions/estate";
import { Copper } from "./CardDefinitions/copper";
import { Province } from "./CardDefinitions/province";

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
    public executingCards: CardDefinition[];

    constructor(gameName: string, serverCallback: (game: Game) => void) {
        this.name = gameName;
        this.state = GameState.Setup;
        this.players = [];
        this.currentPlayer = -1;
        this.shop = {};
        this.trash = [];

        this.setupSelectedCards = [];
        this.setupPreset = '';

        this.library = new CardLibrary();
        this.executingCards = [];
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

    // returns an error message or blank string on success
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
                        console.log(humanPlayer.name + ' reconnected. Socket ID = ' + socketId);
                        return "";
                    }
                }
            }
        }

        // game better not be already going
        if(this.state !== GameState.Setup)
        {
            return "Unable to join game, game is already in progress";
        }

        // only 4 players  in dominion
        if(this.players.length >= 4)
        {
              return "Unable to join game, player limit reached";
        }

        for(const player of this.players)
        {
            // player names have to be unique
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

        //  we got past all the checks, let the new guy in
        const newPlayer: HumanPlayer = new HumanPlayer(playerName, playerColor, socketId, this.players.length);
        this.players.push(newPlayer);

        return "";
    }

    public playerLeave(playerIndex: number) : string
    {
        if(playerIndex < this.players.length)
        {
            this.players.splice(playerIndex, 1);
        }
        else{
            return "invalid index";
        }
        return "";
    }

    // returns an error message or blank string on success
    public addBot(botName: string) : string
    {
        // disable bots for now, getting this to work with socketio is going to be complicated
        return "";
        /*
        const foundPlayer: Player | undefined = this.findPlayerByName(botName);

        //name needs to be unique
        if(foundPlayer !== undefined)
        {
           return "there is already a player in the game with that name";
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

        let bColorTaken = true;
        let color: string = "";
        while(bColorTaken)
        {
            color = this.getRandomColor();
            for(const player of this.players)
            {
                // color is taken, find a different one
                if(player.color === color)
                    continue;
            }
            bColorTaken = false;
        }

        const bot: AIPlayer = new AIPlayer(botName, color, this.players.length, this);
        this.players.push(bot);
        console.log("added bot: " + botName);
        return "";
        */
    }

    public getRandomColor() : string{
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    // keep track of which cards are selected during the setup step
    public setupSelectCard(cardName: string)
    {
        // select a card, or deselect it if it's already selected

        const index: number = this.setupSelectedCards.indexOf(cardName);
        if(index === -1)
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
            // add 3 estates
            for(let i = 0; i < 3; i++)
            {
                const estate: Card | undefined = this.shop[Estate.cardName].pop();
                if(estate !== undefined)
                {
                    player.gain(Location.deck, estate);
                }
            }

            // add 7 coppers
            for(let i = 0; i < 7; i++)
            {
                const estate: Card | undefined = this.shop[Copper.cardName].pop();
                if(estate !== undefined)
                {
                    player.gain(Location.deck, estate);
                }
            }

            // now that we have our starting deck, shuffle and draw 5
            player.shuffle();

            player.draw(5);
        }

        // pick a starting player
        this.currentPlayer = Math.floor(Math.random() * this.players.length);

        this.players[this.currentPlayer].actions= 1;
        this.players[this.currentPlayer].buys = 1;
        this.players[this.currentPlayer].coins = 0;

        if(this.players.length <= 2)
        {
            for (const card in this.shop)
            {
                if (this.shop[card][0].type === CardType.victory && card !== 'curse')
                {
                    const cardDefinition: CardDefinition = this.library.getCardDefinition(card);
                    this.shop[card].splice(1, 4);
                }
            }
        }

        /* for testing game over
        for(const player of this.players)
        {
            const victoryCards = Math.floor(Math.random() * 10);
            for(let i = 0; i < victoryCards; i++)
            {
                const card: Card | null = this.library.getCard("estate");
                if(card !== null)
                {
                    player.deck.push(card);
                }
            }
        }
        */

        this.setGameState(GameState.PlayGame);
        return true;
    }

    public trashCard(card: Card) {
        this.trash.unshift(card);
    }


    public advanceGame() {

        let waitingForPlayer = false;

        while(waitingForPlayer === false)
        {
            let currentPlayer: Player = this.players[this.currentPlayer];

            // get ready of anything currently executing
            for(let i = this.executingCards.length - 1; i >= 0; i--)
            {
                const card: CardDefinition = this.executingCards[i];
                this.finishExecution(card);
            }

            // they are still waiting, give them something to do
            if(currentPlayer.state === PlayerState.WaitingForTurn)
            {
                currentPlayer.setState(PlayerState.Action, this);
            }

            else if (currentPlayer.state === PlayerState.Action)
            {
                currentPlayer.setState(PlayerState.Buy, this);
            }

            else if (currentPlayer.state === PlayerState.Buy)
            {
                currentPlayer.setState(PlayerState.CleanUp, this);

            }

            else if (currentPlayer.state === PlayerState.CleanUp)
            {
                // nothing for user/AI to do, just auto clean up
                currentPlayer.cleanUp();
                currentPlayer.setState(PlayerState.WaitingForTurn, this);
                this.currentPlayer = (this.currentPlayer + 1) % this.players.length;// after clean up, move to the next player
                currentPlayer = this.players[this.currentPlayer];
                // you get 1 action, 1 buy, and no coins to start your turn
                currentPlayer.setState(PlayerState.Action, this);
                currentPlayer.actions= 1;
                currentPlayer.buys = 1;
                currentPlayer.coins = 0;
            }

            currentPlayer.addStateActions(this);

            // if we need to wait for huiman action, get out of here
            if(currentPlayer.userSelections.length > 0 && currentPlayer instanceof HumanPlayer)
                waitingForPlayer = true;
        }
    }

    public checkGameOver(): boolean {
        let gameOver = false;
        if(this.shop[Province.cardName].length === 0)
            gameOver = true;
        else
        {
            let empty = 0;
            for(const card in this.shop)
            {
                if(this.shop[card].length === 0)
                    empty++;
            }
            if(empty >= 3)
                gameOver = true;
        }

        return gameOver;
    }

    // a player chose something, decide what to do with it
    onCardsSelected(playerIndex: number, cards: Card[]): boolean
    {
        const player: Player = this.players[playerIndex];

        let validSelection = false;
        const currentSelections: UserSelection[] = player.userSelections[player.userSelections.length - 1];
        for(const selection of currentSelections)
        {
            let allCardsValid = true;
            for(const card of cards)
            {
                if(selection.isValid(card) === false)
                {
                    allCardsValid = false;
                }
            }

            if(allCardsValid === true)
                validSelection = true;
        }

        // cards not valid
        if(validSelection === false)
            return false;

        // if there's an executing card, it gets the selection
        if(this.executingCards.length > 0)
        {
            if(this.executingCards[this.executingCards.length - 1].onSelection(this, player, cards) === false)
                return false;
        }
        // determine what to do with the selection based on turn phase
        else if(player.state === PlayerState.Action)
        {
            if(cards.length > 0 && player.actions > 0)
            {
                // 1 card selected at a time
                const card: Card = cards[0];

                // card better be in your hand
                for(const handCard of player.hand)
                {
                    if(handCard.id === card.id && card.type === CardType.action)
                    {
                        // the user chose to play this action card
                        const cardDefinition: CardDefinition = this.library.getCardDefinition(card.name);

                        if(cardDefinition.cardType === CardType.action)
                        {
                            this.executingCards.push(cardDefinition);
                            player.actions--;

                            // remove card from hand, put it in play
                            let index = -1;
                            for(let i = 0; i < player.hand.length; i++)
                            {
                                if(player.hand[i].id === card.id)
                                    index = i;
                            }
                            player.hand.splice(index, 1);
                            player.inPlay.unshift(card);

                            cardDefinition.execute(this, player);
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            }
        }
        else if(player.state === PlayerState.Buy && player.buys > 0)
        {
            if(cards.length > 0)
            {
                // 1 card selected at a time
                const card: Card = cards[0];

                // if this is a card in the players hand, and it's a treasure card, play it
                for(const handCard of player.hand)
                {
                    if(handCard.id === card.id && card.type === CardType.treasure)
                    {
                        const treasureCardDefinition : CardDefinition = this.library.getCardDefinition(card.name);
                        this.executingCards.push(treasureCardDefinition);

                        // remove card from hand, put it in play
                        let index = -1;
                        for(let i = 0; i < player.hand.length; i++)
                        {
                        if(player.hand[i].id === card.id)
                            index = i;
                        }
                        player.hand.splice(index, 1);
                        player.inPlay.unshift(card);

                        treasureCardDefinition.execute(this, player);
                    }
                }

                // if this is a card in the shop, buy it
                // we know the card is in the shop if it is the top card of it's buy pile
                if(this.shop[card.name][0].id === card.id)
                {
                    const cost: number = this.library.getCardDefinition(card.name).cost;

                    if(player.coins >= cost)
                    {
                        this.shop[card.name].splice(0, 1);
                        player.gain(Location.discard, card);
                        player.coins -= cost;
                        player.buys--;
                    }
                    else
                    {
                        return false;
                    }

                    // the game always ends after buying something, so check if it's over here
                    if(this.checkGameOver())
                    {
                         // Game Over! show the end screen
                        this.state = GameState.GameOver;
                    }
                }
            }
        }
        return true;
    }

    onPromptClicked(playerIndex: number, prompt: string, cards: Card[]) {
        if(this.executingCards.length > 0)
        {
            if(this.executingCards[this.executingCards.length - 1].onPrompt(prompt, this, this.players[playerIndex], cards) === true)
                return;
        }

        // game state can only be advanced by the current player
        if(playerIndex === this.currentPlayer)
        {
            if(prompt === 'end action phase' && this.players[playerIndex].state === PlayerState.Action)
            {
                this.advanceGame();
            }
            if(prompt === 'end buy phase' && this.players[playerIndex].state === PlayerState.Buy)
            {
                this.advanceGame();
            }
        }
    }

    // called by a card definition when execution is finished
    finishExecution(finishing: CardDefinition) {
        const current: CardDefinition = this.executingCards[this.executingCards.length - 1];

        // this better be the same card, things can't finish out of order
        if(current.getCardName() === finishing.getCardName())
        {
            this.executingCards.splice(this.executingCards.length - 1, 1);
        }

        else
        {
            console.log('ERROR: cards finished executing out of order');
            return;
        }
    }
}