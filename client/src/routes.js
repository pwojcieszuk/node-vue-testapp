import Hello from './components/Hello'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'

const routes = [
  {
    path: '/',
    component: Hello,
    meta: {
      requiresAuth: true,
    },
  },
  { path: '/login', component: Login },
  {
    path: '/logout',
    component: Logout,
    meta: {
      requiresAuth: true,
    },
  },
]

export default routes
