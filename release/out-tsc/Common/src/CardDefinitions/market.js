import { ActionCardDefinition } from "../action-card-definition";
export class Market extends ActionCardDefinition {
    constructor() {
        super();
        this.isKingdom = true;
        this.imageName = "market.jpg";
    }
    execute(game, player) {
        player.draw(1);
        player.actions++;
        player.buys++;
        player.coins++;
        game.finishExecution(this);
    }
}
Market.cardName = "market";
//# sourceMappingURL=market.js.map