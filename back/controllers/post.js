const fs = require('fs');

const { sequelize, DataTypes } = require('sequelize');
const seq = require('../models/authenticate');
const Post = require('../models/post')(seq, DataTypes);


exports.createPost = (req, res, next) => {
	Post.create({
		title: req.body.title,
		filePath: `${req.protocol}://${req.get('host')}/assets/image/${req.body.file.filename}`, 
	})
	.then(() => res.status(201).json({ message: 'Posted ' }))
	.catch(err => res.status(500).json({ err }));
}