const NotFoundMiddleware = (req, res, next) => {
    const error = new Error(`not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

module.exports = NotFoundMiddleware