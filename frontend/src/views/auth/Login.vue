<template>
  <form @submit.prevent="handleLogin">
    <div class="login-userset">
      <div class="login-userheading">
        <h3>Sign In</h3>
        <h4>Access the Dreamspos panel using your email and passcode.</h4>
      </div>

      <div class="form-login">
        <label class="form-label">Email Address</label>
        <div class="form-addons">
          <input
            type="email"
            v-model="email"
            class="form-control"
            required
            placeholder="Enter your email"
          />
          <img src="/assets/img/icons/mail.svg" alt="img" />
        </div>
      </div>

      <div class="form-login">
        <label>Password</label>
        <div class="pass-group">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            class="pass-input"
            required
            placeholder="Enter your password"
          />
          <span
            class="fas"
            :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"
            @click="togglePassword"
            style="cursor: pointer"
          ></span>
        </div>
      </div>

      <div class="form-login authentication-check">
        <div class="row">
          <div class="col-6">
            <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
              <input type="checkbox" v-model="rememberMe" />
              <span class="checkmarks"></span> Remember me
            </label>
          </div>
          <div class="col-6 text-end">
            <RouterLink class="forgot-link" to="/forgot-password">Forgot Password?</RouterLink>
          </div>
        </div>
      </div>

      <div class="form-login">
        <button class="btn btn-login" type="submit" :disabled="loading">
          {{ loading ? 'Signing in...' : 'Sign In' }}
        </button>
      </div>

      <div class="signinform">
        <h4>
          New on our platform?
          <RouterLink to="/register" class="hover-a">Create an account</RouterLink>
        </h4>
      </div>

      <div class="form-setlogin or-text">
        <h4>OR</h4>
      </div>

      <div class="form-sociallink">
        <ul class="d-flex">
          <li>
            <a href="#" class="facebook-logo">
              <img src="/assets/img/icons/facebook-logo.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/img/icons/google.png" alt="Google" />
            </a>
          </li>
          <li>
            <a href="#" class="apple-logo">
              <img src="/assets/img/icons/apple-logo.svg" alt="Apple" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AuthLogin",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      loading: false,
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      this.loading = true;

      try {
        // Aquí deberías implementar tu lógica real de login (por ejemplo, usando Firebase, API, etc.)
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        console.log("Remember me:", this.rememberMe);

        // Simulamos un login exitoso y redireccionamos
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/dashboard"); // Ajusta esta ruta según tu app
        }, 1000);
      } catch (error) {
        this.loading = false;
        alert("Login failed: " + error.message);
      }
    },
  },
};
</script>
