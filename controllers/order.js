var orderModel = require('../models/order');

var createOrder = (req, res) => {
  orderModel.createOrder(req.body, function(result){
    console.log("status: "+result);
    res.send(result);
    console.log("order created");
  });    
}

var acceptOrder = (req, res) => {
  orderModel.acceptOrder(req.body, function(result){
    console.log("status: "+result);
    res.send(result);
    console.log("order accepted");
  });
}

var dispatchOrder = (req, res) => {
  orderModel.dispatchOrder(req.body, function(result){
    console.log("status: "+result);
    res.send(result);
    console.log("order dispatched");
  });
}

module.exports = {
  createOrder,
  acceptOrder,
  dispatchOrder
}
