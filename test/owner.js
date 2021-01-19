const owner = require('../data/owner');
const chai = require('chai');
const expect = chai.expect;

describe("owner", function(){
  beforeEach(function(){
    owner.ownerOwnerId = 1;
    owner.ownerDateTime = "3/01/2020";
  });
  it("ownerId: setter and getter", function(){
    expect(owner.owner_id).to.equal(1);
    expect(owner.owner_id).not.to.equal(2);
  });
  it("dateTime: setter and getter", function(){
    expect(owner.date_time).to.equal("3/01/2020");
    expect(owner.date_time).not.to.equal("4/01/2021");
  });
});
