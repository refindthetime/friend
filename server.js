//node modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var FriendsDB = require("./app/data/friends.js");
var friendsDBobj = new FriendsDB();

var HTMLPAGE = require("./app/routing/htmlRoutes.js");
var loadAPIRoutes = require("./app/routing/apiRoutes.js");

//express setup
var app = express();
var PORT = process.env.PORT || 3000;

//sets up express to serve static files
app.use(express.static(path.join(__dirname, './app/public'), {index:false,extensions:['html']}));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

loadAPIRoutes(app, friendsDBobj);
HTMLPAGE(app);

//start server
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "FriendsDB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});