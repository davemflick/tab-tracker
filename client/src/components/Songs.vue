<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
          <v-btn class="cyan accent-2" fab light small absolute right middle slot="action" @click="navigateTo({name: 'songs-create' })">
            <v-icon>add</v-icon>
          </v-btn>
        <div v-for="song in songs" :key="song.id">
          <h5>{{ song.title }}</h5>
          <p>
            By: {{ song.artist }} <br />
            Album: {{ song.album }}
          </p>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import Panel from './Panel.vue';
  import SongService from '@/services/SongService.js'
  export default{
    data(){
      return {
        songs: []
      }
    },
    components: {
      Panel
    },
    async mounted(){
      //request songs from backend
      this.songs = (await SongService.index()).data;
    },
    methods:{
      navigateTo(route){
        this.$router.push(route);
      }
    }
  }

</script>

<style scoped>

</style>
