import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player, UserSelection, Location } from "../player";
import { Card } from "../card";
import { CardLibrary } from "../card-library";

export class Workshop extends ActionCardDefinition
{
    public static cardName: string = "workshop";

    public constructor() {
        super();
        this.cost = 3;
        this.imageName = "workshop.jpg";
    }

    public execute(game: Game, player: Player) {
        // gain a card costing up to 4

        const selection: UserSelection[] = [];
        const trash: UserSelection = {location: Location.shop, isValid: (card: Card) => {
            const library: CardLibrary = new CardLibrary;
            return library.getCardDefinition(card.name).cost <= 4;
        }, count: 1}
        selection.push(trash)
        player.userSelections.push(selection);
    }

    public onSelection(game: Game, player: Player, cards: Card[]) : boolean{

        const gainCard: Card = cards[0];

        if(game.shop[gainCard.name][0].id === gainCard.id)
        {
            player.gain(Location.discard, gainCard);
            game.shop[gainCard.name].splice(0);
            player.userSelections.splice(player.userSelections.length -1);
            game.finishExecution(this);
        }

        return true;
    }
}