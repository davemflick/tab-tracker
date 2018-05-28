<template>
  <panel title="Search">
    <v-text-field label="Search" v-model="search"></v-text-field>
  </panel>
</template>

<script>
  import Panel from '../Panel.vue';
  import SongService from '@/services/SongService.js'
  import _ from 'lodash'
  export default{
    data(){
      return {
        search: null
      }
    },
    components:{
      Panel
    },
    watch:{
      search: _.debounce(async function (value){
        const route = {
          name: 'songs'
        }
        if(this.search !== ''){
          route.query = {
            search: this.search
          }
        }
        this.$router.push(route);
      }, 700),
      '$route.query.search':{
        immediate: true,
        handler(value){
          this.search = value;
        }
      }
    }
  }

</script>

<style scoped>

</style>
