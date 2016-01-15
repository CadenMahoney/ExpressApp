var express = require('express');
var app = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'caden',
  database : 'nalcs'
});

connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});

app.get("/",function(req,res){
  connection.query('SELECT * FROM player', function(err, rows, fields) {
    connection.end();
    if (!err)
      res.send(rows);
    else
      console.log('Error while performing Query.');
  });
});



module.exports = app;