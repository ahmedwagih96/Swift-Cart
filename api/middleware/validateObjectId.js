const mongoose = require("mongoose")

const validateId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid user Id" })
    }
    next()
}

module.exports = { validateId }