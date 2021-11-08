const express = require('express');

const route = express.Router();

route.use(express.static('public'))

route.get('/',(req,res)=>{
    res.render('pharmacist');
})

route.get('/presc',(req,res)=>{
    res.render('pharmacist-presc')
})
route.get('/stocks',(req,res)=>{
    res.render('pharmacist-stocks')
})

module.exports = route;