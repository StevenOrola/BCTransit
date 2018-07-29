var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var sequelize = new Sequelize('db', null, null, {
	dialect: 'sqlite',
	operatorsAliases: Op,
	logging: false,
	storage: '../gtfs.sqlite'
});

var stops = sequelize.query("SELECT * FROM stop_times WHERE stop_id = 772 AND " +
 "arrival_time > strftime('%H:%M:%S', 'now', 'localtime', '+3 minutes') " +
 "ORDER BY arrival_time LIMIT 10;")
/*
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });*/

app.get('/', (req, res) => {
    res.send(stops);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});