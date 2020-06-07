import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player } from "../player";

export class CouncilRoom extends ActionCardDefinition
{
    public static cardName: string = "council_room";

    public constructor() {
        super();
        this.isKingdom = true;
        this.imageName = "council_room.jpg";
        this.cost = 5;
    }

    public execute(game: Game, player: Player) {

        player.draw(4);
        player.buys++;

        for(const gamePlayer of game.players)
        {
            if(gamePlayer.name !== player.name)
            {
                gamePlayer.draw(1);
            }
        }

        game.finishExecution(this);
    }
}