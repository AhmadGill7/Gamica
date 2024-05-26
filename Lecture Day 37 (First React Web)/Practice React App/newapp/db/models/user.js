let mongoose = require("mongoose");

let userStructure = mongoose.Schema({
  UserName: String,
  FullName: String,
  Password: String,
  Email: String,
  Profile: String,
  City: String,
});

let User = mongoose.model("User", userStructure);

module.exports = User;
