<template>
  <!-- Aquí se renderiza la vista de login, registro, etc -->
  <router-view />

</template>

<script>
  export default {
    name: 'AuthLayout',
    mounted() {
      this.loadAssets()
    },
    methods: {
      loadAssets() {
        // CSS público
        const styles = [
          '/private/css/bootstrap.min.css',
          '/private/vendors/css/vendors.min.css',
          '/private/css/theme.min.css'
        ]

        styles.forEach(href => {
          if (!document.querySelector(`link[href="${href}"]`)) {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = href
            document.head.appendChild(link)
          }
        })

        // JS público
        const scripts = [
          '/private/vendors/js/vendors.min.js',
          '/private/js/common-init.min.js',
          '/private/js/theme-customizer-init.min.js'
        ]

        scripts.forEach(src => {
          if (!document.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement('script')
            script.src = src
            script.async = true
            document.body.appendChild(script)
          }
        })
      }
    }
  }
</script>