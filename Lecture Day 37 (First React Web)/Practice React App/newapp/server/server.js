// let myExpress = require("express")
// let mongoose = require("mongoose")
// // let Users=require("../../db/model/user")
// let users = [
//   {
//     name: "fareeha",
//     password: "191920",
//     gender: "female"
//   }
// ];
// let myapp = myExpress();
// myapp.use(myExpress.json());

// // require("../../db/database")


// myapp.post("/login", (req, res) => {
//   console.log(req.body)

//   let usermilgya = users.find(abc => abc.name == req.body.name && abc.password == req.body.password)
//   if (usermilgya) {
//     res.json(usermilgya)

//   }

// })

// myapp.listen(4500, function () {

//   console.log("my code is challing")


// })










const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../db/models/user");
require("../db/database");

const myApp = express();
myApp.use(express.json());
myApp.use(express.static("./server/uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

myApp.post("/signup", upload.single("Profile"), async (req, res) => {
  try {
    req.body.Profile = req.file.originalname;
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

myApp.post("/login", async (req, res) => {
  try {
    const userFound = await User.findOne({ UserName: req.body.UserName, Password: req.body.Password });
    if (!userFound) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: userFound._id }, "CatDogLion", { expiresIn: "1d" });
    res.json({ user: userFound, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, "CatDogLion", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

myApp.post("/check-session", authenticateToken, (req, res) => {
  const user = users.find(user => user.id === req.user._id);
  res.json(user || null);
});

myApp.post("/deleteAccount", authenticateToken, (req, res) => {
  const index = req.body.index;
  if (index >= 0 && index < users.length) {
    users.splice(index, 1);
    res.status(200).send("UserDeleted");
  } else {
    res.status(400).send("Invalid index");
  }
});

myApp.delete("/deleteUser", authenticateToken, (req, res) => {
  const index = +req.query.abc;
  if (index >= 0 && index < users.length) {
    users.splice(index, 1);
    res.status(200).send("UserDeleted");
  } else {
    res.status(400).send("Invalid index");
  }
});

myApp.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

myApp.listen(4500, () => {
  console.log("Server running on port 4500");
});






// OLD CODE 

// let myExpress = require("express");
// let multer = require("multer");
// let jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// let myApp = myExpress();
// require("../db/database");
// myApp.use(myExpress.json());
// myApp.use(myExpress.static("./server/uploads"));
// let User = require("../db/models/user");
// let users = [
//   {
//     id: 1,
//     Password: "1234",
//     UserName: "Malik",
//     Profile: "Logosd.jpg",
//   },
//   {
//     id: 2,
//     Password: "1234",
//     UserName: "Gill",
//     Profile: "Logosd.jpg",
//   },
//   {
//     id: 3,
//     Email: "ali@gmail.com",
//     Password: "1234",
//     UserName: "Ali",
//     Profile: "Logosd.jpg",
//     FullName: "Ali Tahir",
//     City: "Faisalabad",
//   },
// ];

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./server/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// myApp.post("/signup", upload.single("Profile"), function (req, res) {
//   req.body.Profile = req.file.originalname;
//   let newUser = new User(req.body);
//   res.status(201).json(req.body);
// });

// myApp.post("/login", function (req, res) {
//   let UserFound = User.find(req.body);

//   if (!UserFound) {
//     res.json(null);
//   }
//   jwt.sign(
//     { _id: UserFound.id },
//     "CatDogLion",
//     { expiresIn: "1d" },
//     function (error, token) {
//       if (UserFound) {
//         res.json({ UserFound, token });
//       }else{
//         res.json(error.message);
//       }
//     }
//   );
// });

// myApp.post("/check-session", (req, res) => {
//   if (!req.body.abc) {
//     return res.json(null);
//   }

//   jwt.verify(req.body.abc, "CatDogLion", (err, data) => {
//     let user = users.find((user) => {
//       if (user.id == data._id) {
//         return true;
//       }
//     });
//     res.json(user);
//   });
// });


// myApp.post("/deleteAccount", function (req, res) {
//   let index = req.body.index;
//   users.splice(index, 1);
//   res.status(200).end("UserDeleted");
// });


// myApp.delete("/deleteUser", function (req, res) {
//   users.splice(+req.query.abc, 1);
// });

// myApp.get("/users", function (Request, Response) {
//   Response.json(User.find().toArray());
// });

// myApp.listen(4500, function () {
//   console.log("server Running");
// });
