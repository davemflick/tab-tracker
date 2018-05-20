<template>
  <div>
    <h1>Register</h1>
    <form>
    	<input type="email" name="email" placeholder="email" v-model="user.email">
    	<input type="password" name="password" placeholder="password" v-model="user.password">
    </form>
    <br>
    	<button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default{
	data(){
		return{
			user:{
				email: '',
				password: ''
			}
		}
	},
	methods: {
		async register(){
			const response = await AuthenticationService.register(this.user);
			console.log(response.data);
		}
	}
}
</script>

<style>
</style>
