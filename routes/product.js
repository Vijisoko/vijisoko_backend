var express = require('express');
var productController = require('../controllers/product');

var product = express.Router();

// product.get(
//   "/",
//   productController.getProducts
// );

// product.get(
//   "/:id",
//   productController.getProduct
// );

product.post(
  "/",
  productController.createProduct
);

module.exports = product;
