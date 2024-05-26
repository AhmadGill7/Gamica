let mongoose = require("mongoose")

// npm install mongoose
  
let User = require("./models/user")

mongoose.connect("mongodb+srv://AhmadGill:12345_@cluster0.lhfoaxc.mongodb.net/").then((connection) => {
    console.log(connection);

    // let nuser =  new User(req.body);

    let nuser = new User;

    nuser.UserName = 'ali';
    nuser.Password = '5asfs4';
    nuser.Email = "a@a"
    nuser.Profile = "some"
    nuser.City = 'fsd';
    nuser.save();


}).catch((err) => {
    console.log(err.message);
})






// let mongoose = require('mongoose');

// ORM'
// Object relatoinal mapper

// let User = require('./models/user');


// mongoose.connect('mongodb://localhost:27017/hello_db').then(function(connection){
//     console.log(connection);

// let nuser =  new User(req.body);
// nuser.save();

// let nuser = new User;

// nuser.name = 'ali';
// nuser.password = '54';
// nuser.age = 44;
// nuser.city = 'fsd';
// nuser.pic = 'some';



// }).catch((err)=>{
//     console.log(err.message);
// })