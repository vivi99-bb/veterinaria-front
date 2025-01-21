<template>
  <div class="flex h-screen">
    <!-- Menú lateral -->
    <aside class="bg-gray-800 text-white w-64 flex-shrink-0">
      <div class="p-4">
        <h2 class="text-xl mb-4">Menú</h2>
        <nav>
          <ul>
            <li class="mb-2">
              <router-link to="/pacientes" class="text-white hover:text-gray-300">Pacientes</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/tutores" class="text-white hover:text-gray-300">Tutores</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Contenido principal -->
    <div class="flex flex-col flex-1">
      <!-- Barra superior -->
      <header class="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <button @click="logout" class="text-red-500 hover:text-red-700">Cerrar Sesión</button>
      </header>

      <!-- Contenido dinámico -->
      <main class="flex-1 bg-gray-100 overflow-y-auto p-4">
        <div class="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat, veniam numquam possimus a consequuntur cum! Inventore, laborum explicabo. Modi delectus tenetur quae dicta rerum perferendis nemo error eum voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deserunt odio numquam eius ex molestiae optio. Suscipit culpa dolore architecto animi labore dicta aspernatur, temporibus recusandae pariatur facere perspiciatis iure!
          </p>
        </div>
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
/* Estilo básico para garantizar el diseño */
html,
body,
#app {
  margin: 0;
  height: 100%;
}
</style>
