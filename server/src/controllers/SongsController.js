const {Song} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	async index(req,res){
		try{
			let songs = null;
			const search = req.query.search;
			console.log(search);
			if(search){
				songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
			}else {
				songs = await Song.findAll({
					limit: 10
				});
			}
			
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
	},
	async show(req,res){
		try{
			const song = await Song.findById(req.params.id);
			res.send(song);
		} catch(err){
			res.status(400).send({
				error: 'An error occured trying to fetch song'
			});
		}
	},
	async put(req,res){
		try{
			const song = await Song.update(req.body, {
				where:{
					id: req.params.id
				}
			});
			res.send(req.body);
		} catch(err){
			console.log("ERROR ERROR ERROR \n ERROR ERROR ERROR")
			res.status(400).send({
				error: 'An error occured trying to update the song'
			});
		}
	}
}

