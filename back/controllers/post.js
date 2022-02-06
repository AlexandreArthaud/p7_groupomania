const fs = require('fs');

const db = require('../models/index');

exports.getAllPosts = (req, res, next) => {
	db.Post.findAll()
	.then(posts => res.status(200).json(posts))
	.catch(error  => res.status(400).json({ error }));
}

exports.createPost = (req, res, next) => {
	db.Post.create({
		title: req.body.title,
		file_path: `${req.protocol}://${req.get('host')}/assets/image/${req.body.file.filename}`, 
		caption: req.body.caption,
		userId: req.body.userId,
	})
	.then(() => res.status(201).json({ message: 'Posted ' }))
	.catch(err => res.status(500).json({ err }));
}