import { ActionCardDefinition } from "../action-card-definition";
export class Smithy extends ActionCardDefinition {
    constructor() {
        super();
        this.cost = 4;
        this.imageName = "smithy.jpg";
    }
    execute(game, player) {
        // + 3 cards
        player.draw(3);
        game.finishExecution(this);
    }
}
Smithy.cardName = "smithy";
//# sourceMappingURL=smithy.js.map