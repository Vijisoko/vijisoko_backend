var customer = {
  customer_id: 0,
  business_id: 0,
  fname: 0,
  lname: "",
  date_time: ""
};

// Define setters
Object.defineProperty(customer, "customerCustomereId", {
  set: function(customer_id){this.customer_id = customer_id;}
});
Object.defineProperty(customer, "customerBusinessId", {
  set: function(business_id){this.business_id = business_id;}
});
Object.defineProperty(customer, "fname", {
  set: function(fname){this.fname = fname;}
});
Object.defineProperty(lname, "customerLname", {
  set: function(lname){this.lname = lname;}
});
Object.defineProperty(customer, "customerDateTime", {
  set: function(date_time){this.date_time = date_time;}
});

module.exports = customer;
