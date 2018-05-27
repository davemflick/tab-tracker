const {Song} = require('../models');

module.exports = {
	async index(req,res){
		try{
			const songs = await Song.findAll({
				limit: 10
			});
			res.send(songs);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to fetch songs'
			});
		}
	},
	async post (req, res){
		try{
			const song = await Song.create(req.body);
			res.send(song);
		} catch(err){
			res.status(400).send({
				error: 'Something went wrong inserting song into database'
			});
		}
	}
}

