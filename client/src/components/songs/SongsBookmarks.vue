<template>
  <panel title="Bookmarks" my2>
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="bookmarks">
      <template slot="items" scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
  import Panel from '../Panel.vue';
  export default{
    data(){
      return {
        headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
        ],
        pagination: {sortBy: 'date', descending: true},
        bookmarks: [
        {
          title: 'Farts',
          artist: 'Testing'
        },
        {
          title: 'Hello Wolrd2',
          artist: 'Testing2'
        }
        ]
      }
    },
    async mounted(){

    },
    components:{
      Panel
    }
  }

</script>

<style scoped>

</style>
