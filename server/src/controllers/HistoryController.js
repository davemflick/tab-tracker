const {History, Song} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const _ = require('lodash');

module.exports = {
	async index(req,res){
		try{
			const {userId} = req.query
			
			const history = await History.findAll({
				where: {
					UserId: userId
				},
				include: [
					{
						model: Song
					}
				]
			}).map( history=> history.toJSON()).map(history=>
				 _.extend({}, history.Song, history))
			res.send(history);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to fetch history'
			});
		}
	},
	async post(req,res){
		try{
			const {songId, userId} = req.body;
			const newHistory = await History.create({
					SongId: songId,
					UserId: userId
				})
			res.send(newHistory);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to create history'
			});
		}
	}
}
