const { User } = require('../models/user.model.js');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
    const { username, email, password } = req.body;
    // Check if the email is taken
    let isEmailTaken = await User.findOne({ email });
    if (isEmailTaken) {
        return res.status(409).json({ message: `${email} is already used by another account`, success: false })
    }
    // hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save();

    const user = await User.findOne({ email }).select("-password")
    // generate the token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // response to client
    res.cookie('access_token', token, { httpOnly: true }).status(201).json({ message: 'Signed Up Successfully', user, success: true });
}


const signin = async (req, res) => {
    const { email, password } = req.body;
    // Check if user exists
    let user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({ message: `Wrong Credentials`, success: false })
    }
    // validate the password
    const isValidPassword = bcryptjs.compareSync(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: `Wrong Credentials`, success: false })
    }
    // generate the token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    user = await User.findOne({ email }).select("-password")
    // response to client
    res.cookie("access_token", token, {
        withCredentials: true,
        httpOnly: false,
    });
    res.status(200).json({ message: 'Signed In Successfully', user, success: true })

}


const signout = async (req, res) => {
    res.clearCookie('access_token');
    res.status(200).json({ message: 'User has been Signed Out', success: true })
}
module.exports = { signup, signin, signout }