<template>
	<v-layout wrap>
		<v-flex xs12 md6 px-2 my-2>
			<panel title="Overview">
				<v-layout wrap>
					<v-flex xs12 sm6 md12 px-1>
						<h3>{{ song.title }}</h3>
						<h5>{{ song.artist }}</h5>
						<p>{{ song.genre }}</p>
						<br>
						<img class="album-image" :src="song.albumImageUrl" />
						<p>{{ song.album }}</p>
					</v-flex>
					<v-flex xs12 sm6 md12 px-1 column align-content-center justify-content-center>
						<div class="embed-responsive embed-responsive-16by9" v-if="false">
							<iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${song.youtubeId}`"></iframe>
						</div>
						<br>
						<v-btn dark class="cyan"
						:to="{
							name: 'song-edit',
							params: {
								id: song.id
							}
						}">
						Edit Song
					</v-btn>
					<div v-if="$store.state.isUserLoggedIn">
						<v-btn dark class="cyan"
						v-if="!theBookmark"
						@click="bookmarkIt">
						Bookmark
					</v-btn>
					<v-btn dark class="cyan"
					v-if="theBookmark"
					@click="unbookmark">
					UnBookmark
				</v-btn>
			</div>
		</v-flex>
	</v-layout>
</panel>
</v-flex>
<v-flex xs12 md6 px-2 my-2>
	<panel title="Lyrics">
		<textarea readonly rows="23">{{ song.lyrics }}</textarea>
	</panel>
</v-flex>
<v-flex xs12 px-2 my-2>
	<panel title="Tabs">
		<textarea readonly rows="20">{{ song.tab }}</textarea>
	</panel>
</v-flex>
</v-layout>
</template>

<script>
	import SongService from '@/services/SongService.js';
	import BookmarksService from '@/services/BookmarksService.js';
	import Panel from '@/components/Panel';
	export default{
		data(){
			return{
				song: {},
				theBookmark: null
			}
		},
		async mounted(){
			const songId = this.$store.state.route.params.songId;
			const song = await SongService.show(songId);
			this.song = song.data;

			if(this.$store.state.isUserLoggedIn){
				const userId = this.$store.state.user.id;
				const bookmarks = (await BookmarksService.index({
					songid: songId,
					userid: userId
				})).data
				if(bookmarks.length){
					this.theBookmark = bookmarks[0];
				}
			}
		},
		components:{
			Panel
		},
		methods:{
			async bookmarkIt(){
				try{
					this.theBookmark = (await BookmarksService.post({
						songid: this.song.id,
						userid: this.$store.state.user.id
					})).data
				}catch(err){
					console.log("err", err);
				}
			},
			async unbookmark(){
				try{
					await BookmarksService.delete(this.theBookmark.id)
					this.theBookmark = null
				}catch(err){
					console.log("err", err);
				}
			}
		}
	}
</script>

<style scoped>
textarea{
	width: 100%;
	margin: 0 auto;
	font-family: monospace;
	border: none;
	outline: none;
	border-style: none;
	border-color: transparent;
	padding: 10px;
}
</style>
