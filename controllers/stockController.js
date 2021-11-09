const Stock = require("../models/Stock");

const addStock = (req, res, flag = true) => {
  const stock = new Stock(req.body);
  stock.save().then((result) => {
    if (flag) {
      res.redirect("/pharmacist/stocks");
    } else {
      return result;
    }
  });
};

const getStock = async (req, res, flag = true) => {
  let dres = await Stock.deleteMany({ quantity: 0 });
  let result = await Stock.find();
  let obj = result.map((item) => {
    return {
      id: item.stockId,
      name: item.drug,
      category: item.category,
      desc: item.desc,
      quantity: item.quantity,
      cost: item.unitCost,
    };
  });
  if (flag) {
    res.render("pharmacist-stocks", { tableData: obj });
  } else {
    return obj;
  }
};

const getNames = async () => {
  let result = await Stock.find({}, { stockId: 1, drug: 1 });
  return result;
};

const decreaseStock = async (id, num) => {
  id = parseInt(id);
  num = parseInt(num);
  let left = await Stock.findOne({ stockId: id }, { quantity: 1 });
  return await Stock.updateOne(
    { stockId: id },
    { $set: { quantity: left.quantity - num } }
  );
};

module.exports = {
  addStock,
  getStock,
  getNames,
  decreaseStock,
};
