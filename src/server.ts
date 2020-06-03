import express from 'express';
import path from 'path'
import { SocketManager } from './socket-manager';

const app = express();
const PORT = process.env.PORT || 3000

const currentDir = __dirname;
const split = currentDir.split('\\');
console.log(split);

let homePageLocation = "";
for(let i = 0; i < split.length - 2; i++)
{
    const folder = split[i];
    homePageLocation += folder;
    homePageLocation += "\\";
}

app.use(express.static(homePageLocation + '\\release\\Dominion\\'));
const test = homePageLocation + '\\release\\Dominion\\index.html';
console.log(test);
const router = express.Router();

// serve home page
app.get('/', (req, res) => {
    const index = homePageLocation + 'release\\Dominion\\index.html';
    res.sendFile(path.join(index));
});

// launch server and listen on 3000
const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// create game data and socket handling
const socketManager = new SocketManager(server);
socketManager.setupSockets();



