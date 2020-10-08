var db = require('../databases/mongo_db');
var customer = require('../data/customer');
var dateFormat = require('dateformat');

var query = "";
var values = [];
var dateTime = new Date();

var createCustomer = function(new_customer, callback){

}

var updateCustomer = (updated_customer, callback) => {

}

var getCustomer = (customerId, callback) => {

}

var getCustomers = function(callback){

}

var deleteCustomer = (customerId, callback) => {

}

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
}
