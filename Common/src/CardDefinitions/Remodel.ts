import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player, UserSelection, Location } from "../player";
import { Card } from "../card";
import { CardType } from "../card-definition";
import { CardLibrary } from "../card-library";

export class Remodel extends ActionCardDefinition
{
    public static cardName: string = "remodel";
    private handPick: boolean;

    public constructor() {
        super();
        this.cost = 4;
        this.imageName = "remodel.jpg";
        this,this.handPick = true;
    }

    public execute(game: Game, player: Player) 
    {
        // Trash a card from your hand gain a card costing up to 2 more than it
        const selection: UserSelection[] = [];
        const trash: UserSelection = {location: Location.hand, isValid: (card: Card) => {return true;}, count: 1}
        selection.push(trash)
        player.userSelections.push(selection);
    }

    public onSelection(game: Game, player: Player, cards: Card[]) : boolean{

        //if this is the trash selection...
        if(this.handPick === true)
        {
            //selection should be a single card
            const trashCard: Card = cards[0];
            let cardInHand = false;
            for(const handCard of player.hand)
            {
                if(handCard.id === trashCard.id)
                    cardInHand = true;
            }
            if(cardInHand === true)
            {
                game.trashCard(trashCard);
                //remove this selection, add gain selection
                player.userSelections.splice(player.userSelections.length -1);

                //TODO: test this, I have no idea if referencing trashCard in that function will work
                const selection: UserSelection[] = [];
                const gain: UserSelection = {location: Location.shop, isValid: (card: Card) => {
                    const library: CardLibrary = new CardLibrary;
                    return library.getCardDefinition(card.name).cost <= library.getCardDefinition(trashCard.name).cost + 2;
                }, count: 1}
                selection.push(gain)
                player.userSelections.push(selection);
                this.handPick = false;
            }
            else 
            {
                return false;
            }
        }
        else 
        {
            //selection should be a single card
            const gainCard: Card = cards[0];
            //verify it's a card on top of it's shop pile
            if(game.shop[gainCard.name][0].id === gainCard.id)
            {
                player.gain(Location.discard, gainCard);
                game.shop[gainCard.name].splice(0);
                player.userSelections.splice(player.userSelections.length -1);
                game.finishExecution(this);
            }
            else
            {
                return false;
            }
        }

        return true;
    }
}
