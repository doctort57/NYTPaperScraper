// @author: David Thurman
// @github: doctort57
// @comment: Homework 18 - Web Scraper with Express, Handlebars, MongoDB and Cheerio

// Node Dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var request = require('request'); // for web-scraping
var cheerio = require('cheerio'); // for web-scraping

// Initialize Express for body parsing
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Serve Static Content
app.use(express.static(process.cwd() + '/public'));

// Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
if(process.env.NODE_ENV == 'production'){
	mongoose.Promise = global.Promise;
  var promise = mongoose.connect('mongodb://heroku_nnqcztb9:sbgc182ph2piq4dhr55gs3usum@ds135926.mlab.com:35926/heroku_nnqcztb9');
}
else{
  mongoose.Promise = global.Promise;
  var promise = mongoose.connect('mongodb://localhost/newspaper-scraper', {
  useMongoClient: true,
});
}

var db = promise;

// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Import Routes/Controller
var router = require('./controllers/controller.js');
app.use('/', router);

// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});

