"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var socket_manager_1 = require("./socket-manager");
var app = express_1["default"]();
var port = process.env.PORT || '3000';
var currentDir = __dirname;
var split = currentDir.split('\\');
var homePageLocation = "";
for (var i = 0; i < split.length - 2; i++) {
    var folder = split[i];
    homePageLocation += folder;
    homePageLocation += "\\";
}
app.use(express_1["default"].static(homePageLocation + '\\WebApp\\dist\\Dominion\\'));
var router = express_1["default"].Router();
// serve home page
app.get('/', function (req, res) {
    var index = homePageLocation + 'WebApp\\dist\\Dominion\\index.html';
    res.sendFile(path_1["default"].join(index));
});
// launch server and listen on 3000
var server = app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + port);
});
// create game data and socket handling
var socketManager = new socket_manager_1.SocketManager(server);
socketManager.setupSockets();
//# sourceMappingURL=server.js.map