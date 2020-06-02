import { ActionCardDefinition } from "../action-card-definition";
import { Location } from "../player";
import { CardLibrary } from "../card-library";
export class Remodel extends ActionCardDefinition {
    constructor() {
        super();
        this.cost = 4;
        this.imageName = "remodel.jpg";
        this, this.handPick = true;
    }
    execute(game, player) {
        // Trash a card from your hand gain a card costing up to 2 more than it
        if (player.hand.length > 0) {
            const selection = [];
            const trash = { location: Location.hand, isValid: (card) => { return true; }, count: 1 };
            selection.push(trash);
            player.pushSelection(selection, game);
            player.status = "Choose a card from your hand to trash";
            this.handPick = true;
        }
        else {
            game.finishExecution(this);
        }
    }
    onSelection(game, player, cards) {
        //if this is the trash selection...
        if (this.handPick === true) {
            //selection should be a single card
            const trashCard = cards[0];
            let handIndex = -1;
            for (let i = 0; i < player.hand.length; i++) {
                const handCard = player.hand[i];
                if (handCard.id === trashCard.id) {
                    handIndex = i;
                }
            }
            if (handIndex !== -1) {
                player.hand.splice(handIndex, 1);
                game.trashCard(trashCard);
                //remove this selection, add gain selection
                player.popSelection();
                const library = new CardLibrary;
                const maxBuy = library.getCardDefinition(trashCard.name).cost + 2;
                player.status = "Gain a card from the shop costing up to " + maxBuy;
                const selection = [];
                const gain = { location: Location.shop, isValid: (card) => {
                        return library.getCardDefinition(card.name).cost <= maxBuy;
                    }, count: 1 };
                selection.push(gain);
                player.pushSelection(selection, game);
                this.handPick = false;
            }
            else {
                return false;
            }
        }
        else {
            //selection should be a single card
            const gainCard = cards[0];
            //verify it's a card on top of it's shop pile
            if (game.shop[gainCard.name][0].id === gainCard.id) {
                player.gain(Location.discard, gainCard);
                game.shop[gainCard.name].splice(0, 1);
                player.popSelection();
                player.status = "";
                game.finishExecution(this);
            }
            else {
                return false;
            }
        }
        return true;
    }
}
Remodel.cardName = "remodel";
//# sourceMappingURL=Remodel.js.map