const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const createToken = (auth) => {
		return jwt.sign({
			id: user.id
		}, 'my-secret',
		{
			expiresIn: 48 * 60 * 60 * 1000
		});
	};
	
	const generateToken = (req, res, next) => {
		req.token = createToken(req.auth);
		console.log(req.token);
		next();
	};
	
	const sendToken = (req, res) => {
		res.setHeader('x-auth-token', req.token);
		res.status(200).send(req.auth);
	};
}
