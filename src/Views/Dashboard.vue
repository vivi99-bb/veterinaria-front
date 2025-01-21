<template>
  <div class="flex flex-col md:flex-row h-screen w-screen bg-gray-100 m-0 p-0">
    <!-- Menú lateral -->
    <aside class="w-full md:w-64 bg-gray-800 text-white h-full shadow-md">
      <div class="p-4 md:p-6 space-y-6">
        <h2 class="text-2xl font-extrabold">Menú</h2>
        <nav>
          <ul class="space-y-4">
            <li>
              <router-link to="/pacientes" class="block py-2 px-4 text-lg font-medium hover:bg-gray-700 rounded transition duration-300">
                Pacientes
              </router-link>
            </li>
            <li>
              <router-link to="/tutores" class="block py-2 px-4 text-lg font-medium hover:bg-gray-700 rounded transition duration-300">
                Tutores
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Contenido principal -->
    <div class="flex-1 flex flex-col">
      <!-- Barra superior -->
      <header class="bg-gray-800 text-white p-3 md:p-4 flex justify-between items-center shadow-md">
        <h1 class="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <button @click="logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 md:px-6 rounded-md transition duration-300">
          Cerrar Sesión
        </button>
      </header>

      <!-- Contenido dinámico -->
      <main class="p-4 md:p-6 flex-1 overflow-y-auto bg-white">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  methods: {
    logout() {
      Cookies.remove('userId'); // Elimina la cookie
      this.$router.push({ name: 'Login' }); // Redirige al login
    }
  }
};
</script>

<style scoped>
/* No se requieren estilos adicionales, ya que estamos utilizando TailwindCSS */
</style>
