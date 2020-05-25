import { CardDefinition, CardType } from "./card-definition";
import { Game } from "./game";
import { Player } from "./player";

export abstract class TreasureCardDefinition extends CardDefinition {

    coinValue : number;

    constructor() {
        super();
        this.coinValue = 0;
        this.cardType = CardType.treasure;
    }

    getCoinValue() : number {

        return this.coinValue;
    }

    //increase the player's coin value when the card is played
    public execute(game: Game, player: Player) {
        player.coins += this.getCoinValue();
        game.finishExecution(this);
    }
}