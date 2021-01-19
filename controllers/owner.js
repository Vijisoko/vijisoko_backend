var ownerModel = require('../models/owner');
var owner = require('../data/owner');

var createOwner = (req, res) => {
  ownerModel.createOwner(req.body, function(result){
    console.log("status: "+result);
    res.send(result);
    console.log("owner created");
  });    
}

var getOwner = (req, res) => {
  try{
    ownerModel.getOwner(req.params.id, function(owner){
      if(owner !== null){
        json_data = {
          'status': 'success',
          'trip': {
            'owner_id': owner.owner_id,
            'date_time': owner.date_time
          }
        }
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getOwnersByDate = (req, res) => {
  try{
    ownerModel.getOwnersByDate(req.params.date, function(owners){
      if(owners !== null){
        json_data = JSON.stringify(owners);
        console.log("owners: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getOwnersByOwnerByDate = (req, res) => {
  try{
    ownerModel.getOwnersByOwnerByDate(req.params, function(owners){
      if(owners !== null){
        json_data = JSON.stringify(owners);
        console.log("owners: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var getOwners = (req, res) => {
  try{
    ownerModel.getOwners(function(owners){
      if(owners !== null){
        json_data = JSON.stringify(owners);
        console.log("owners: "+json_data);
      }
      res.send(json_data);
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

var updateOwner = (req, res) => {
  try{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log("validation errors:"+JSON.stringify(errors.array()[0]));
      return;
    }
    console.log(JSON.stringify(req.body));
    owner.ownerOwnerId = req.body.owner_id;

    ownerModel.updateOwner(owner, function(result){
      console.log("status: "+result);
      if(result.affectedRows === 1){
        console.log("owner updated");
        json_data = {
          'status': 'success'
        }
      }
      console.log("owner not updated");
      res.send(json_data);
    });

  }catch(error){
    res.send("There was an error "+error);
  }
}

var deleteOwner = (req, res) => {
  try{
    ownerModel.deleteOwner(req.params.id, function(result){
      console.log("status: "+result);
      if(result.affectedRows === 1){
        console.log("owner deleted");
        json_data = {
          'status': 'success'
        }
        res.send(json_data);
      }
      console.log("owner not deleted");
    });
  }catch(error){
    res.send("There was an error "+error);
  }
}

module.exports = {
  createOwner,
  getOwners,
  getOwner,
  getOwnersByDate,
  updateOwner,
  deleteOwner
}
