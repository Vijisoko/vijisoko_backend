var express = require('express');
var customerController = require('../controllers/customer');

var customer = express.Router();

customer.get(
  "/",
  customerController.getCustomers
);

customer.get(
  "/customer/:id",
  customerController.getCustomersById
);

customer.post(
  "/",
  customerController.validateCustomer('createCustomer'),
  customerController.createCustomer
);

module.exports = customer;
