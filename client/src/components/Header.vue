<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4 home" @click="navigateTo({name: 'index'})">
      TabTracker
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark @click="naviateTo({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'Register'})" v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
      <v-btn flat dark @click="navigateTo({name: 'Login'})" v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>
      <v-btn flat dark v-if="$store.state.isUserLoggedIn" @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      navigateTo(route){
        this.$router.push(route);
      },
      logout(){
        this.$store.dispatch('setToken', null),
        this.$store.dispatch('setUser', null)
        this.$router.push({name: 'index'})
      }
    }
  }

</script>

<style scoped>
.home{
  cursor: pointer;
}
</style>
