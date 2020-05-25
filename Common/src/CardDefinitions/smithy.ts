import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class Smithy extends ActionCardDefinition
{
    public static cardName: string = "smithy";

    public constructor() {
        super();
        this.cost = 4;
        this.imageName = "smithy.jpg";
    }

    public execute(game: Game, player: Player) {
        // + 3 cards
        player.draw(3);
    }
}