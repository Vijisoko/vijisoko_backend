var business = {
  business_id: 0,
  date_time: ""
};

// Define setters
Object.defineProperty(business, "businessBusinessId", {
  set: function(business_id){this.business_id = business_id;}
});
Object.defineProperty(business, "businessDateTime", {
  set: function(date_time){this.date_time = date_time;}
});

module.exports = business;
