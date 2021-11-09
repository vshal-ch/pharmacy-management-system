const Cashier = require("../models/Cashier");
const bcrypt = require("bcrypt");

const csCreate = (req, res) => {
  let cashier = new Cashier(req.body);
  cashier.save().then((result) => {
    res.redirect("/admin/cashier");
  });
};

const csGet = async (req, res,flag=true) => {
  let result = await Cashier.find();
  result = result.map((data) => {
    return {
      id: data.staffId,
      name: data.firstname + " " + data.lastname,
      uname: data.uname,
      salary: data.salary,
      phone: data.phone,
    };
  });
  if(flag){
    res.render("admin-cashier", { tableData: result });
  }
  else{
    return result
  }
};

const csDelete = async (req, res) => {
  Cashier.deleteOne({ staffId: req.params.id }).then((result) => {
    res.send("Deleted successfully");
  });
};

const csCompare = async (req, res) => {
  let obj = await Cashier.findOne({ uname: req.body.username });
  if (!obj) {
    return res.render("login", {
      passkey: req.body.password,
      message: "User not found",
    });
  }
  let flag = await bcrypt.compare(req.body.password, obj.key);
  if (flag) {
    return res.render("login", {
      success: true,
      name: req.body.username,
      pos: req.body.position,
    });
  } else {
    return res.render("login", {
      name: req.body.username,
      message: "Incorrect password",
    });
  }
};

module.exports = {
  csCreate,
  csGet,
  csDelete,
  csCompare,
};
