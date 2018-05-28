const AuthenticationController = require('./controllers/AuthenticationController.js');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js');
const SongsController = require('./controllers/SongsController.js')

module.exports = (app)=>{
	app.post('/register', 
		AuthenticationControllerPolicy.register,
		AuthenticationController.register);

	app.post('/login',
		AuthenticationController.login);

	app.get('/songs',
		SongsController.index);

	app.post('/songs',
		SongsController.post);

	app.get('/song/:id',
		SongsController.show);

	app.put('/song/:id',
		SongsController.put);
}