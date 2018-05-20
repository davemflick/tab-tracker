import Api from '@/services/Api';

export default {
	register(req){
		return Api().post('register', req);//register = endpoint
	}
}
