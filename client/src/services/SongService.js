import Api from '@/services/Api';

export default {
	index(search){
		return Api().get('songs', {params: {search: search}}); //get all songs
	},
	post(req){
		return Api().post('songs', req);
	},

	show(req){
		return Api().get(`song/${req}`);
	},

	put(req){
		return Api().put(`song/${req.id}`, req)
	}
}
