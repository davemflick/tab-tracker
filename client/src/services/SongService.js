import Api from '@/services/Api';

export default {
	index(){
		return Api().get('songs'); //get all songs
	},
	post(req){
		return Api().post('songs', req)
	}
}
