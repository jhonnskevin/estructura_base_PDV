<template>
  <div class="public-layout">
    <header>
      <!-- Header público, como el menú de navegación -->
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Acerca de</router-link>
        <router-link to="/auth/login">Login</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <!-- Pie de página público -->
      <p>© 2025 Tu Sitio</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PublicLayout'
}
</script>
