import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated) {
        next();
      }
      else {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
