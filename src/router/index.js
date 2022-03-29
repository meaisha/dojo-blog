import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetails from '../views/PostDetails.vue'
import CreatePost from '../views/CreatePost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'postdetails',
    component: PostDetails,
    props: true
  },
  {
    path: '/create',
    name: 'createpost',
    component: CreatePost,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
