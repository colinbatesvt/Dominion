import { ActionCardDefinition, SubType } from "../action-card-definition";
export class Moat extends ActionCardDefinition {
    constructor() {
        super();
        this.cost = 2;
        this.subType = SubType.reaction;
        this.imageName = "moat.jpg";
    }
    execute(game, player) {
        // + 2 cards
        player.draw(2);
        // when another player plays an attack card you may first reveal this from your hand, to be unaffected by it.
        game.finishExecution(this);
    }
}
Moat.cardName = "moat";
//# sourceMappingURL=Moat.js.map