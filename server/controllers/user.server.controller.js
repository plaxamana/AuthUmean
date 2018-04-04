// Load module dependencies
const User = require('mongoose').model('User');
const passport = require('passport');

// Register function
exports.register = function(req, res, next) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({sucess: false, msg: 'Failed to register user'})
       } else {
           res.json({success: true, msg: 'User registered'})
       }
    });
}

exports.authenticate = function(req, res, next){
    // Some authentication code here
    res.send('AUTHENTICATE');
}

exports.getProfile = function(req, res, next){
    // Load the profile
    res.send('PROFILE');
}