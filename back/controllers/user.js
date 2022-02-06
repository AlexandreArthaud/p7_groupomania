const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = require('../models/index');

exports.register = (req, res, next) => {
	console.log(db.User);
	bcrypt.hash(req.body.password, 10)
		.then(hash => {
			db.User.create({
				username: req.body.username,
				password: hash
			})
			.then(() => res.status(201).json({ message: 'Utilisateur créé!' }))
			.catch(error => res.status(400).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
	db.User.findOne({ where: { username: req.body.username } })
		.then(user => {
			if (!user) {
				return res.status(401).json({ error: 'Utilisateur non trouvé !' });
			}
			bcrypt.compare(req.body.password, user.password)
				.then(valid => {
					if (!valid) {
						return res.status(401).json({ error: 'Mot de passe incorrect !' });
					}
					res.status(200).json({
						userId: user.id,
						token: jwt.sign(
							{ userId: user.id },
							'RANDOM_TOKEN_SECRET',
							{ expiresIn: '24h' }
						)
					});
				})
				.catch(error => res.status(500).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};
