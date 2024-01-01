const { NotFoundError } = require("../errors")

const NotFoundMiddleware = (req, res, next) => {
    throw new NotFoundError(`Not Found - ${req.originalUrl}`)
}

module.exports = NotFoundMiddleware