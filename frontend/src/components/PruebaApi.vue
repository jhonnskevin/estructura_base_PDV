<!-- src/components/PruebaApi.vue -->
<template>
  <div>
    <h2>Respuesta desde Django:</h2>
    <p>{{ mensaje }}</p>
  </div>
</template>
  
  <script>
  import axios from '@/axios'
  
  export default {
    data() {
      return {
        mensaje: ''
      }
    },
    mounted() {
      axios.get('/api/hola/')
        .then(response => {
          this.mensaje = response.data.mensaje
        })
        .catch(error => {
          this.mensaje = 'Error al conectar con Django'
          console.error(error)
        })
    }
  }
  </script>
  