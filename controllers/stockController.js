const Stock = require('../models/Stock');

const addStock = (req,res)=>{
    const stock = new Stock(req.body);
    stock.save().then(result=>{
        res.redirect('/pharmacist/stocks');
    })
}

const getStock = (req,res)=>{
    Stock.deleteMany({quantity:0}).then(resu=>{
        Stock.find().then(result=>{
            let obj = result.map(item=>{
                return {
                    id: item.stockId,
                    name: item.drug,
                    category: item.category,
                    desc: item.desc,
                    quantity: item.quantity,
                    cost: item.unitCost
                }
            })
            res.render('pharmacist-stocks',{tableData: obj});
        })
    })
}

const getNames = async ()=>{
    let result = await Stock.find({},{stockId:1,drug:1});
    return result;
}

const decreaseStock = (id,num)=>{
    
}


module.exports ={
    addStock,
    getStock,
    getNames
}