const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user');

exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            // pass
        })
        .catch(error => res.status(500).json({ error }));
}

exports.login = (req, res) => {
    User.getUserByEmail(req.body.email);
}