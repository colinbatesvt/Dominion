import express from 'express';
import socket from 'socket.io'
import path from 'path'
import { Card } from '../../Common/src/card'
import { Game, GameState } from '../../Common/src/game'
import { Player } from '../../Common/src/player';

const app = express();
const port = 3000;

const currentDir = __dirname;
const split = currentDir.split('\\');

let homePageLocation = "";
for(let i = 0; i < split.length - 4; i++)
{
    const folder = split[i];
    homePageLocation += folder;
    homePageLocation += "\\";
}

app.use(express.static(homePageLocation + '\\WebApp\\dist\\Dominion\\'));
const router = express.Router();

// serve home page
app.get('/', (req, res) => {
    const index = homePageLocation + 'WebApp\\dist\\Dominion\\index.html';
    res.sendFile(path.join(index));
});

// test card get
app.get('/api/cards/:cardId', (req, res) => {
   const cards: Card[] = [
   { url: '/assets/card_images/Adventurer.jpg'},
   { url: '/assets/card_images/Feast.jpg'},
   { url: '/assets/card_images/Festival.jpg'}];

  res.send(cards[req.params.cardId]);
});

app.get('/api/cards/', (req, res) => {
  const cards: Card[] = [
  { url: '/assets/card_images/Adventurer.jpg'},
  { url: '/assets/card_images/Feast.jpg'},
  { url: '/assets/card_images/Festival.jpg'}];

 res.send(cards);
});

const server = app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

// active games
const gameList: Game[] = [];

// socket setup
const io = socket(server);
io.on('connection', (connectedSocket) => {
  console.log('made socket connection', connectedSocket.id);

  connectedSocket.on('new-message', (message) => {
    console.log('chat message: ' + message);
    io.sockets.emit('new-message', message);
  });

  connectedSocket.on('join-game', (data, ak) => {
    let opOk = true;
    let opError = "";
    const opReturnValue: any = {};
    console.log(data.playerName + ' joining game: ' + data.gameName);

    let reconnectedPlayer : Player;

    const joinGame: Game = gameList.find(game => game.name = data.gameName);
    if(joinGame !== undefined)
    {
      // check for reconnect
      for(const player of joinGame.players)
      {
        if(player.name === data.playerName)
        {
          if(player.connected !== true)
          {
              player.socketId = connectedSocket.socketId;
              player.SetConnected(true);
              reconnectedPlayer = player;
          }
        }
      }
      if(reconnectedPlayer === undefined)
      {
        if(joinGame.state !== GameState.Setup)
        {
          opOk = false;
          opError = "Unable to join game, game is already in progress";
        }
        if(opOk === true)
        {
          if(joinGame.players.length >= 4)
          {
            opOk = false;
            opError = "Unable to join game, player limit reached";
          }
          if(opOk === true)
          {
            for(const player of joinGame.players)
            {
              if(player.name === data.playerName)
              {
                // if there is a player already connected with that name, you can't join
                if(player.connected === true)
                {
                  opOk = false;
                  opError = "There is already a player in the selected game with that name";
                }
              }
              // player colors have to be unique
              if(player.color === data.playerColor)
              {
                  opOk = false;
                  opError = "There is already a player in the selected game with that favorite color";
              }
            }
          }
        }
        if(opOk === true)
        {
          let newPlayer: Player;
          if(reconnectedPlayer === undefined)
          {
            newPlayer = new Player(data.playerName, data.playerColor, connectedSocket.id);
            joinGame.addPlayer(newPlayer);
          }
          else
          {
            newPlayer = reconnectedPlayer;
          }
          opReturnValue.game = joinGame;
          opReturnValue.player = newPlayer;
        }
      }
    }
    else
    {
      opError = "No game of that name";
    }

    ak({ok: opOk, error: opError, returnValue: opReturnValue});
    io.sockets.emit('games-updated', gameList);
  });

  connectedSocket.on('create-game', (gameName: string, resultCallback) => {
    let opError = "";
    let opOk = true;
    for(const game of gameList)
    {
      if(game.name === gameName)
      {
        opError = "game with that name already exists";
        opOk = false;
      }
    }

    if(opOk === true)
    {
      console.log('creating game: ' + gameName);
      const newGame = new Game(gameName);
      gameList.push(newGame);

      io.sockets.emit('games-updated', gameList);
    }

    resultCallback({ok: opOk, error:opError});
  });

  connectedSocket.on('request-games-list', (data, ak) => {
    console.log('providing games');
    ak({ok: true});
    connectedSocket.emit('games-updated', gameList);
  });

  connectedSocket.on('disconnect', () => {
    console.log('player left');
    for(const game of gameList)
    {
      const foundPlayer: Player = game.findPlayer(connectedSocket.id);
      if(foundPlayer !== undefined)
      {
        foundPlayer.SetConnected(false);
      }

      if(game.hasNoActivePlayers())
      {
        const index = gameList.indexOf(game);
        gameList.splice(index);
      }

      io.sockets.emit('games-updated', gameList);
    }
  });
});

