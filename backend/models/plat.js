// import mongoose
const mongoose = require("mongoose");

// create plat schema

const platSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  ingredient: String,
});

// create plat model

const plat = mongoose.model("Plat", platSchema);

// export plat

module.exports = plat;
