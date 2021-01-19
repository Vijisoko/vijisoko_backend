var express = require('express');
var ownerController = require('../controllers/owner');

var owner = express.Router();

// owner.get(
//   "/",
//   ownerController.getOwners
// );

// owner.get(
//   "/owner/:id",
//   ownerController.getOwnerById
// );

owner.post(
  "/",
  ownerController.createOwner
);

module.exports = owner;
