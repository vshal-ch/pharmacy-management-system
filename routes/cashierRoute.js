const express = require("express");
const presc = require("../controllers/prescController");

const route = express.Router();

route.use(express.static("public"));

route.get("/", (req, res) => {
  res.render("cashier");
});

route.get("/bills", async (req, res) => {
    let result = await presc.getPresc(req,res,false);
    res.render('cashier-bills',{tableData: result})
});

module.exports = route;