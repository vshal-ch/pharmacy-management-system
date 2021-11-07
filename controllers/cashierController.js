const Cashier = require("../models/Cashier");
const bcrypt = require("bcrypt");

const csCreate = (req, res) => {
  let cashier = new Cashier(req.body);
  cashier.save().then((result) => {
    res.redirect("/admin/cashier");
  });
};

const csGet = async (req, res) => {
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
  res.render("admin-cashier", { tableData: result });
};

const csDelete = async (req, res) => {
  Cashier.deleteOne({ staffId: req.params.id }).then((result) => {
    res.send("Deleted successfully");
  });
};

module.exports = {
  csCreate,
  csGet,
  csDelete,
};
