import { ActionCardDefinition } from "../action-card-definition";
import { Location } from "../player";
import { CardLibrary } from "../card-library";
export class Workshop extends ActionCardDefinition {
    constructor() {
        super();
        this.cost = 3;
        this.imageName = "workshop.jpg";
    }
    execute(game, player) {
        // gain a card costing up to 4
        const selection = [];
        const gain = { location: Location.shop, isValid: (card) => {
                const library = new CardLibrary;
                return library.getCardDefinition(card.name).cost <= 4;
            }, count: 1 };
        selection.push(gain);
        player.pushSelection(selection, game);
        player.status = "Gain a card costing up to 4";
    }
    onSelection(game, player, cards) {
        const gainCard = cards[0];
        if (game.shop[gainCard.name][0].id === gainCard.id) {
            player.gain(Location.discard, gainCard);
            game.shop[gainCard.name].splice(0, 1);
            player.popSelection();
            game.finishExecution(this);
            player.status = "";
        }
        return true;
    }
}
Workshop.cardName = "workshop";
//# sourceMappingURL=workshop.js.map