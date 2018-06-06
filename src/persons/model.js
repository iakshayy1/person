const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var Person = new Schema({
    name:{
        type: String,
        match:/[A-Za-z]/,
        default: 'Anonymous'
    },
    age:Number,
    job:{
        type: String,
        match:/[A-Za-z]/,
        default: 'software developer'
    }
})

const PersonModel = mongoose.model('Person',Person);

module.exports=PersonModel;