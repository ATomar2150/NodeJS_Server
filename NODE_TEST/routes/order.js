const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

//***************ORDER*********************/
router.post('/add', function(req, res) {
    orderController.addOrder(req, res);
});

router.get('/all', function(req, res) {
    orderController.getAllOrders(req, res);
});


module.exports = router;