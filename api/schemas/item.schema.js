const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        shortDescription: {
            type: String,
            required: true,
        },
        longDescription: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['newArrivals', 'bestSellers', 'topRated']
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);


module.exports = { ItemSchema }