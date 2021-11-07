const express = require('express');
const pharmacist = require('../controllers/pharmacistController');

const route = express.Router();

route.use(express.static('public'));

route.get('/',(req,res)=>{
    res.render('admin');
})

route.get('/pharmacist',pharmacist.phGet)

route.post('/pharmacist',pharmacist.phCreate)

route.get('/manager',(req,res)=>{
    res.render('admin-manager');
})

route.get('/cashier',(req,res)=>{
    res.render('admin-cashier');
})

module.exports = route;