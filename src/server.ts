import express from 'express';
import path from 'path'
import { SocketManager } from './socket-manager';

const app = express();
const PORT = process.env.PORT || 3000

const isWin = process.platform === "win32";
let directorySeparator = '/';
if(isWin === true)
{
    directorySeparator = '\\';
}
const currentDir = __dirname;
const split = currentDir.split(directorySeparator);

let homePageLocation = "";
for(let i = 0; i < split.length - 2; i++)
{
    const folder = split[i];
    homePageLocation += folder;
    homePageLocation += directorySeparator;
}

app.use(express.static(homePageLocation + 'Webapp' + directorySeparator + 'dist' + directorySeparator +'Dominion'));
const router = express.Router();

// serve home page
app.get('/', (req, res) => {
    const index = homePageLocation + 'Webapp' + directorySeparator + 'dist' + directorySeparator +'Dominion' + directorySeparator +'index.html';
    res.sendFile(path.join(index));
});

// launch server and listen on 3000
const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// create game data and socket handling
const socketManager = new SocketManager(server);
socketManager.setupSockets();



