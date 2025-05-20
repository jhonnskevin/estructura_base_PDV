<template>
  <div class="register-form">
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Usuario" required />
      <input v-model="email" type="email" placeholder="Correo" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script>
import api from '@/axios'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register() {
      try {
        await api.post('register/', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        this.$router.push('/auth/login')
      } catch (err) {
        this.error = 'Hubo un error al registrar'
      }
    }
  }
}
</script>
