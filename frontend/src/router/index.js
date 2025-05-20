import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import AuthLayout from '../layouts/AuthLayout.vue'
import PrivateLayout from '../layouts/PrivateLayout.vue'
import PublicLayout from '../layouts/PublicLayout.vue'

// Vistas de autenticación
import AuthLogin from '../views/auth/AuthLogin.vue'
import AuthRegister from '../views/auth/AuthRegister.vue'
import AuthForgotPassword from '../views/auth/AuthForgotPassword.vue'

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
        component: AuthLogin
      },
      {
        path: 'register',
        name: 'Register',
        component: AuthRegister
      },
      {
        path: 'forgot-password',
        name: 'ForgotPassword',
        component: AuthForgotPassword
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

router.beforeEach((to, from, next) => {
  const publicPages = ['/auth/login', '/auth/register', '/auth/forgot-password', '/', '/about']
  const authRequired = !publicPages.some(page => to.path.startsWith(page))

  const isLoggedIn = !!localStorage.getItem('access') // clave que usas en login

  if (authRequired && !isLoggedIn) {
    return next('/auth/login')
  }

  next()
})

export default router
