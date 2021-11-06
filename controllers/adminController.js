const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

const adminCreate = (obj) => {
  bcrypt.hash(obj.key, 10, function (err, hash) {
    const admin = new Admin({
      name: obj.name,
      key: hash,
    });
    admin.save().then(() => {
      console.log("saved successfully");
    });
  });
};

const adminPrint = () => {
  Admin.find().then((res) => console.log(res));
};

const adminCompare = async (req, res) => {
  let obj = await Admin.findOne({ name: req.body.username });
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
  adminCreate,
  adminPrint,
  adminCompare,
};
