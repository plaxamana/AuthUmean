const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // allows to you to make requests to api
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/db');

mongoose.connect(config.db);

// Check if database is connected
mongoose.connection.on('connected', () => {
    console.log('Connected to: ' + config.db);
})

// On error
mongoose.connection.on('error', (err) => {
    console.log('database error: ' + err);
})

const app = express();

const users = require('./server/routes/users.server.route');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('invalid enpoint')
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
