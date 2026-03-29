import { createRouter, createWebHistory } from 'vue-router'
import ProfilePage from './pages/ProfilePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ProfilePage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
})

export default router
