const Manager = require("../models/Manager");
const bcrypt = require("bcrypt");
const pharmacist = require('./pharmacistController')
const cashier = require('./cashierController')
const presc = require('./prescController')
const stock = require('./stockController')

const mgCreate = (req, res) => {
  let manager = new Manager(req.body);
  manager.save().then((result) => {
    res.redirect("/admin/manager");
  });
};

const mgGet = async (req, res, flag = true) => {
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
  if(flag){
    res.render("admin-manager", { tableData: result });
  }
  else{
    return result;
  }
};

const mgDelete = async (req, res) => {
  Manager.deleteOne({ staffId: req.params.id }).then((result) => {
    res.send("Deleted successfully");
  });
};

const mgCompare = async (req, res) => {
  let obj = await Manager.findOne({ uname: req.body.username });
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

const mgView = async (req,res)=>{
  Promise.all([mgGet(req,res,false),pharmacist.phGet(req,res,false),cashier.csGet(req,res,false)])
  .then(array=>{
    res.render('manager-view',{managers: array[0],pharmacists: array[1],cashiers: array[2]});
  })
}

const mgPresc = async (req,res)=>{
  let result = await presc.getPresc(req,res,false);
  res.render('manager-presc',{tableData: result})
}

const mgStocks = async(req,res)=>{
  let result =  await stock.getStock(req,res,false);
  res.render('manage-stock',{tableData: result})
}

const mgAddStocks = (req,res)=>{
  stock.addStock(req,res,false);
  res.redirect('/manager/stocks');
}

module.exports = {
  mgCreate,
  mgGet,
  mgDelete,
  mgCompare,
  mgView,
  mgPresc,
  mgStocks,
  mgAddStocks
};
