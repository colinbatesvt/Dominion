import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class Village extends ActionCardDefinition
{
    public static cardName: string = "village";
    public constructor() {
        super();
        this.cost = 3;
        this.imageName = "village.jpg";
    }

    public execute(game: Game, player: Player) {
        // + 1 card
        player.draw(1);
        // + 2 actions
        player.actions += 2;
        game.finishExecution(this);
    }
}