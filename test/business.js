const business = require('../data/business');
const chai = require('chai');
const expect = chai.expect;

describe("business", function(){
  beforeEach(function(){
    business.businessBusinessId = 1;
    business.businessDateTime = "3/01/2020";
  });
  it("businessId: setter and getter", function(){
    expect(business.business_id).to.equal(1);
    expect(business.business_id).not.to.equal(2);
  });
  it("dateTime: setter and getter", function(){
    expect(business.date_time).to.equal("3/01/2020");
    expect(business.date_time).not.to.equal("4/01/2021");
  });
});
