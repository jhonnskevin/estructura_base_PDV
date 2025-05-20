<template>
  <div class="account-page">
    <div id="global-loader">
      <div class="whirly-loader"> </div>
    </div>

    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="account-content">
        <div class="login-wrapper login-new">
          <div class="container">
            <div class="login-content user-login">
              <!-- Logo -->
              <div class="login-logo">
                <img src="/assets/img/logo.png" alt="img">
                <RouterLink to="/" class="login-logo logo-white">
                  <img src="/assets/img/logo-white.png" alt="">
                </RouterLink>
              </div>

              <!-- Aquí se renderiza la vista de login, registro, etc -->
              <router-view />

            </div>

            <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
              <p>Copyright &copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Customizer Sidebar -->
    <div class="customizer-links" id="setdata">
      <ul class="sticky-sidebar">
        <li class="sidebar-icons">
          <a href="#" class="navigation-add" data-bs-toggle="tooltip" data-bs-placement="left" title="Theme">
            <i data-feather="settings" class="feather-five"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  mounted() {
    // Activa feather icons si es necesario
    if (window.feather) {
      window.feather.replace();
    }
  }
}
</script>

<style scoped>
/* Aquí puedes aplicar estilos adicionales si necesitas */
</style>
