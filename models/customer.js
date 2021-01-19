var Customer = require('../databases/mongo_db/customer.js');
var dateFormat = require('dateformat');

var query = "";
var values = [];
var dateTime = new Date();

var createCustomer = async function(new_customer, callback){
  const customer = new Customer({
    fname: new_customer.fname,
    lname: new_customer.lname,
    phone: new_customer.phone,
    email: new_customer.email,
    delivery_point: new_customer.delivery_point,
    password: new_customer.password
  })
  const newCustomer = await customer.save();
  return callback(newCustomer)
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
