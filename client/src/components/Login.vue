<template>
	<v-layout row>
		<v-flex xs6 offset-xs3>
			<panel title="Login">
				<form class="pl-4 pr-4 pt-2 pb-2">
					<v-text-field type="email" label="Email" required v-model="user.email"></v-text-field>
					<v-text-field type="password"  label="Password" required v-model="user.password"></v-text-field>
				</form>
				<br>
				<div v-if="error" class="error">{{ error }}</div>
				<br>
				<v-btn dark class="cyan" @click="login">Login</v-btn>
			</panel>
		</v-flex>
	</v-layout>
</template>

<script>
	import AuthenticationService from '@/services/AuthenticationService';
	import Panel from './Panel.vue';
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
			async login(){
				try{
					const response = await AuthenticationService.login(this.user);
					this.$store.dispatch('setToken', response.data.token);
					this.$store.dispatch('setUser', response.data.user);
				}catch(error){
					this.error = error.response.data.error;
				}

			}
		},
		components: {
			Panel
		}
	}
</script>

<style scoped>
.error {
	color: #ed2230;
}
</style>
