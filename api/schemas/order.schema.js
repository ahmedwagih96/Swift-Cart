const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        stripeSessionId: {
            type: String,
            required: true,
        },
        products: [{
            _id: false,
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
            count: Number
        }],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    { timestamps: true }
);


module.exports = { OrderSchema }