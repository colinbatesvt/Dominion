import { Game } from "./game";

export interface ServerInterface
{
   updateGame(game: Game): void;
}