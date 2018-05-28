import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/songs/Index'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ViewSong from '@/components/ViewSong'


Vue.use(Router)

export default new Router({
	mode: "history",
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/song/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/song/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },

    {
      path: '/song/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
