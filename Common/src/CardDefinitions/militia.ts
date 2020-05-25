import { ActionCardDefinition, SubType } from "../action-card-definition";
import { Game } from "../game";
import { Player, UserSelection, Location } from "../player";
import { CardType } from "../card-definition";
import { Card } from "../card";

export class Militia extends ActionCardDefinition
{
    
    public static cardName: string = "militia";
    private playersDone: boolean[]; // used to track if users have discarded their cards

    public constructor() {
        super();
        this.cost = 4;
        this.subType = SubType.attack;
        this.imageName = "militia.jpg";
        this.playersDone = [];
    }

    public execute(game: Game, player: Player) {
        player.coins += 2;

        //each other player discards down to 3 cards in hand
        for(const attackedPlayer of game.players)
        {
            if(attackedPlayer.name !== player.name)
            {
                let bImmune = false;
                for(const card of attackedPlayer.hand)
                {
                    // moat immunity, this should probably be a little more generic for futre reactions, but ya know...
                    if(card.name === "Moat")
                    {
                        bImmune = true;
                        card.revealedToOthers = true;
                    }
                }
                //immune, don't wait for their response
                if(bImmune === true)
                {
                    this.playersDone.push(true);
                }
                else
                {
                    //not immune, but make sure they have more than three cards to discard
                    if(attackedPlayer.hand.length > 3)
                    {
                        this.playersDone.push(false);
                        const selection: UserSelection[] = [];
                        const discard: UserSelection = {location: Location.hand, isValid: (card: Card) => {return true;}, count: player.hand.length - 3}
                        selection.push(discard)
                        attackedPlayer.userSelections.push(selection);
                    }
                }
            }
            else
            {
                this.playersDone.push(true);
            }
        }

        let bAllDone = true;
        for(const done of this.playersDone)
        {
            if(done === false)
            {
                bAllDone = false;
            }
        }

        //no one to attack, clean up
        if(bAllDone)
            game.finishExecution(this);
    }
    
    public onSelection(game: Game, player: Player, cards: Card[]) : boolean{

        //make sure everything in the selection is in that players hand
        let valid = true;
        for(const card of cards)
        {
            let found = false;
            for (const handCard of player.hand)
            {
                if(card.id === handCard.id)
                {
                    found = true;
                }
            }
            if(found === false)
            {
                valid = false;
            }
        }

        //if the selection was valid, discard the selected cards
        if(valid === false)
            return false;
        else
        {
            for(const card of cards)
            {
                player.discardCard(card);
            }
        }

        this.playersDone[player.index] = true;
        player.userSelections.splice(player.userSelections.length - 1);
        
        //see if everyone has discarded, and if they have, clean up
        let bAllDone = true;
        for(const done of this.playersDone)
        {
            if(done === false)
            {
                bAllDone = false;
            }
        }

        if(bAllDone)
            game.finishExecution(this);

        return true;
    }
}