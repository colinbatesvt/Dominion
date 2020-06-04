import { VictoryCardDefinition } from "../victory-card-definition";

export class Duchy extends VictoryCardDefinition
{
    public static cardName: string = "duchy";

    public constructor() {
        super();
        this.cost = 5;
        this.startingAmount = 12;
        this.isKingdom = false;
        this.imageName = "duchy.jpg";
    }

    GetVictoryPoints(): number {
        return 3;
    }
}