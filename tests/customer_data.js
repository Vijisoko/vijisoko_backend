const customer = require('../data/customer');
const chai = require('chai');
const expect = chai.expect;

describe("customer", function(){
  beforeEach(function(){
    customer.customerCustomerId = 1;
    customer.customerBusinessId = 1;
    customer.customerFname = "John";
    customer.customerLname = "Doe";
    customer.customerDateTime = "3/01/2020";
  });
  it("customerId: setter and getter", function(){
    expect(customer.customer_id).to.equal(1);
    expect(customer.customer_id).not.to.equal(2);
  });
  it("businessId: setter and getter", function(){
    expect(customer.business_id).to.equal(1);
    expect(customer.business_id).not.to.equal(2);
  });
  it("fname: setter and getter", function(){
    expect(customer.fname).to.equal("John");
    expect(customer.fname).not.to.equal("Tom");
  });
  it("lname: setter and getter", function(){
    expect(customer.lname).to.equal("Doe");
    expect(customer.lname).not.to.equal("Kevin");
  });
  it("dateTime: setter and getter", function(){
    expect(customer.date_time).to.equal("3/01/2020");
    expect(customer.date_time).not.to.equal("4/01/2021");
  });
});
