// import express application

const express = require("express");

// import body-parser

const bodyParser = require("body-parser");

// Create express application

const app = express();

// configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// traitement

// Business Logic Get All Plats
app.get("/plats", (req, res) => {
  console.log("here into BL : Get All plats");
  res.json({ plats: platsData });
});

// Business Logic Get Plat By ID
app.get("/plats/:id", (req, res) => {
  console.log("here into BL : Get Plat By ID");
  let platId = req.params.id;
  let findedPlat = platsData.find((obj) => {
    return obj.id == platId;
  });
  res.json({ plat: findedPlat });
});

// Business Logic ADD Plat
app.post("/plats", (req, res) => {
  console.log("here into BL : ADD plat");
  let obj = req.body;
  platsData.push(obj);
  res.json({ msg: "added with success" });
});

// Business Logic Edit Plat
app.put("/plats", (req, res) => {
  console.log("here into BL : Edit Plat");
  let obj = req.body;
  for (let i = 0; i < platsData.length; i++) {
    if (platsData[i].id == obj.id) {
      platsData[i] = obj;
    }
  }
  res.json({ msg: "edited with success" });
});

// Business Logic Delete Plat
app.delete("/plats/:id", (req, res) => {
  console.log("here into BL : Delete plat");
  let platId = req.params.id;
  for (let i = 0; i < platsData.length; i++) {
    if (platsData[i].id == platId) {
      platsData.splice(i, 1);
      break;
    }
  }
  res.json({ msg: "deleted with success" });
});

// Business Logic Get All Chefs
app.get("/chefs", (req, res) => {
  console.log("here into BL : Get All chefs");
  res.json({ chefs: chefsData });
});

// Business Logic Get Chef By ID
app.get("/chefs/:id", (req, res) => {
  console.log("here into BL : Get Chef By ID");
  let chefId = req.params.id;
  let findedchef = chefsData.find((obj) => {
    return obj.id == chefId;
  });
  res.json({ chef: findedchef });
});

// Business Logic ADD Chef
app.post("/chefs", (req, res) => {
  console.log("here into BL : ADD Chef");
  let obj = req.body;
  chefsData.push(obj);
  res.json({ msg: "added with success" });
});

// Business Logic Edit chef
app.put("/chefs", (req, res) => {
  console.log("here into BL : Edit chef");
  let obj = req.body;
  for (let i = 0; i < chefsData.length; i++) {
    if (chefsData[i].id == obj.id) {
      chefsData[i] = obj;
      break;
    }
  }
  res.json({ msg: "edited with success" });
});

// Business Logic Delete chef
app.delete("/chefs/:id", (req, res) => {
  console.log("here into BL : Delete chef");
  let chefId = req.params.id;
  for (let i = 0; i < chefsData.length; i++) {
    if (chefsData[i].id == chefId) {
      chefsData.splice(i, 1);
      break;
    }
  }
  res.json({ msg: "deleted with success" });
});

// Business Logic login

app.post("/users/login", (req, res) => {
  console.log("here into BL : login");
});

// Business Logic signup

app.post("users/subscription", (req, res) => {
  console.log("here into BL : signup");
});

// make app importable from another files

module.exports = app;
