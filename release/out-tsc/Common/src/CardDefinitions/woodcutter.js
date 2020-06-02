import { ActionCardDefinition } from "../action-card-definition";
export class Woodcutter extends ActionCardDefinition {
    constructor() {
        super();
        this.cost = 3;
        this.imageName = "woodcutter.jpg";
    }
    execute(game, player) {
        // + 1 buy
        player.buys++;
        // + 2 coins
        player.coins += 2;
        game.finishExecution(this);
    }
}
Woodcutter.cardName = "woodcutter";
//# sourceMappingURL=woodcutter.js.map