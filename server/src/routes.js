const AuthenticationController = require('./controllers/AuthenticationController.js');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js');
const SongsController = require('./controllers/SongsController.js')
const BookmarksController = require('./controllers/BookmarksController.js')
const HistoryController = require('./controllers/HistoryController.js')
const isAuthenticated = require('./policies/isAuthenticated.js')

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

	app.get('/bookmarks',
		//isAuthenticated, -Doesn't work, can't figure out why
		BookmarksController.index)

	app.post('/bookmarks',
		BookmarksController.post)

	app.get('/bookmarks/:bookmarkId',
		BookmarksController.delete)

	app.get('/history',
		HistoryController.index)

	app.post('/history',
		HistoryController.post)
}