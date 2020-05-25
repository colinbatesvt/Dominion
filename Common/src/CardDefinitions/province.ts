import { VictoryCardDefinition } from "../victory-card-definition";

export class Province extends VictoryCardDefinition
{

    public static cardName: string = "province";

    public constructor() {
        super();
        this.cost = 8;
        this.startingAmount = 12;
        this.isKingdom = false;
        this.imageName = "province.jpg";
    }
    
    GetVictoryPoints(): number {
        return 6;
    }
}