const express = require('express');
const manager = require('../controllers/managerController');

let route = express.Router();

route.use(express.static('public'));

route.get('/',(req,res)=>{
    res.render('manager');
})

route.get('/view',manager.mgView)
route.get('/presc',manager.mgPresc)
route.get('/stocks',manager.mgStocks)
route.post('/stocks',manager.mgAddStocks)

module.exports = route;