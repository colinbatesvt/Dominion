import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class Festival extends ActionCardDefinition
{
    public static cardName: string = "festival";

    public constructor() {
        super();
        this.isKingdom = true;
        this.imageName = "festival.jpg";
        this.cost = 5;
    }

    public execute(game: Game, player: Player) {

        player.actions+=2;
        player.buys++;
        player.coins +=2;

        game.finishExecution(this);
    }
}