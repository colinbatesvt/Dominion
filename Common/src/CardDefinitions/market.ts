import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class Market extends ActionCardDefinition
{
    public static cardName: string = "market";

    public constructor() {
        super();
        this.isKingdom = true;
        this.imageName = "market.jpg";
        this.cost = 5;
    }

    public execute(game: Game, player: Player) {
        player.draw(1);
        player.actions++;
        player.buys++;
        player.coins++;

        game.finishExecution(this);
    }
}