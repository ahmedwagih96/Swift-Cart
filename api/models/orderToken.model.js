const mongoose = require("mongoose");
const { OrderTokenSchema } = require("../schemas/orderToken.schema.js");

const OrderToken = mongoose.model("OrderToken", OrderTokenSchema);



module.exports = { OrderToken }