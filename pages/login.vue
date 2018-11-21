<template>
  <div class="login-view">
    <div class="line"></div>
    <div class="line line2"></div>
    <div class="container">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="grid">
        <div class="form login" submit.prevent="login">

          <p v-if="error" class="error">{{ error }}</p>
          <div class="form__field">
            <label for="login__username">
              <div class="icon">
                <i class="icon-user"></i>
              </div>
              <span class="hidden">Usuario</span>
            </label>
            <input id="login__username" type="text" name="email" v-model="email" class="form__input" placeholder="Usuario" required>
          </div>

          <div class="form__field">
            <label for="login__password">
              <div class="icon">
                <i class="icon-lock"></i>
              </div>
              <span class="hidden">Password</span>
            </label>
            <input id="login__password" type="password" name="password" v-model="password" class="form__input" placeholder="Contraseña" required>
          </div>

          <div @click="login" class="form__field">
            <button type="submit" value="Ingresar">Ingresar</button>
          </div>

          <p class="text--center">
            <a :href="`${url}/auth/recover-password`">Olvidaste tu contraseña?</a>
          </p>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  computed: {
    url() {
      return window.location.origin
    }
  },
  methods: {
    // getUrl() {
    //   location.href = `${window.location.origin}/dashboard`
    // },
    login() {
      this.$auth
        .loginWith('local', {
          data: {
            username: this.email,
            password: this.password,
            grant_type: 'password',
            client_id: 2,
            client_secret: 'rC5O6gpTRhi5Ya252gPUO9udecm5fuKcBQvB1Hgp',
            theNewProvider: 'usuario'
          }
        })
        .then(response => {
          this.$router.push('/dashboard');
        })
      // this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #fff;
  color: #606468;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 400;
  height: 100%;
  line-height: 1.5;
  margin: 0;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
.grid {
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
  max-width: 20rem;
  width: 90%;
  background-color: #fff;
}
.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.container {
  max-width: 420px;
  width: 100%;
  border: 1px solid #eee;
  padding: 40px 0;
  border-radius: 10px;
  background-color: #fff;
  margin-top: -40px;
  z-index: 9;
  box-shadow: 0 2px 40px 4px rgba(121, 125, 129, 0.13);
}
.icon {
  display: inline-block;
  color: #797d81;
  font-size: 16px;
  font-size: 1.2rem;
  height: 1em;
  vertical-align: middle;
  width: 1em;
}
.logo {
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: none; */
}
a {
  color: #606468;
  outline: 0;
  text-decoration: none;
}
a:focus,
a:hover {
  text-decoration: underline;
}
input,
button {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  transition: background-color 0.3s;
}
button[type='submit'] {
  cursor: pointer;
  background-color: #98c253;
  padding: 10px;
}
.form {
  margin: -14px;
  margin: -0.875rem;
}
.form input[type='password'],
.form input[type='text'],
.form button[type='submit'] {
  width: 100%;
}
.form__field {
  display: flex;
  margin: 14px;
  margin: 0.875rem;
}
.form__input {
  flex: 1;
}
.login {
  color: #eee;
}
.login label,
.login input[type='text'],
.login input[type='password'],
.login button[type='submit'] {
  border-radius: 0.25rem;
  padding: 16px;
  padding: 1rem;
}

.login label {
  background-color: #363b41;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 20px;
  padding-left: 1.25rem;
  padding-right: 20px;
  padding-right: 1.25rem;
}
.login input[type='password'],
.login input[type='text'] {
  background-color: #3b4148;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px #3b4148 inset;
  -webkit-text-fill-color: #7a9e41 !important;
}
.login input[type='password']:focus,
.login input[type='password']:hover,
.login input[type='text']:focus,
.login input[type='text']:hover {
  background-color: rgb(67, 74, 82);
}
.login button[type='submit'] {
  background-color: #98c253;
  color: #eee;
  font-weight: 700;
  text-transform: uppercase;
}
.login button[type='submit']:focus,
.login button[type='submit']:hover {
  background-color: #7a9e41;
}
p {
  margin-bottom: 24px;
  margin-bottom: 1.5rem;
  margin-top: 24px;
  margin-top: 1.5rem;
}
.text--center {
  text-align: center;
}
.line {
  position: absolute;
  width: 200%;
  height: 20px;
  background-color: rgb(152, 194, 83);
  transform: rotateZ(-40deg);
  z-index: 1;
  background: rgba(151, 194, 83, 1);
  background: linear-gradient(
    to right,
    rgba(151, 194, 83, 1) 0%,
    rgba(122, 158, 65, 1) 100%
  );
}
.line2 {
  position: absolute;
  width: 200%;
  height: 2px;
  background-color: #3b4148;
  transform: rotateZ(-40deg);
  z-index: 1;
  background: #3b4148;
  top: 45%;
  background: linear-gradient(
    to right,
    rgba(152, 194, 83, 1) 0%,
    rgba(122, 158, 65, 1) 100%
  );
}
</style>
