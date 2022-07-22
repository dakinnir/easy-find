const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    confirmPassword: {
        type: String,
        required: true,
    },

    accountType: {
        type: String,
        required: true,
    }},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema)

module.exports = User