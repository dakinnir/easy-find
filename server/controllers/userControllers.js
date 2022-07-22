const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async(req, res) => {
    const { 
        firstName, 
        lastName, 
        email,
        password, 
        confirmPassword, 
        accountType
    } = req.body;

    // Checking if user exists with the email
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword,
            accountType: user.accountType,
        });
    } else {
        res.status(400);
        throw new Error("Error Occurred");
    }
});

module.exports = { registerUser };