import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player, Location, UserSelection } from "../player";
import { Card } from "../card";

export class Chapel extends ActionCardDefinition
{
    public static cardName: string = "chapel";

    public constructor() {
        super();
        this.cost = 2;
        this.imageName = "chapel.jpg";
    }

    public execute(game: Game, player: Player) {

        // trash up to 4 cards from your hand
        const pickTrash: UserSelection = {
            location: Location.hand,
            isValid: (card: Card) => {return true;},
            count: 4,
            waitForPrompt: true};
        const selections: UserSelection[] = [];
        selections.push(pickTrash);

        const prompts: string[] = ["trash"];
        player.pushPrompt(prompts);
        player.pushSelection(selections, game);
        player.status = "Choose up to 4 cards to trash";
    }

    public onPrompt(prompt: string, game: Game, player: Player, cards: Card[]) : boolean
    {
        if(prompt === "trash")
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
                for(const trashCard of cards)
                {
                    let handIndex = -1;
                    for(let i = 0; i < player.hand.length; i++)
                    {
                        if(player.hand[i].id === trashCard.id)
                        {
                            handIndex = i;
                            break;
                        }
                    }
                    player.hand.splice(handIndex, 1);
                    game.trashCard(trashCard);
                }

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