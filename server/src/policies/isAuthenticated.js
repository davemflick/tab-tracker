const passport = require('passport')

module.exports = function(req, res, next){
	passport.authenticate('jwt', function(err, user){
		if(err || !user){
			console.log('Not User', user);
			res.status(403).send({
				error: 'You do not have access'
			})
		} else{
			console.log('USER, user');
			req.user = user;
			next();
		}
	})(req, res, next)
}