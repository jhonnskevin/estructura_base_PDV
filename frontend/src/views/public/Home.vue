<template>
  <PublicLayout>
    <template #default>
      <div class="home-page">
        <h1>Bienvenido a la Página Principal</h1>
        <p>¡Aquí podrás encontrar toda la información importante de nuestro sitio!</p>
        <router-link to="/about">Saber más sobre nosotros</router-link>
      </div>
    </template>
  </PublicLayout>
</template>

<script>
export default {
  name: "PublicHome"
}
</script>

<style scoped>
.home-page {
  padding: 20px;
  text-align: center;
}
.home-page h1 {
  color: #4CAF50;
  font-size: 2em;
}
.home-page p {
  margin: 20px 0;
}
</style>
