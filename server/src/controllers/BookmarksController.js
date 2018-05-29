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
			res.send(bookmark);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to fetch bookmark'
			});
		}
	},
	async post(req,res){
		try{
			const {songid, userid} = req.body.params
			const bookmark = await Bookmark.findOne({
				where:{
					SongId: songid,
					UserId: userid
				}
			});
			if(bookmark){
				res.status(400).send({
					error: 'You already have this set as a bookmark'
				})
				return
			}
			const newBookmark = await Bookmark.create({
					SongId: songid,
					UserId: userid
				})
			res.send(newBookmark);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to create bookmark'
			});
		}
	},
	async delete(req,res){
		try{
			const {bookmarkId} = req.params
			const bookmark = await Bookmark.findById(bookmarkId)
			await bookmark.destroy();
			res.send(bookmark);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to delete bookmark'
			});
		}
	}
}

