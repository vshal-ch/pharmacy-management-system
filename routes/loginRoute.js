const express = require("express");
const admin = require("../controllers/adminController");
const pharmacist = require("../controllers/pharmacistController");

const route = express.Router();

route.get("/", (req, res) => {
  res.render("login");
});

route.post("/", (req, res) => {
  if (req.body.position === "admin") {
    admin.adminCompare(req, res);
  }
  else if(req.body.position === "pharmacist") {
    pharmacist.phCompare(req, res);
  }
});

module.exports = route;