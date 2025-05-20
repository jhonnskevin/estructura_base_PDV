import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import PrivateLayout from '../layouts/PrivateLayout.vue'
import PublicLayout from '../layouts/PublicLayout.vue'

// Vistas de autenticación
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'

// Vistas privadas (dashboard)
import Dashboard from '../views/private/Dashboard.vue'

// Vistas públicas (página de inicio, etc.)
import Home from '../views/public/Home.vue'
import About from '../views/public/About.vue'

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ]
  },
  {
    path: '/private',
    component: PrivateLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        /*beforeEnter: (to, from, next) => {
          if (!isAuthenticated()) {  // isAuthenticated() es tu función de verificación de autenticación
            next({ name: 'Login' });
          } else {
            next();
          }
        }*/
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
