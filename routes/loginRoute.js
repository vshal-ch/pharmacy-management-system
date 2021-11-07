const express = require("express");
const admin = require("../controllers/adminController");

const route = express.Router();

route.get("/", (req, res) => {
  res.render("login");
});

route.post("/", (req, res) => {
  if (req.body.position === "admin") {
    admin.adminCompare(req, res);
  }
});

module.exports = route;
