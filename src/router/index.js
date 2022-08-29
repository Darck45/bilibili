import Vue from 'vue'
import VueRouter from 'vue-router'
const Register = () => import('@/views/Register.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: Register,
    name: 'register'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
