const Prescription = require('../models/Prescription');
const { getNames } = require('./stockController');

const getPresc =async (req,res)=>{
    let drugsArray = await getNames();
    Prescription.find().then(result=>{
        let obj = result.map(item =>{
            return {
                num: item.prescNum,
                name: item.customerName,
                invoiceNum: item.invoiceNum,
                drug: item.drug,
                strength: item.strength,
                dose: item.dose,
                quantity: item.quantity
            }
        })
        res.render('pharmacist-presc',{tableData: obj,drugNames: drugsArray})
    })
}

const addPresc = (req,res)=>{
    
}

module.exports={
    getPresc,
    addPresc
}