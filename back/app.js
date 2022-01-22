// module imports
const express = require('express');
const mysql = require('mysql')
const path = require('path');

// route imports
const userRoutes = require('./routes/user');

// safety related modules
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// database
const db = mysql.createConnection({
	host: 'localhost',
	user: 'alexandre',
	password: '',
});

db.connect(function(err) {
	if (err) throw err;
	console.log("Logged in to DB");
})

// setting up express instance
app.use(helmet());
app.use((req, res, next) => {
	// allow CORS
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.use(express.json());

// setting up routes
app.use('api/auth', userRoutes);

module.exports = app;
