<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
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
      console.log(this.songs)
    }
  }

</script>

<style scoped>

</style>
