var customerModel = require('../models/customer');
var customer = require('../data/customer');
const { check, validationResult } = require('customer-validator');
var json_data = {
  'status': 'failed'
};

var validateCustomer = (method) => {
  switch(method){
    case 'createCustomer': {
      return [
        //check('name', "Name doesn't exist").isAlpha()
      ]
    }
    case 'updateCustomer': {
      return [
      //  check('name', "Name doesn't exist").isAlpha(),
      ]
    }
  }
}

var createCustomer = (req, res) => {
  try{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log("validation errors:"+errors.array());
      return;
    }

    customerModel.createCustomer(req.body, function(result){
      console.log("status: "+result);
      res.send(result);
      console.log("customer not created");
    });
  }catch(error){
    console.log("There was an error"+error);
  }
}

var getCustomer = (req, res) => {
  try{
    customerModel.getCustomer(req.params.id, function(customer){
      if(customer !== null){
        json_data = {
          'status': 'success',
          'trip': {
            'customer_id': customer.customer_id,
            'fname': customer.fname,
            'lname': customer.lname,
            'date_time': customer.date_time
          }
        }
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getCustomersByDate = (req, res) => {
  try{
    customerModel.getCustomersByDate(req.params.date, function(customers){
      if(customers !== null){
        json_data = JSON.stringify(customers);
        console.log("customers: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getCustomersByCustomerByDate = (req, res) => {
  try{
    customerModel.getCustomersByCustomerByDate(req.params, function(customers){
      if(customers !== null){
        json_data = JSON.stringify(customers);
        console.log("customers: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getCustomers = (req, res) => {
  try{
    customerModel.getCustomers(function(customers){
      if(customers !== null){
        json_data = JSON.stringify(customers);
        console.log("customers: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var updateCustomer = (req, res) => {
  try{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log("validation errors:"+JSON.stringify(errors.array()[0]));
      return;
    }
    console.log(JSON.stringify(req.body));
    customer.customerCustomerId = req.body.customer_id;
    customer.customerFname = req.body.fname;
    customer.customerLname = req.body.lname;

    customerModel.updateCustomer(customer, function(result){
      console.log("status: "+result);
      if(result.affectedRows === 1){
        console.log("customer updated");
        json_data = {
          'status': 'success'
        }
      }
      console.log("customer not updated");
      res.send(json_data);
    });

  }catch(error){
    res.send("There was an error "+error);
  }
}

var deleteCustomer = (req, res) => {
  try{
    customerModel.deleteCustomer(req.params.id, function(result){
      console.log("status: "+result);
      if(result.affectedRows === 1){
        console.log("customer deleted");
        json_data = {
          'status': 'success'
        }
        res.send(json_data);
      }
      console.log("customer not deleted");
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

module.exports = {
  validateCustomer,
  createCustomer,
  getCustomers,
  getCustomer,
  getCustomersByDate,
  getTotalCustomersByDate,
  updateCustomer,
  deleteCustomer
}
