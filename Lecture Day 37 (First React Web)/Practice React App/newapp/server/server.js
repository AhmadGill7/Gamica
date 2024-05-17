let myExpress = require("express");
let myApp = myExpress();
let user = [];
myApp.post("/signup", function (Request, Response) {
  user.push(Request.body)
});
myApp.get("/abc", function (Request, Response) {
  // Response.end("server Challing");
  Response.json(user);
});

myApp.listen(4500, function () {
  console.log("server Running");
});

