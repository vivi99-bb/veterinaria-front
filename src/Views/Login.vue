<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="correo">Correo:</label>
        <input type="email" v-model="correo" required />
      </div>
      <div>
        <label for="contrasena">Contraseña:</label>
        <input type="password" v-model="contrasena" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <div v-if="mensaje">
      <p>{{ mensaje }}</p>
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
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
