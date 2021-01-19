const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    located_at: {
        type: String
    },
    town: {
        type: String
    },
    country: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    //owner: [{ type: Schema.Types.ObjectId, ref: 'Owner' }],
    owner: "",
    staff: [],
    date_time: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Business', businessSchema)