const { CustomAPIError } = require('../errors')
const ErrorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ message: err.message })
    }
    return res
        .status(res.statusCode ? res.statusCode : 500)
        .send(err.message ? err.message : 'Something went wrong try again later')
}

module.exports = ErrorHandlerMiddleware 
