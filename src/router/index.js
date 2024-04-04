import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriListCp from '../components/FriListCp.vue'
import GrpListCp from '../components/GrpListCp.vue'
import LoginCp from '../components/LoginCp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
      {
          path: '/login',
          name: 'login',
          component: LoginCp

      },
    {
      path: '/frilist',
      name: 'frilist',
      component: FriListCp,
      children:[
	{
		path: '/frilist/chat',
		name: 'frichat'
	},

      ]

    },
    {
      path: '/grplist',
      name: 'grplist',
      component: GrpListCp,
      children:[
	{
		path: '/grplist/chat',
		name: 'grpchat'
	},
      ]

    }
  ]
})

export default router
