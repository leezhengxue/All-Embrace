import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import OurBusiness from '../views/Business.vue'
import Newsroom from '../views/Newsroom.vue'
import Article1 from '../views/NewsArticle/article.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/our-business',
    name: 'OurBusiness',
    component: OurBusiness
  },
  {
    path: '/newsroom',
    name: 'Newsroom',
    component: Newsroom
  },
  {
    path: '/newsroom/1',
    name: 'Article1',
    component: Article1
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() { 
    window.scrollTo(0,0);
}
})

export default router
