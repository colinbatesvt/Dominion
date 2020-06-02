import { ActionCardDefinition } from "../action-card-definition";
export class Village extends ActionCardDefinition {
    constructor() {
        super();
        this.cost = 3;
        this.imageName = "village.jpg";
    }
    execute(game, player) {
        // + 1 card
        player.draw(1);
        // + 2 actions
        player.actions += 2;
        game.finishExecution(this);
    }
}
Village.cardName = "village";
//# sourceMappingURL=village.js.map