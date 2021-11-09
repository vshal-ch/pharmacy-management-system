const Pharmacist = require("../models/Pharmacist");
const bcrypt = require("bcrypt");

const phCreate = (req, res) => {
  let pharmacist = new Pharmacist(req.body);
  console.log(pharmacist);
  pharmacist.save().then((result) => {
    res.redirect("/admin/pharmacist");
  });
};

const phGet = async (req, res, flag = true) => {
  let result = await Pharmacist.find();
  result = result.map((data) => {
    return {
      id: data.staffId,
      name: data.firstname + " " + data.lastname,
      uname: data.uname,
      salary: data.salary,
      phone: data.phone,
    };
  });
  if (flag) {
    res.render("admin-pharmacist", { tableData: result });
  } else {
    return result;
  }
};

const phDelete = async (req, res) => {
  Pharmacist.deleteOne({ staffId: req.params.id }).then((result) => {
    res.send("Deleted successfully");
  });
};

const phCompare = async (req, res) => {
  let obj = await Pharmacist.findOne({ uname: req.body.username });
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
  phCreate,
  phGet,
  phDelete,
  phCompare,
};
