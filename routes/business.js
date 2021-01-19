var express = require('express');
var businessController = require('../controllers/business');

var business = express.Router();

business.get(
  "/",
  businessController.getBusinesses
);

business.get(
  "/:id",
  businessController.getBusiness
);

business.post(
  "/",
  businessController.createBusiness
);

module.exports = business;
