var Owner = require('../databases/mongo_db/owner.js');
var Business = require('../databases/mongo_db/business');
var dateFormat = require('dateformat');

var query = "";
var values = [];
var dateTime = new Date();

var createOwner = async function(new_owner, callback){
  const owner = new Owner({
    _id: new mongoose.Types.ObjectId(),
    fname: new_owner.fname,
    lname: new_owner.lname,
    email: new_owner.email,
    phone: new_owner.phone,
    password: new_owner.password
  })
  const newOwner = await owner.save(async()=>{
    let business = new Business({
      
    })
  });
  return callback(newOwner)
}

var updateOwner = (updated_owner, callback) => {

}

var getOwner = (ownerId, callback) => {

}

var getOwners = function(callback){

}

var deleteOwner = (ownerId, callback) => {

}

module.exports = {
  createOwner,
  getOwners,
  getOwner,
  updateOwner,
  deleteOwner
}
