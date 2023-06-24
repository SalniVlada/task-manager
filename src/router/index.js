import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../components/ToDo.vue'
import HomePage from '../components/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/list',
    name: 'listTodo',
    component: ToDo,
		props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
