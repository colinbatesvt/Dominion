import { CardType } from "./card-definition";

export interface Card {
    id: number;
    name: string;
    isKingdom: boolean;
    imageName: string;
    type: CardType;
    revealedToOthers: boolean;
}
