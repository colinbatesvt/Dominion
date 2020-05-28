import { ActionCardDefinition, SubType } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class Moat extends ActionCardDefinition
{
    public static cardName: string = "moat";

    public constructor() {
        super();
        this.cost = 2;
        this.subType = SubType.reaction;
        this.imageName = "moat.jpg";
    }

    public execute(game: Game, player: Player) {
        // + 2 cards
        player.draw(2);
        // when another player plays an attack card you may first reveal this from your hand, to be unaffected by it.
        game.finishExecution(this);
    }
}