const jwt = require('jsonwebtoken');

function createAccessToken(userId) {
    return jwt.sign({
        userId: userId
    }, process.env.JWT_SECRET, {
        expiresIn: '15m'
    });
}

function createRefreshToken(userId, refreshTokenId) {
    return jwt.sign({
        userId,
        tokenId: refreshTokenId
    }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '30d'
    });
}


module.exports = { createAccessToken, createRefreshToken }