const express = require('express');
const stock = require('../controllers/stockController');
const presc = require('../controllers/prescController');

const route = express.Router();

route.use(express.static('public'))

route.get('/',(req,res)=>{
    res.render('pharmacist');
})

route.get('/presc',presc.getPresc)
route.post('/presc',presc.addPresc)
route.get('/stocks',stock.getStock);

route.post('/stocks',stock.addStock);

module.exports = route;