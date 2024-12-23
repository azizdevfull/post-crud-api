import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostListView from '../views/PostListView.vue'
import PostCreateView from '@/views/PostCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostListView,
    },
    {
      path: '/posts/create',
      name: 'create-post',
      component: () => PostCreateView,
    },
    // {
    //   path: '/posts/edit/:id',
    //   name: 'edit-post',
    //   component: () => import('../views/EditPostView.vue'),
    // },
  ],
})

export default router
