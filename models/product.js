const Product = require('../databases/mongo_db/product');
var dateFormat = require('dateformat');

var query = "";
var values = [];
var dateTime = new Date();

var createProduct = async function(new_product, callback){
  console.log(new_product)
  // const product = new Product({
  //   name: new_product.title,
  //   desc: new_product.description,
  //   cartegory: new_product.cartegory,
  //   price: new_product.price,
  //   variant: new_product.variant,
  //   stock: new_product.stock,
  //   business_id: new_product.business_id
  // })
  // console.log(new_product)
  // const newProduct = await product.save()
  // console.log(newProduct)
  // return callback(newProduct)
}

module.exports = {
    createProduct
    // getProducts,
    // getProduct,
    // updateProduct,
    // deleteProduct
  }