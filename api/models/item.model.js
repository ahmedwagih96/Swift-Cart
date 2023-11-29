const mongoose = require("mongoose")
const { ItemSchema } = require('../schemas/item.schema')

const Item = mongoose.model('Item', ItemSchema);

module.exports = {Item}
