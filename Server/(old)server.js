// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(express.static(__dirname + '\\dist\\Dominion\\'));
app.use(express.static(__dirname + '/node_modules/angular/'));
console.log(__dirname);
//serve homepage
app.get('/', function (req, res) {
    var homePageLocation = __dirname + '\\dist\\Dominion\\index.html';
    res.sendFile(path.join(homePageLocation));
  })

// Start server
app.listen(3000);
console.log('Listening on port 3000...');


//well we're serving some html...
//copy the example here? https://angular.io/start