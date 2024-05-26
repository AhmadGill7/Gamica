let mongoose  = require('mongoose');

let userKaStructure = mongoose.Schema({
    name:String,
    password:String,
    age:Number,
    city:String,
    pic:String
})

let User = mongoose.model('user', userKaStructure)

module.exports = User;