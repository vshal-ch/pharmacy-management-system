const Pharmacist = require('../models/Pharmacist');
const bcrypt = require('bcrypt');

const phCreate = (req,res)=>{
    let pharmacist = new Pharmacist(req.body);
    pharmacist.save();
}

const phGet = async (req,res)=>{
    let result = await Pharmacist.find();
    result = result.map(data =>{
        return {
          id: data.staffId,
          name: data.firstname+' '+data.lastname,
          uname: data.uname,
          salary: data.salary,
          phone: data.phone
        }
      })
    console.log(result);
    res.render('admin-pharmacist',{tableData : result})
}

module.exports ={
    phCreate,
    phGet
}