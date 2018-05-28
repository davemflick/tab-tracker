const {Bookmark} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	async index(req,res){
		try{
			const {songid, userid} = req.query
			const bookmark = await Bookmark.findOne({
				where:{
					SongId: songid,
					UserId: userid
				}
			})
			console.log(bookmark)
			res.send(bookmark);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to fetch bookmark'
			});
		}
	}
}

