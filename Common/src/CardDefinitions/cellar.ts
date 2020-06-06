import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player, Location, UserSelection } from "../player";
import { Card } from "../card";

export class Cellar extends ActionCardDefinition
{
    public static cardName: string = "cellar";

    public constructor() {
        super();
        this.cost = 2;
        this.imageName = "cellar.jpg";
    }

    public execute(game: Game, player: Player) {
        // + 1 action
        player.actions++;

        // discard any number of cards, then draw that many
        const pickDiscard: UserSelection = {
            location: Location.hand,
            isValid: (card: Card) => {return true;},
            count: -1,
            waitForPrompt: true};
        const selections: UserSelection[] = [];
        selections.push(pickDiscard);

        const prompts: string[] = ["discard"];
        player.pushPrompt(prompts);
        player.pushSelection(selections, game);
        player.status = "Choose any number of cards to discard";
    }

    public onPrompt(prompt: string, game: Game, player: Player, cards: Card[]) : boolean
    {
        if(prompt === "discard")
        {
            // verify all these cards are actual cards in the user's hand
            let bAllFound = true;
            for(const card of cards)
            {
                let bFound = false;
                for(const handCard of player.hand)
                {
                    if(card.id === handCard.id)
                    {
                        bFound = true;
                    }
                }
                if(bFound !== true)
                    bAllFound = false;
            }

            if(bAllFound !== true)
            {
                return false;
            }
            else
            {
                for(const card of cards)
                {
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