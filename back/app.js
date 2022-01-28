// module imports
const express = require('express');
const mysql = require('mysql')
const path = require('path');

// route imports
const userRoutes = require('./routes/user');

// safety related modules
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();

// setting up express instance
app.use(helmet());
app.use(cors({origin: true, credentials: true}));
// app.use((req, res, next) => {
// 	// allow CORS
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
// 	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
// 	next();
// });

app.use(express.json());

// setting up routes
app.use('/api/auth', userRoutes);

module.exports = app;
