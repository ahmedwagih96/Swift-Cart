const jwt = require('jsonwebtoken')
const RefreshToken = require('../models/refreshToken.model.js');

const VerifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: 'Access denied' })
    }
    const access_token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(access_token, process.env.JWT_SECRET);
        req.user = payload
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Access denied' })
    }
}

// Verify Token & User 
function VerifyTokenAndUserMiddleware(req, res, next) {
    VerifyTokenMiddleware(req, res, () => {
        if (req.user.userId === req.params.userId) {
            next();
        } else {
            return res.status(403).json({ message: 'Access denied' })
        }
    })
}

async function VerifyRefreshTokenMiddleware(req, res, next) {
    const token = req.cookies.jwt
    if (!token) {
        return res.status(401).json({ message: 'Access denied' })
    }
    const decodeToken = (token) => {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        } catch (error) {
            return res.status(401).json({ message: 'Access denied' })

        }
    }
    const decodedToken = decodeToken(token);
    const tokenExists = await RefreshToken.find({ _id: decodedToken.tokenId, userId: decodedToken.userId });
    if (tokenExists) {
        req.decodedToken = decodedToken;
        next()
    } else {
        return res.status(401).json({ message: 'Access denied' })
    }
}



module.exports = { VerifyTokenMiddleware, VerifyTokenAndUserMiddleware, VerifyRefreshTokenMiddleware }