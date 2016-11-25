var speak = require("speakeasy-nlp");

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json()); 


// POST http://heroku-root/api/v1/
app.post('/api/v1', function(req, res) {
	      
  var json_request = req.body;
  res.send(speak.classify(json_request.inputText));
	
});


// start the server
app.listen(port);
console.log('Server started! At port ' + port);
