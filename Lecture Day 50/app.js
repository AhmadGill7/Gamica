
let myExpress =  require('express');
let User =  require('./db/models/user');
let jsonwebtoken = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

let Ad = require('./db/models/ad');

require('./db/index');

// npm i jsonwebtoken

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

// npm i mongoose

let users = [
  {
    id:1,
    name:'ali',
    password:"123",
    city:'Fsd'
  },
  {
    id:2,
    name:'rameez',
    password:"123",
    city:'lahore'
  },  
  {
    id:3,
    name:'aqsa',
    password:"123",
    city:'Fsd'
  }
]

meriApp.post('/create-ad', async function(req, res){

  let user = await User.findById(req.body.userKiID);

  let nyaAd = new Ad(req.body);
  await nyaAd.save();

  user.ads.push(nyaAd);
  await user.save();

  res.json({
    success:true
  })



})

meriApp.delete('/user-delete-karo', async function(req, res){

  // User.remove({city:'FSD'})
  
  // User.find({city:'FSD', uni:"GC", gpa:{$gt:3.8}})

    await User.findByIdAndDelete(req.query.abc);

  // users.splice(+req.query.abc, 1);

  res.json({
    success:true
  })

  // req.query.abc
  // req.query.city
  // req.query.uni


});

meriApp.get('/get-user-id-se', async function(req, res){

  let user = await User.findById(req.query.abc);

    res.json(user);
});

meriApp.get('/users-lao', async function(req, res){

  // /populate ka function user m pari ads ki arrays m mojood IDS ko replace krke wahan actual records
  // le ayega database m ID se match krke
  let users = await User.find().populate('ads').exec();

    res.json(users);
});


// new user create krna 
// let a = new User()

// record update krna h ID se
// User.findByIdAndUpdate

// record ko iD se remove rkna h 
// User.findByIdAndRemove

// condition se remove rkna h 
// User.remove({marks:{$lt:40}});

// records find krne hn
// User.find();

// condition per find krna
// User.find({city:"FSD"})


// single file upload keliye
// meriApp.post('/signup', upload.single('meriFile'), function(incoming, res){

// multiple file upload keliye
    meriApp.post('/signup', upload.single('meriFile'), async function(incoming, res){

      incoming.body.pic = incoming.file.originalname

      if(incoming.body._id){

        await User.findByIdAndUpdate(incoming.body._id, incoming.body);

      }else{

      let nuser =  new User(incoming.body);
      nuser.save();

      }
  

    // users.push(incoming.body)


    incoming.file

    console.log(incoming.body);

    res.json({name:'ali'});
    // res.end('han g OK')
});

meriApp.post('/check-session', (req, res)=>{

  if(!req.body.abc){
    return res.json(null);
  }

  // verify ka function token ko again crack krke asli haalat m le ayega
  jsonwebtoken.verify(req.body.abc,   'asdmnasdi34&#*JDHSJD#', async (err, data)=>{

    let user = await User.findById(data._id);

    // let user =  users.find((user)=>{
    //   if(user.id == data._id){
    //     return true;
    //   }
    // })

    res.json(user);
    
  })

})

meriApp.post('/login', async function(req, res){
    
  let userMilgya = await User.findOne(req.body);

  // let userMilgya = users.find(function(user){
  //   return user.name ==  req.body.name && user.password == req.body.password
  // })

  if(!userMilgya){
    return res.json(null)
  }


  // sign ka function token create krta h 
  jsonwebtoken.sign(
    // iska token bnaega
    {_id:userMilgya.id},
    // yeh secret hoga 
    'asdmnasdi34&#*JDHSJD#', 
    // token ki settings
    {
    expiresIn:'1d'
  }, function(err, token){

    res.json({
      userMilgya,
      token
  });

    console.log(token)
  })

  // token create kren
  let token = 10;



});


meriApp.use(myExpress.static('./server/build'))
meriApp.use(myExpress.static('./server/mere-uploads'))


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