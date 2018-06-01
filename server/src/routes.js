const AuthenticationController = require('./controllers/AuthenticationController.js');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js');
const SongsController = require('./controllers/SongsController.js')
const BookmarksController = require('./controllers/BookmarksController.js')
const HistoryController = require('./controllers/HistoryController.js')

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