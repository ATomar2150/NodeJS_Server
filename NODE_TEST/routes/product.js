const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

//***************PRODUCT***************** */
//PRODUCT - GET ALL PRODUCTS
router.get('/', function (req, res) {
    productController.getProducts(req, res);
});

//PRODUCT - GET PRODUCT BY ID
router.get('/:id', function(req, res) {
    productController.getProductById(req, res);
});

module.exports = router;