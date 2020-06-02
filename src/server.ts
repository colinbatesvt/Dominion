import express from 'express';
import path from 'path'
import { SocketManager } from './socket-manager';

const app = express();
const port = process.env.PORT || 3000;

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

// launch server and listen on port
const server = app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

// create game data and socket handling
const socketManager = new SocketManager(server);
socketManager.setupSockets();



