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
						<div class="embed-responsive embed-responsive-16by9">
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
					<div>
						<v-btn dark class="cyan"
						v-if="$store.state.isUserLoggedIn"
						@click="bookmark">
						Bookmark
					</v-btn>
					<v-btn dark class="cyan"
					v-if="$store.state.isUserLoggedIn"
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
	import Panel from '@/components/Panel';
	export default{
		data(){
			return{
				song: {}
			}
		},
		async mounted(){
			const songId = this.$store.state.route.params.songId;
			const song = await SongService.show(songId);
			this.song = song.data;
		},
		components:{
			Panel
		},
		methods:{
			bookmark(){
				console.log("bookmark")
			},
			unbookmark(){
				console.log('hi')
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
