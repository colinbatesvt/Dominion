import { CardDefinition, CardType } from "./card-definition";
export class TreasureCardDefinition extends CardDefinition {
    constructor() {
        super();
        this.coinValue = 0;
        this.cardType = CardType.treasure;
    }
    getCoinValue() {
        return this.coinValue;
    }
    //increase the player's coin value when the card is played
    execute(game, player) {
        player.coins += this.getCoinValue();
        game.finishExecution(this);
    }
}
//# sourceMappingURL=treasure-card-definition.js.map