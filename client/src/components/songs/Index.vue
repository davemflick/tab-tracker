<template>
  <v-layout row wrap>
    <v-flex  xs6 offset-xs3 my-2>
      <songs-bookmarks>

      </songs-bookmarks>
    </v-flex>
    <v-flex xs6 offset-xs3 my-2>
     <songs-search-panel></songs-search-panel>
   </v-flex>
    <v-flex xs6 offset-xs3 my-2>
     <songs-panel></songs-panel>
   </v-flex>
 </v-layout>
</template>

<script>
  import SongsPanel from './SongsPanel.vue';
  import SongsBookmarks from './SongsBookmarks.vue';
  import SongsSearchPanel from './SongsSearchPanel.vue';
  import Panel from '../Panel.vue';
  import SongService from '@/services/SongService.js';
  export default{
    components: {
      Panel,
      SongsPanel,
      SongsSearchPanel,
      SongsBookmarks
    }
  }

</script>

<style scoped>

</style>
