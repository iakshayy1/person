var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
var persons = require('./src/persons');

mongoose.connect("mongodb://localhost:27017/data");

var port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/persons',persons);



app.listen(port, (req, res)=>{
    console.log(`server is running on ${port}`)
})