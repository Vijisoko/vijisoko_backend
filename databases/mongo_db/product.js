const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image_url: {
        type: String
    },
    cartegory: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    variant: [],
    stock: {
        type: Number
    },
    business_id: {
        type: String
    },
    date_time: {
        type: Date,
        required: true,
        default: Date.now
    }    
});

module.exports = mongoose.model('Product', productSchema)