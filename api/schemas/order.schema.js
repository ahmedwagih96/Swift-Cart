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
        status: {
            type: String,
            required: true,
            enum: ['pending', 'fulfilled', 'cancelled']
        },
    },
    { timestamps: true }
);


module.exports = { OrderSchema }