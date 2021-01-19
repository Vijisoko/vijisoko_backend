var productModel = require('../models/product');

var createProduct = (req, res) => {
  try{
    productModel.createProduct(req.body, function(result){
      console.log("status: "+result);
      res.status(201).json(result)
      console.log("Product created");
    });
  }catch(err){
    res.status(400).json({message: err.message})
  }
}

var getProduct = (req, res) => {
    productModel.getProduct(req.params.id, function(product){
    if(product == null){        
      res.status(404).json({ message: "cannot find product" })
    }
    res.json(product);
    console.log(product)
  });
}

module.exports = {
  createProduct
}
