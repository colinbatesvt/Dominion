import { ActionCardDefinition } from "../action-card-definition";
import { Location } from "../player";
export class Cellar extends ActionCardDefinition {
    constructor() {
        super();
        this.cost = 2;
        this.imageName = "cellar.jpg";
    }
    execute(game, player) {
        // + 1 action
        player.actions++;
        //discard any number of cards, then draw that many
        const pickDiscard = { location: Location.hand, isValid: (card) => { return true; }, count: -1 };
        let selections = [];
        selections.push(pickDiscard);
        const prompts = ["discard"];
        player.pushPrompt(prompts);
        player.pushSelection(selections, game);
        player.status = "Choose any number of cards to discard";
    }
    onPrompt(prompt, game, player, cards) {
        if (prompt === "discard") {
            // verify all these cards are actual cards in the user's hand
            let bAllFound = true;
            for (const card of cards) {
                let bFound = false;
                for (const handCard of player.hand) {
                    if (card.id === handCard.id) {
                        bFound = true;
                    }
                }
                if (bFound !== true)
                    bAllFound = false;
            }
            if (bAllFound !== true) {
                return false;
            }
            else {
                for (const card of cards) {
                    player.discardCard(card);
                }
                player.draw(cards.length);
                player.popSelection();
                player.popPrompt();
                game.finishExecution(this);
                player.status = "";
            }
            return true;
        }
        return false;
    }
}
Cellar.cardName = "cellar";
//# sourceMappingURL=cellar.js.map