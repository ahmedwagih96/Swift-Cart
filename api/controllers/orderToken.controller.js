const { BadRequestError } = require("../errors");
const { OrderToken } = require("../models/orderToken.model.js")
const verifyOrderToken = async (req, res) => {
    const { orderToken } = req.params;
    const { userId } = req.user;

    const token = await OrderToken.findOne({
        user: userId,
        token: orderToken
    })

    if (!token) {
        throw new BadRequestError("Invalid Link")
    }

    await OrderToken.findByIdAndDelete(token._id)
    return res.status(200).json({ success: 'Valid Link' })
}

module.exports = { verifyOrderToken }