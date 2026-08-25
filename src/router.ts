import { createRouter, createWebHistory } from 'vue-router'
import ProfileLayout from './pages/ProfileLayout.vue'
import ProfilePage from './pages/ProfilePage.vue'
import StoryPage from './pages/StoryPage.vue'
import ExperiencePage from './pages/ExperiencePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: ProfileLayout,
      children: [
        { path: '', name: 'work', component: ProfilePage },
        { path: 'about', name: 'about', component: StoryPage },
        { path: 'experience', name: 'experience', component: ExperiencePage },
        { path: 'companies', redirect: { name: 'experience' } },
      ],
    },
    { path: '/story', redirect: '/about' },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
})

export default router
