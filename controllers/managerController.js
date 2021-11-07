const Manager = require("../models/Manager");
const bcrypt = require("bcrypt");

const mgCreate = (req, res) => {
  let manager = new Manager(req.body);
  manager.save().then((result) => {
    res.redirect("/admin/manager");
  });
};

const mgGet = async (req, res) => {
  let result = await Manager.find();
  result = result.map((data) => {
    return {
      id: data.staffId,
      name: data.firstname + " " + data.lastname,
      uname: data.uname,
      salary: data.salary,
      phone: data.phone,
    };
  });
  res.render("admin-manager", { tableData: result });
};

const mgDelete = async (req, res) => {
  Manager.deleteOne({ staffId: req.params.id }).then((result) => {
    res.send("Deleted successfully");
  });
};

module.exports = {
  mgCreate,
  mgGet,
  mgDelete,
};
