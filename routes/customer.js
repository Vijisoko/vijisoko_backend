var express = require('express');
var customerController = require('../controllers/customer');

var customer = express.Router();

customer.post(
  "/",
  customerController.createCustomer
);

module.exports = customer;
