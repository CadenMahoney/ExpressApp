var express = require('express');
var app = express.Router();

app.get('/', function (req, res) {
  res.render('index', {title: 'Hello', message: 'Hi there!'});
});

app.get('/books', function (req, res) {
  res.send('Hello Books!');
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'caden'
});

connection.connect();

  console.log('connected as id ' + connection.threadId);

  connection.query('SELECT firstName AS fn FROM player', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].fn);
  });

connection.end();


module.exports = app;
