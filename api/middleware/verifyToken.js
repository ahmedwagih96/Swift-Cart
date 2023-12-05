const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(403).json({ message: 'Access denied' })
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Access denied' })
    }
}


module.exports = { verifyToken }