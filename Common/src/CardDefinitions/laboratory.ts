import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class Laboratory extends ActionCardDefinition
{
    public static cardName: string = "laboratory";

    public constructor() {
        super();
        this.isKingdom = true;
        this.imageName = "laboratory.jpg";
        this.cost = 5;
    }

    public execute(game: Game, player: Player) {
        player.draw(2);
        player.actions++;

        game.finishExecution(this);
    }
}