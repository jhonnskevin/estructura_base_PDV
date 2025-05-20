// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  globals: {
    define: 'readonly',   // Define como variable global para evitar errores.
    globalThis: 'readonly', // Asegúrate de que globalThis esté disponible.
  },
  rules: {
    // Reglas adicionales si es necesario
    'no-undef': ['error', { 'typeof': true }], // Permitir el uso de variables globales
    'no-prototype-builtins': 'off', // Deshabilitar la regla si accedes a `hasOwnProperty`
  },
}