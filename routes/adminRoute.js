const express = require('express');
const pharmacist = require('../controllers/pharmacistController');
const manager = require('../controllers/managerController');
const cashier = require('../controllers/cashierController');

const route = express.Router();

route.use(express.static('public'));

route.get('/',(req,res)=>{
    res.render('admin');
})

route.get('/pharmacist',pharmacist.phGet)

route.post('/pharmacist',pharmacist.phCreate)

route.delete('/pharmacist/:id',pharmacist.phDelete)

route.get('/manager',manager.mgGet)

route.post('/manager',manager.mgCreate)

route.delete('/manager/:id',manager.mgDelete)

route.get('/cashier',cashier.csGet)

route.post('/cashier',cashier.csCreate)

route.delete('/cashier/:id',cashier.csDelete)

module.exports = route;