// import mongoose module
const mongoose = require("mongoose");

// create schema

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// create model

const user = mongoose.model("User", userSchema);

// export user

module.exports = user;
