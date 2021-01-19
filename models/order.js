var Order = require('../databases/mongo_db/order.js');
const {ObjectId} = require('mongodb');
var dateFormat = require('dateformat');

var query = "";
var values = [];
var dateTime = new Date();

var createOrder = async function(new_order, callback){
  const order = new Order({
    customer_id: new_order.customer_id,
    product_id: new_order.product_id,
    quantity: new_order.quantity,
    cost: new_order.cost,
    variant: new_order.variant,
    delivery_point: new_order.delivery_point,
    shipping: new_order.shipping,
    payment: {
        mode: new_order.payment_mode,
        amount: new_order.amount 
    }
  })
  const newOrder = await order.save();
  return callback(newOrder)
}

var acceptOrder = async function(pending_acceptance, callback){
  const acceptedOrder = await Order.updateOne({ _id: ObjectId(pending_acceptance.order_id) }, { $set: {"accept": pending_acceptance.acceptance }});
  return callback(acceptedOrder)
}

var dispatchOrder = async function(pending_dispatch, callback){
  console.log("dispatch status", pending_dispatch.dispatch.status);
  console.log("dispatch person", pending_dispatch.dispatch.delivery.person_name);
  try{
    const dispatchedOrder = await Order.updateOne({ _id: ObjectId(pending_dispatch.order_id) }, { 
      $set: {
        "dispatch.$.status": pending_dispatch.dispatch.status,
        "dispatch.$.delivery": pending_dispatch.dispatch.delivery, 
        // "dispatch.$.delivery.$.person_phone": pending_dispatch.dispatch.delivery.person_phone,
        // "dispatch.$.delivery.$.[mode]": pending_dispatch.dispatch.delivery.mode
      }
    });
    return callback(dispatchedOrder)    
  }catch(err){
    console.log("Error: ",err.message)
  }
  
}

var updateOrder = (updated_order, callback) => {

}

var getOrder = (orderId, callback) => {

}

var getOrders = function(callback){

}

var deleteOrder = (orderId, callback) => {

}

module.exports = {
  createOrder,
  acceptOrder,
  dispatchOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder
}
