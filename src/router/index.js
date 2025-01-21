import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie'; // Importa js-cookie para manejar cookies
import Login from '../Views/Login.vue';
import Dashboard from '../Views/Dashboard.vue';
import Pacientes from '../Views/Pacientes.vue';
import Tutores from '../Views/Tutores.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirige la raíz al login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Agrega meta para identificar rutas protegidas
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: Pacientes,
    meta: { requiresAuth: true }, // Ruta protegida
  },
  {
    path: '/tutores',
    name: 'Tutores',
    component: Tutores,
    meta: { requiresAuth: true }, // Ruta protegida
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard global de autenticación
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!Cookies.get('userId'); // Verifica si la cookie userId existe

  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    // Si la ruta requiere autenticación y el usuario no está logueado
    next({ name: 'Login' }); // Redirige al login
  } else if (to.name === 'Login' && isLoggedIn) {
    // Si el usuario está logueado y trata de ir al login
    next({ name: 'Dashboard' }); // Redirige al dashboard
  } else {
    next(); // Permite el acceso a la ruta
  }
});

export default router;
