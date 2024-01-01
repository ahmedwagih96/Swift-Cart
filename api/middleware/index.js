const { VerifyTokenMiddleware, VerifyTokenAndUserMiddleware, VerifyRefreshTokenMiddleware
} = require('./authentication.middleware.js')
const ErrorHandlerMiddleware = require('./error.middleware.js')
const NotFoundMiddleware = require('./notFound.middleware.js')
const ValidateObjectIdMiddleware = require('./validateObjectId.middleware.js')
const MediaHandlerMiddleware = require('./media.middleware.js')
module.exports = {
    ErrorHandlerMiddleware,
    NotFoundMiddleware,
    ValidateObjectIdMiddleware,
    VerifyTokenMiddleware, VerifyTokenAndUserMiddleware, VerifyRefreshTokenMiddleware, MediaHandlerMiddleware
}