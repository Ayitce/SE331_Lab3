import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import CateNOrgView from '../views/CateNOrgView.vue'

const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/category-and-organizer',
    name: 'CateNOrgView',
    component: CateNOrgView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
