const { OrderToken } = require("../models/orderToken.model.js")
const verifyOrderToken = async (req, res) => {
    const { orderToken } = req.params;
    const { id } = req.user;

    const token = await OrderToken.findOne({
        user: id,
        token: orderToken
    })

    if (!token) {
        return res.status(400).json({ error: 'Invalid link' });
    }

    await OrderToken.findByIdAndDelete(token._id)
    res.status(200).json({ success: 'Valid Link' })
}

module.exports = { verifyOrderToken }