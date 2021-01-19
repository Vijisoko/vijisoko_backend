const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },    
    phone: {
        type: String
    },
    email: {
        type: String
    },
    delivery_point: {
        type: String
    },
    password: {
        type: String
    },
    date_time: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Customer', customerSchema)