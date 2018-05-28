<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
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
  .song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title{
    font-size: 28px;
  }
  .song-artist{
    font-size: 24px;
  }
  .song-genre{
    font-size: 18px;
  }
  .album-image{
    max-width: 100%;
    margin: 0 auto;
  }
</style>
