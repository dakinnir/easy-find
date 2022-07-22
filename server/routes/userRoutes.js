const express = require('express')

const router = express.Router()

// Connect to database
const db = require('../db/conn')

// Convert id from string to ObjectId for the _id
const ObjectId = require('mongodb').ObjectId;

let db_connection = db.getDb();

// Data getting stored in the backend: post
router.route("/api/register").post((req, response) => {
    let newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        accountType: req.body.accountType,
    };
    db_connection.collection('users').insertOne(newUser, (err, res) => {
        if (err) throw err;
        response.json(res)
    })
});

// Data getting stored in the backend: post
router.route("/api/login").post((req, response) => {
    let user = {
        email: req.body.email,
        password: req.body.password,
    };
    db_connection.collection('users').find({email: user.email}, (err, res) => {
        if (err) throw err;
        response.json(res)
    })
});


module.exports = router;