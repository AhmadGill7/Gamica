let myExpress = require("express");
let myApp = myExpress();
myApp.use(myExpress.json());

let users = [{
  newUser: {

    // Email: "ali@gmail.com",
    Password: "1234",
    UserName: "Ali",
    // FullName: "Ali Tahir",
    // City: "Faisalabad",
  }
},
];
myApp.post("/signup", function (req, res) {
  let newUser = req.body;
  // Check for required fields
  // if (!newUser.Email || !newUser.Password || !newUser.UserName || !newUser.FullName || !newUser.City) {
  //   return res.status(400).json({ error: "All fields are required" });
  // }

  // Check for duplicate email
  // const existingUser = user.find(user => user.Email === newUser.Email);
  // if (existingUser) {
  //   return res.status(400).json({ error: "Email already exists" });
  // }
  users.push({ newUser });
  res.status(201).json(newUser);
});
myApp.post("/deleteUser", function (req, res) {
  let index = req.body.index;
  users.splice(index, 1)
  res.status(200).end("UserDeleted")
})







myApp.get("/users", function (Request, Response) {
  Response.json(users);
});

myApp.listen(4500, function () {
  console.log("server Running");
});

