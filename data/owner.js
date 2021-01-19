var owner = {
  owner_id: 0,
  date_time: ""
};

// Define setters
Object.defineProperty(owner, "ownerOwnerId", {
  set: function(owner_id){this.owner_id = owner_id;}
});
Object.defineProperty(owner, "ownerDateTime", {
  set: function(date_time){this.date_time = date_time;}
});

module.exports = owner;
