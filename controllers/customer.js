var customerModel = require('../models/customer');

var createCustomer = (req, res) => {
  customerModel.createCustomer(req.body, function(result){
    console.log("status: "+result);
    res.send(result);
    console.log("customer created");
  });    
}

module.exports = {
  createCustomer
}
