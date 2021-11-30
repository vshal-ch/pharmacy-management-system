const Prescription = require("../models/Prescription");
const { getNames, decreaseStock } = require("./stockController");

const getPresc = async (req, res, flag = true) => {
  let drugsArray = await getNames();
  let result = await Prescription.find();
  let obj = result.map((item) => {
    return {
      num: item.prescNum,
      name: item.customerName,
      invoiceNum: item.invoiceNum,
      drug: item.drug,
      strength: item.strength,
      dose: item.dose,
      quantity: item.quantity,
    };
  });
  if (flag) {
    res.render("pharmacist-presc", { tableData: obj, drugNames: drugsArray });
  } else {
    return obj;
  }
};

const addPresc = (req, res) => {
  let newPresc = new Prescription(req.body);
  newPresc.save().then((result) => {
    let num = req.body.quantity;
    decreaseStock(req.body.drug, num).then(() => {
      res.redirect("/pharmacist/presc");
    });
  });
};

module.exports = {
  getPresc,
  addPresc,
};
