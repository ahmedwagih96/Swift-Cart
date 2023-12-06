const mongoose = require("mongoose");

const OrderTokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    token: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

module.exports = { OrderTokenSchema }