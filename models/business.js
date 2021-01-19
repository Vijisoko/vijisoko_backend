var Business = require('../databases/mongo_db/business');
var dateFormat = require('dateformat');

var query = "";
var values = [];
var dateTime = new Date();

var createBusiness = async function(new_business, callback){
  const business = new Business({
    name: new_business.name,
    type: new_business.type
  })
  console.log(new_business)
  const newBusiness = await business.save()
  console.log(newBusiness)
  return callback(newBusiness)
}

var updateBusiness = (updated_business, callback) => {

}

var getBusiness = async (businessId, callback) => {
  const foundBusiness = await Business.findById(businessId)
  console.log("found: "+foundBusiness)
  return callback(foundBusiness)
}

var getBusinesses = async function(callback){
  const foundBusinesses = await Business.find()
  console.log(foundBusinesses)
  return callback(foundBusinesses)
}

var deleteBusiness = (businessId, callback) => {

}

module.exports = {
  createBusiness,
  getBusinesses,
  getBusiness,
  updateBusiness,
  deleteBusiness
}
