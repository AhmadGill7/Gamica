let mongoose = require('mongoose');

// ORM'
// Object relatoinal mapper

let User = require('./models/user');


mongoose.connect('mongodb://localhost:27017/hello_db').then((connection)=>{
    console.log(connection);
}).catch((error)=>{
    console.log(error.message)
})


// function(connection){
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