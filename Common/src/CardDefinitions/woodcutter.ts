import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class Woodcutter extends ActionCardDefinition
{
    public static cardName: string = "woodcutter";
    public constructor() {
        super();
        this.cost = 3;
        this.imageName = "woodcutter.jpg";
    }

    public execute(game: Game, player: Player) {
        // + 1 buy
        player.buys++;
        // + 2 coins
        player.coins += 2;
    }
}