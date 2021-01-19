var businessModel = require('../models/business');
var business = require('../data/business');
var json_data = {
  'status': 'failed'
};

var createBusiness = (req, res) => {
  try{
    businessModel.createBusiness(req.body, function(result){
      console.log("status: "+result);
      res.status(201).json(result)
      console.log("business created");
    });
  }catch(err){
    res.status(400).json({message: err.message})
  }
}

var getBusiness = (req, res) => {
  businessModel.getBusiness(req.params.id, function(business){
    if(business == null){        
      res.status(404).json({ message: "cannot find business" })
    }
    res.json(business);
    console.log(business)
  });
}

var getBusinesssByDate = (req, res) => {
  try{
    businessModel.getBusinesssByDate(req.params.date, function(businesss){
      if(businesss !== null){
        json_data = JSON.stringify(businesss);
        console.log("businesss: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getBusinesssByBusinessByDate = (req, res) => {
  try{
    businessModel.getBusinesssByBusinessByDate(req.params, function(businesss){
      if(businesss !== null){
        json_data = JSON.stringify(businesss);
        console.log("businesss: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getBusinesses = (req, res) => {
  businessModel.getBusinesses(function(businesses){
    res.json(businesses)
  });
}

var updateBusiness = (req, res) => {
  try{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log("validation errors:"+JSON.stringify(errors.array()[0]));
      return;
    }
    console.log(JSON.stringify(req.body));
    business.businessBusinessId = req.body.business_id;

    businessModel.updateBusiness(business, function(result){
      console.log("status: "+result);
      if(result.affectedRows === 1){
        console.log("business updated");
        json_data = {
          'status': 'success'
        }
      }
      console.log("business not updated");
      res.send(json_data);
    });

  }catch(error){
    res.send("There was an error "+error);
  }
}

var deleteBusiness = (req, res) => {
  try{
    businessModel.deleteBusiness(req.params.id, function(result){
      console.log("status: "+result);
      if(result.affectedRows === 1){
        console.log("business deleted");
        json_data = {
          'status': 'success'
        }
        res.send(json_data);
      }
      console.log("business not deleted");
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

module.exports = {
  createBusiness,
  getBusinesses,
  getBusiness,
  getBusinesssByDate,
  updateBusiness,
  deleteBusiness
}
