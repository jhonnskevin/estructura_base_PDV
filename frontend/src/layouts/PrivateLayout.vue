<template>
  <div class="private-layout">
    <aside>
      <!-- Menú lateral de administración -->
      <nav>
        <router-link to="/private/dashboard">Dashboard</router-link>
        <!-- Agrega más enlaces según tus vistas privadas -->
      </nav>
    </aside>

    <main>
      <!-- Contenido principal del panel de administración -->
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PrivateLayout'
}
</script>
