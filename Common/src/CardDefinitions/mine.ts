import { ActionCardDefinition } from "../action-card-definition";
import { Game } from "../game";
import { Player, UserSelection, Location } from "../player";
import { Card } from "../card";
import { CardLibrary } from "../card-library";
import { CardType } from "../card-definition";

export class Mine extends ActionCardDefinition
{
    public static cardName: string = "mine";
    private handPick: boolean;

    public constructor() {
        super();
        this.cost = 5;
        this.imageName = "mine.jpg";
        this.handPick = true;
    }

    public execute(game: Game, player: Player) 
    {
        //you may trash a treasure from your hand. Gain a Treasure to your hand costing up to 3 more than it
        const selection: UserSelection[] = [];
        const trash: UserSelection = {location: Location.hand, isValid: (card: Card) => {return card.type === CardType.treasure;}, count: 1}
        selection.push(trash)
        player.addSelection(selection, game);
        this.handPick = true;
    }

    public onSelection(game: Game, player: Player, cards: Card[]) : boolean{

        //if this is the trash selection...
        if(this.handPick === true)
        {
            //selection should be a single card
            const trashCard: Card = cards[0];
            let handIndex = -1;
            for(let i = 0; i < player.hand.length; i++)
            {
                const handCard: Card = player.hand[i];
                if(handCard.id === trashCard.id)
                {
                    handIndex = i;
                }
            }
            if(handIndex !== -1)
            {
                player.hand.splice(handIndex, 1);
                game.trashCard(trashCard);
                //remove this selection, add gain selection
                player.userSelections.splice(player.userSelections.length -1, 1);

                //TODO: test this, I have no idea if referencing trashCard in that function will work
                const selection: UserSelection[] = [];
                const gain: UserSelection = {location: Location.shop, isValid: (card: Card) => {
                    const library: CardLibrary = new CardLibrary;
                    return library.getCardDefinition(card.name).cost <= library.getCardDefinition(trashCard.name).cost + 3;
                }, count: 1}
                selection.push(gain)
                player.addSelection(selection, game);
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
                game.shop[gainCard.name].splice(0, 1);
                player.userSelections.splice(player.userSelections.length -1, 1);
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