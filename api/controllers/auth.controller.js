const { User } = require('../models/user.model.js');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const RefreshToken = require('../models/refreshToken.model.js');
const { createAccessToken, createRefreshToken } = require('../utils/tokens.js');
const { ConflictError, UnauthenticatedError } = require('../errors');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    // Check if the email is taken
    let isEmailTaken = await User.findOne({ email });
    if (isEmailTaken) {
        throw new ConflictError(`${email} is already used by another account`)
    }
    // hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save();

    const user = await User.findOne({ email })
    // Create Access and Refresh Tokens 
    const refreshToken = new RefreshToken({ userId: user._id });
    await refreshToken.save()

    // generate the token
    const access_token = createAccessToken(user._id);
    const refresh_token = createRefreshToken(user._id, refreshToken._id);


    // response to client
    res.cookie('jwt', refresh_token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    return res.status(200).json({ message: 'Signed Up Successfully', user, success: true, access_token })
}


const signin = async (req, res) => {
    const { email, password } = req.body;
    // Check if user exists
    let user = await User.findOne({ email }).select("+password")
    if (!user) {
        throw new UnauthenticatedError('Wrong Credentials')
    }
    // validate the password
    const isValidPassword = bcryptjs.compareSync(password, user.password);
    if (!isValidPassword) {
        throw new UnauthenticatedError('Wrong Credentials')
    }

    user = await User.findOne({ email })

    // Create Access and Refresh Tokens 
    const refreshToken = new RefreshToken({ userId: user._id });
    await refreshToken.save()

    // generate the token
    const access_token = createAccessToken(user._id);
    const refresh_token = createRefreshToken(user._id, refreshToken._id);

    // response to client
    res.cookie('jwt', refresh_token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    return res.status(200).json({ message: 'Signed Up Successfully', user, success: true, access_token })
}


const signout = async (req, res) => {
    const currentRefreshToken = req.decodedToken
    await RefreshToken.deleteOne({ _id: currentRefreshToken.tokenId })

    return res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }).status(200)
        .json({ success: true, message: 'User logged out successfully' })
}

const refreshToken = async (req, res) => {
    const currentRefreshToken = req.decodedToken
    const newRefreshToken = new RefreshToken({ userId: currentRefreshToken.userId });
    await newRefreshToken.save();
    await RefreshToken.deleteOne({ _id: currentRefreshToken.tokenId })

    // generate the token
    const access_token = createAccessToken(currentRefreshToken.userId);
    const refresh_token = createRefreshToken(currentRefreshToken.userId, newRefreshToken._id);

    res.cookie('jwt', refresh_token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
    return res.json({ access_token, success: true })
}


module.exports = { signup, signin, signout, refreshToken }