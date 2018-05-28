<template>
  <panel title="Songs">
    <v-btn class="cyan accent-2" fab light small absolute right middle slot="action" @click="navigateTo({name: 'songs-create' })">
      <v-icon>add</v-icon>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout>
        <v-flex xs6 mx-1>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
          <v-btn dark class="cyan" @click="navigateTo({name: 'song', params: {songId: song.id}})">
            View
          </v-btn>
        </v-flex>
        <v-flex xs6 mx-1>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
  import Panel from '../Panel.vue';
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
    },
    watch:{
      '$route.query.search':{
        immediate: true,
        async handler(value){
          this.songs = (await SongService.index(value)).data;
        }
      }
    }
  }

</script>

<style scoped>

</style>
