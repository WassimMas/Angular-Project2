// import express application

const express = require("express");

// import body-parser

const bodyParser = require("body-parser");
// import cors

const cors = require("cors");
// import mongoose

const mongoose = require("mongoose");

// import bcrypt module
const bcrypt = require("bcrypt");

// cnx mongodb and DB with mongoose

mongoose.connect("mongodb://127.0.0.1:27017/restoDB");

// Create express application

const app = express();

// configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configuration cors

app.use(cors());

// Data
let platsData = [
  {
    id: "1",
    name: "Pork Sandwich",
    description: "They're wherein heaven seed hath nothing",
    price: "$40.00",
    ingredient: "potatos and chicken",
  },
  {
    id: "2",
    name: "Kabeb Sandwich",
    description: "They're wherein heaven seed hath nothing",
    price: "$55.00",
    ingredient: "potatos and chicken",
  },
  {
    id: "3",
    name: "Chicken Sandwich",
    description: "They're wherein heaven seed hath nothing",
    price: "$50.00",
    ingredient: "potatos and chicken",
  },
  {
    id: "4",
    name: "Snacks",
    description: "They're wherein heaven seed hath nothing",
    price: "$30.00",
    ingredient: "cheese and chicken",
  },
  {
    id: "5",
    name: "Pizza",
    description: "They're wherein heaven seed hath nothing",
    price: "$35.00",
    ingredient: "potatos and chicken",
  },
];

let chefsData = [
  { id: "1", name: "Adam Taylor", experience: "Chef Master" },
  { id: "2", name: "Jhon White", experience: "Chef Master" },
  { id: "3", name: "David Stone", experience: "Chef Master" },
  { id: "4", name: "Philip Snow", experience: "Chef Master" },
];
// models importation
const Chef = require("./models/chef");
const Plat = require("./models/plat");
const User = require("./models/user");

// traitement

// Business Logic Get All Plats
app.get("/plats", (req, res) => {
  console.log("here into BL : Get All plats");
  // res.json({ plats: platsData });
  Plat.find().then((docs) => {
    res.json({ plats: docs });
  });
});

// Business Logic Get Plat By ID
app.get("/plats/:id", (req, res) => {
  console.log("here into BL : Get Plat By ID");
  // let platId = req.params.id;
  // let findedPlat = platsData.find((obj) => {
  //   return obj.id == platId;
  // });
  // res.json({ plat: findedPlat });
  Plat.findById(req.params.id).then((doc) => {
    console.log("here finded object", doc);
    res.json({ findedPlat: doc });
  });
});

// Business Logic ADD Plat
app.post("/plats", (req, res) => {
  console.log("here into BL : ADD plat");
  // let obj = req.body;
  // platsData.push(obj);
  // res.json({ msg: "added with success" });
  let obj = new Plat(req.body);
  obj.save();
  res.json({ msg: "added with success" });
});

// Business Logic Edit Plat
app.put("/plats", (req, res) => {
  console.log("here into BL : Edit Plat");
  let obj = req.body;
  // for (let i = 0; i < platsData.length; i++) {
  //   if (platsData[i].id == obj.id) {
  //     platsData[i] = obj;
  //   }
  // }
  // res.json({ msg: "edited with success" });
  Plat.updateOne({ _id: req.body._id }, obj).then((updatedResponse) => {
    console.log("here response after updationg :", updatedResponse);
    if (updatedResponse.nModified == 1) {
      res.json({ isUpdated: true });
    } else {
      res.json({ isUpdated: false });
    }
  });
});

// Business Logic Delete Plat
app.delete("/plats/:id", (req, res) => {
  console.log("here into BL : Delete plat");
  // let platId = req.params.id;
  // for (let i = 0; i < platsData.length; i++) {
  //   if (platsData[i].id == platId) {
  //     platsData.splice(i, 1);
  //     break;
  //   }
  // }
  // res.json({ msg: "deleted with success" });
  Plat.deleteOne({ _id: req.params.id }).then((deletedResponse) => {
    console.log("here deleted response :", deletedResponse);
    if (deletedResponse.deletedCount == 1) {
      res.json({ msg: "is deleted" });
    } else {
      res.json({ msg: "error" });
    }
  });
});

// Business Logic Get All Chefs
app.get("/chefs", (req, res) => {
  // console.log("here into BL : Get All chefs");
  // res.json({ chefs: chefsData });
  Chef.find().then((docs) => {
    console.log("here finded elements :", docs);
    res.json({ findedChefs: docs });
  });
});

// Business Logic Get Chef By ID
app.get("/chefs/:id", (req, res) => {
  console.log("here into BL : Get Chef By ID");
  let chefId = req.params.id;
  // let findedchef = chefsData.find((obj) => {
  //   return obj.id == chefId;
  // });
  // res.json({ chef: findedchef });
  Chef.findById(chefId).then((doc) => {
    console.log("here finded element :", doc);
    res.json({ findedChef: doc });
  });
});

// Business Logic ADD Chef
app.post("/chefs", (req, res) => {
  console.log("here into BL : ADD Chef");
  let obj = new Chef(req.body);
  // chefsData.push(obj);
  // res.json({ msg: "added with success" });
  obj.save();
  res.json({ msg: "added with success" });
});

// Business Logic Edit chef
app.put("/chefs", (req, res) => {
  console.log("here into BL : Edit chef");
  let obj = req.body;
  // for (let i = 0; i < chefsData.length; i++) {
  //   if (chefsData[i].id == obj.id) {
  //     chefsData[i] = obj;
  //     break;
  //   }
  // }
  // res.json({ msg: "edited with success" });
  Chef.updateOne({ _id: req.body._id }, obj).then((updatedResponse) => {
    console.log("here response after updation :", updatedResponse);
    if (updatedResponse.nModified == 1) {
      res.json({ msg: "updated with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});

// Business Logic Delete chef
app.delete("/chefs/:id", (req, res) => {
  console.log("here into BL : Delete chef");
  let chefId = req.params.id;
  // for (let i = 0; i < chefsData.length; i++) {
  //   if (chefsData[i].id == chefId) {
  //     chefsData.splice(i, 1);
  //     break;
  //   }
  // }
  // res.json({ msg: "deleted with success" });
  Chef.deleteOne({ _id: req.params.id }).then((deletedObject) => {
    console.log("here deleted object", deletedObject);
    if (deletedObject.deletedCount == 1) {
      res.json({ msg: "deleted with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});

// Business Logic login

app.post("/users/login", (req, res) => {
  // console.log("here into BL : login");
  User.findOne({ email: req.body.email, password: req.body.password }).then(
    (doc) => {
      console.log("here finded element", doc);
      if (doc) {
        res.json({ isLogged: true });
      } else {
        res.json({ isLogged: false });
      }
    }
  );
});

// Business Logic signup

app.post("users/subscription", (req, res) => {
  console.log("here into BL : signup");
});

// make app importable from another files

module.exports = app;
