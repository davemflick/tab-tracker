<template>
 <v-layout row>
  <v-flex xs4 mx-1>
    <panel title="Song MetaData">
      <v-text-field required :rules="[rules.required]" name="title" label="Title" v-model="song.title"></v-text-field>
      <v-text-field required :rules="[rules.required]" name="artist" label="Artist" v-model="song.artist"></v-text-field>
      <v-text-field required :rules="[rules.required]" name="genre" label="Genre" v-model="song.genre"></v-text-field>
      <v-text-field required :rules="[rules.required]" name="album" label="Album" v-model="song.album"></v-text-field>
      <v-text-field required :rules="[rules.required]" name="albumImageUrl" label="Album Image" v-model="song.albumImageUrl"></v-text-field>
      <v-text-field required :rules="[rules.required]" name="youtubeId" label="Youtube Id" v-model="song.youtubeId"></v-text-field>
    </panel>
  </v-flex>
  <v-flex x8 mx-1>
    <panel  title="Lyrics and Tabs">
      <v-text-field required :rules="[rules.required]" multi-line name="lyrics" label="Lyrics" v-model="song.lyrics"></v-text-field>
      <v-text-field required :rules="[rules.required]" multi-line name="tab" label="Tabs" v-model="song.tab"></v-text-field>
    </panel>
    <br />
    <div class="error" v-if="error">{{ error }}</div>
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
        },
        error: null,
        rules: {
          required: (value)=> !!value || 'Required.'
        }
      }
    },
    components: {
      Panel
    },
    methods:{
      async create(){
        this.error = null;
        const allFieldsFilled = Object.keys(this.song).every(key=> !!this.song[key]);
        if(!allFieldsFilled){
          this.error = 'Please fill in all fields';
          return
        }
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
