// Load module dependencies
const users = require('../controllers/user.server.controller');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = function (app) {
    // Register Route
    app.route('/register').post(users.register);

    // Authenication Route
    app.route('/authenticate').post(users.authenticate);

    // Profile Route
    app.route('/profile').post(users.getProfile);
}
