const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },    
    cost: {
        type: Number
    },
    variant: [],
    delivery_point: {
        type: String
    },
    shipping: {
        type: String
    },
    payment: {
        mode: {
            type: String
        },
        amount: {
            type: Number
        }
    },
    accept: {
        type: String,
        default: "no"
    },
    dispatch: {
        status: {
            type: String
        },
        delivery: {
            person_name: {
                type: String
            },
            person_phone: {
                type: String    
            },
            mode: {
                type: String
            }           
        }
    },
    transit: {
        type: String,
        default: "no"
    },
    complete: {
        type: String,
        default: "no"
    },
    date_time: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema)