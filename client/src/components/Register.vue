<template>
	<v-layout row>
		<v-flex xs6 offset-xs3>
			<div class="white elevation-2">
				<v-toolbar flat dense class="cyan" dark>
					<v-toolbar-title>Register</v-toolbar-title>
				</v-toolbar>
				<form class="pl-4 pr-4 pt-2 pb-2">
					<v-text-field type="email" name="email" label="Email" required v-model="user.email"></v-text-field>
					<v-text-field type="password" name="password" label="Password" required v-model="user.password"></v-text-field>
				</form>
				<div class="pl-4 pr-4 pt-2 pb-2">
					<br>
					<div v-if="error" class="error">{{ error }}</div>
					<br>
					<v-btn class="cyan" @click="register">Register</v-btn>
				</div>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
	import AuthenticationService from '@/services/AuthenticationService';
	export default{
		data(){
			return{
				user:{
					email: '',
					password: ''
				},
				error: null
			}
		},
		methods: {
			async register(){
				try{
					const response = await AuthenticationService.register(this.user);
					console.log(response.data);
				}catch(error){
					this.error = error.response.data.error;
				}

			}
		}
	}
</script>

<style scoped>
.error {
	color: #ed2230;
}
</style>
