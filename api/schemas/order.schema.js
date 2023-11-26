const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        stripeSessionId: {
            type: String,
            required: true,
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }]
    },
    { timestamps: true }
);


module.exports = { ItemSchema }