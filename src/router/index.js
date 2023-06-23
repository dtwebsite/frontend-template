import { createRouter, createWebHistory } from 'vue-router'
import systemManagement from './routes/systemManagement'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/',
    name: 'dashboard',
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  ...systemManagement,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiresAuth: true,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 在導航守衛中判斷 JWT token
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const token = localStorage.getItem('token'); // 從本地存儲中獲取 JWT token

  if (requiresAuth && !token) {
    // 如果路由需要驗證且沒有 JWT token，導向登入頁面
    next('/login');
  } else {
    // 否則，正常執行導航
    next();
  }
});

export default router
