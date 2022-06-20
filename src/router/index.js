import Vue from 'vue'
import VueRouter from 'vue-router'
import p1 from '../views/p1.vue'
import p2 from '../views/p2.vue'
import p3 from '../views/p3.vue'
import p4 from '../views/p4.vue'
import home from "@/views/home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:home
  },

  {
    path: '/p1',
    name: 'p1',
    component:p1
  },
  {
    path: '/p2',
    name: 'p2',
    component: p2
  },
  {
    path: '/p3',
    name: 'p3',
    component: p3
  },
  {
    path: '/p4',
    name: 'p4',
    component: p4
  }


]

const router = new VueRouter({

  routes
})

export default router
