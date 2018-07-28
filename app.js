var express = require('express');
var app = express();

var Sequelize = require('sequelize');

var sequelize = new Sequelize('db', null, null, {
    dialect: 'sqlite',
    storage: './gtfs.sqlite'
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});