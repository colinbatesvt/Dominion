import { Component, OnInit } from '@angular/core';
import { Game } from '../../../../Common/src/game';
import { GameService } from '../game.service';
import { CardLibrary } from '../../../../Common/src/card-library';
import { Player } from '../../../../Common/src/player';
import { CardType } from '../../../../Common/src/card-definition';
import { VictoryCardDefinition } from '../../../../Common/src/victory-card-definition';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  orderedPlayers: [string, number][];
  winner: string;

  constructor(private gameService: GameService) {
    this.orderedPlayers = [];
    this.winner = '';
  }

  ngOnInit() {
    const game: Game = this.gameService.getGame();

    // calculate victory points for each player, and put them in order by amount of points
    const cardLibrary: CardLibrary = new CardLibrary();

    for (const player of game.players)
    {
      let playerPoints = 0;
      for (const card of player.deck)
      {
        if (card.type === CardType.victory)
        {
          const victoryCardDefinition: VictoryCardDefinition = cardLibrary.getCardDefinition(card.name) as VictoryCardDefinition;
          playerPoints += victoryCardDefinition.GetVictoryPoints();
          console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
        }
      }
      for (const card of player.revealed)
      {
        if (card.type === CardType.victory)
        {
          const victoryCardDefinition: VictoryCardDefinition = cardLibrary.getCardDefinition(card.name) as VictoryCardDefinition;
          playerPoints += victoryCardDefinition.GetVictoryPoints();
          console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
        }
      }
      for (const card of player.hand)
      {
        if (card.type === CardType.victory)
        {
          const victoryCardDefinition: VictoryCardDefinition = cardLibrary.getCardDefinition(card.name) as VictoryCardDefinition;
          playerPoints += victoryCardDefinition.GetVictoryPoints();
          console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
        }
      }
      for (const card of player.inPlay)
      {
        if (card.type === CardType.victory)
        {
          const victoryCardDefinition: VictoryCardDefinition = cardLibrary.getCardDefinition(card.name) as VictoryCardDefinition;
          playerPoints += victoryCardDefinition.GetVictoryPoints();
          console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
        }
      }
      for (const card of player.discard)
      {
        if (card.type === CardType.victory)
        {
          const victoryCardDefinition: VictoryCardDefinition = cardLibrary.getCardDefinition(card.name) as VictoryCardDefinition;
          playerPoints += victoryCardDefinition.GetVictoryPoints();
          console.log('counting points: ' + card.name + ': ' + victoryCardDefinition.GetVictoryPoints());
        }
      }

      let inserted = false;
      for (let i = 0; i <= this.orderedPlayers.length && inserted === false; i++)
      {
        if (i === this.orderedPlayers.length)
        {
          this.orderedPlayers.push([player.name, playerPoints]);
          inserted = true;
        }
        else if (playerPoints > this.orderedPlayers[i][1])
        {
          this.orderedPlayers.splice(i, 0, [player.name, playerPoints]);
          inserted = true;
        }
      }
    }
    // check for tie
    if (this.orderedPlayers.length >= 2 && this.orderedPlayers[0][1] === this.orderedPlayers[1][1])
    {
      this.winner = 'It\'s a tie between (';
      for (const player of this.orderedPlayers)
      {
        if (player[1] === this.orderedPlayers[0][1])
        {
          this.winner +=  ' ' + player[0];
        }
      }
      this.winner += ' )!';
    }
    else
    {
      this.winner = this.orderedPlayers[0][0] + ' wins!';
    }
  }

  onLeaveGame() {
    this.gameService.leaveGame();
  }

}
