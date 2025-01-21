<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="correo" class="block text-gray-700 font-medium">Correo:</label>
          <input 
            type="email" 
            v-model="correo" 
            required 
            class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Correo electrónico"
          />
        </div>
        <div class="mb-6">
          <label for="contrasena" class="block text-gray-700 font-medium">Contraseña:</label>
          <input 
            type="password" 
            v-model="contrasena" 
            required 
            class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Contraseña"
          />
        </div>
        <button 
          type="submit" 
          class="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Iniciar Sesión
        </button>
      </form>
      <div v-if="mensaje" class="mt-4 text-center text-red-600">
        <p>{{ mensaje }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      correo: '',
      contrasena: '',
      mensaje: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:1020/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            correo: this.correo,
            contrasena: this.contrasena
          })
        });

        const data = await response.json();

        if (response.ok) {
          this.mensaje = data.message;
          Cookies.set('userId', data.id, { expires: 1 }); // Guarda la cookie por 24 horas
          this.$router.push({ name: 'Dashboard' }); // Redirige al dashboard
        } else {
          this.mensaje = data.message;
        }
      } catch (error) {
        this.mensaje = 'Error al intentar iniciar sesión';
      }
    }
  }
};
</script>

<style scoped>
/* No se requieren estilos adicionales ya que TailwindCSS cubre el diseño */
</style>
