
let myExpress =  require('express');

let multer =  require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/mere-uploads')
  },
  filename: function (req, file, cb) {      
    cb(null, file.originalname)
  }
})
  
  const upload = multer({ storage: storage })
  
// yeh server wali CMD m run krni hn

// REST API
// GET, data leker ao
// POST, new data create karo
// PUT, data update karo
// DELETE, data delete karo

// npm install express multer mongoose jsonwebtoken
// express - main library for setting up web server
// multer - to upload files wagera
// mongoose - to interact with MongoDB database
// jsonwebtoken - a library to maintain user session after login

// framework RAD (Rapid Application Development)
// Web development ka backend tyar krne keliye

let meriApp = myExpress();

// islka mtalb ab front-end se data ajyega
meriApp.use(myExpress.json());

let users = []


meriApp.get('/users-lao', function(req, res){
    res.json(users);
});

// single file upload keliye
// meriApp.post('/signup', upload.single('meriFile'), function(incoming, res){

// multiple file upload keliye
    meriApp.post('/signup', upload.array('meriFile', 6), function(incoming, res){

    users.push(incoming.body)

    console.log(incoming.body);

    res.json({name:'ali'});
    // res.end('han g OK')
});


meriApp.get('/login', function(incoming, res){
    res.end('yeh login kelye')
    console.log('route chla')
});


meriApp.use(myExpress.static('./server/build'))
meriApp.use(myExpress.static('./server/tmp'))


// har port per aik hi app chalti, ab 4500 per siraf yeh Express server chal sakta
// koi aur app run karenge to wo crash kar jyegi

meriApp.listen(4500, ()=>{
    console.log('server chal paring')
})


// import some from './data';
// // systemJS format

// let a =  require('./data')
// let t = a(3,4);
// console.log(t)