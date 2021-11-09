const express = require('express');

const route = express.Router();

route.use(express.static('public'));

route.get('/',(req,res)=>{
    res.render('cashier');
})

route.get('/payment',(req,res)=>{
    res.render('cashier-payment');
})

module.exports = route;