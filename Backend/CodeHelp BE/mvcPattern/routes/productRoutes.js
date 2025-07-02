const express = require('express');
const router = express.Router();
const {getProducts,createProducts,updateProducts,deleteProducts} = require('../controllers/productController');

router.get('/products',getProducts);
router.post('/products',createProducts);
router.put('/products/:id',updateProducts);
router.delete('/products/:id',deleteProducts);


module.exports = router;