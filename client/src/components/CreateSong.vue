<template>
 <v-layout row>
  <v-flex xs4 mx-1>
    <panel title="Song MetaData">
      <v-text-field name="title" label="Title" v-model="song.title"></v-text-field>
      <v-text-field name="artist" label="Artist" v-model="song.artist"></v-text-field>
      <v-text-field name="genre" label="Genre" v-model="song.genre"></v-text-field>
      <v-text-field name="album" label="Album" v-model="song.album"></v-text-field>
      <v-text-field name="albumImageUrl" label="Album Image" v-model="song.albumImageUrl"></v-text-field>
      <v-text-field name="youtubeId" label="Youtube Id" v-model="song.youtubeId"></v-text-field>
    </panel>
  </v-flex>
  <v-flex x8 mx-1>
    <panel  title="Lyrics and Tabs">
      <v-text-field multi-line name="lyrics" label="Lyrics" v-model="song.lyrics"></v-text-field>
      <v-text-field multi-line name="tab" label="Tabs" v-model="song.tab"></v-text-field>
    </panel>
    <br />
    <v-btn dark class="cyan" @click="create">
      Create Song
    </v-btn>
  </v-flex>
</v-layout>
</template>

<script>
  import Panel from './Panel.vue';
  import SongService from '@/services/SongService.js';
  export default{
    data(){
      return{
        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImageUrl: null,
          youtubeId: null,
          lyrics: null,
          tab: null
        }
      }
    },
    components: {
      Panel
    },
    methods:{
      async create(){
        try{
          await SongService.post(this.song);
          this.$router.push({name: 'songs'})
        }catch(err){
          console.log(err);
        }
      }
    }
  }
</script>

<style scoped>

</style>
