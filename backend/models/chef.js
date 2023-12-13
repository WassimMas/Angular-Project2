// import mongoose
const mongoose = require("mongoose");
// create chef schema

const chefSchema = mongoose.Schema({
  name: String,
  experience: String,
  speciality: String,
});

// create chef model

const chef = mongoose.model("Chef", chefSchema);

// export chef

module.exports = chef;
