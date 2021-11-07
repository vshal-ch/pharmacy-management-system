const express = require('express');

const route = express.Router();

route.use(express.static('public'));

route.get('/',(req,res)=>{
    res.render('admin');
})

route.get('/pharmacist',(req,res)=>{
    res.render('admin-pharmacist');
})

route.post('/pharmacist',(req,res)=>{
    console.log(req.body);
})

route.get('/manager',(req,res)=>{
    res.render('admin-manager');
})

route.get('/cashier',(req,res)=>{
    res.render('admin-cashier');
})

module.exports = route;