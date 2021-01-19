var express = require('express');
var orderController = require('../controllers/order');

var order = express.Router();

order.post(
  "/",
  orderController.createOrder
);

order.put(
  "/accept",
  orderController.acceptOrder
)

order.put(
  "/dispatch",
  orderController.dispatchOrder
)

module.exports = order;
