const Pharmacist = require('../models/Pharmacist');
const bcrypt = require('bcrypt');

const phCreate = (req,res)=>{
    let pharmacist = new Pharmacist(req.body);
    console.log(pharmacist);
    pharmacist.save().then(result=>{
      res.redirect('/admin/pharmacist');
    })
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
    res.render('admin-pharmacist',{tableData : result})
}

const phDelete = async (req,res)=>{
  Pharmacist.deleteOne({staffId: req.params.id}).then(result=>{
    res.send('Deleted successfully');
  });
}

module.exports ={
    phCreate,
    phGet,
    phDelete
}