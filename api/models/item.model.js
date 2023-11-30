const mongoose = require("mongoose")
const { ItemSchema } = require('../schemas/item.schema')
const Joi = require('joi');

const Item = mongoose.model('Item', ItemSchema);

// Validate Create Comment
function validateCreateItem(obj) {
    const schema = Joi.object({
        name: Joi.string().required(),
        shortDescription: Joi.string().trim().required(),
        longDescription: Joi.string().trim().required(),
        longDescription: Joi.string().trim().required(),
        price: Joi.number().required(),
        category: Joi.string().trim().required(),
    })
    return schema.validate(obj)
}
module.exports = { Item, validateCreateItem }
