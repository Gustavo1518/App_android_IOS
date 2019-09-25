<template>
  <f7-page name="Login">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <f7-navbar title="Login" back-link="Blue">conacyt</f7-navbar>
    {{ title }}
    <div>
      <center>
        <f7-block-title>Iniciar Sesion</f7-block-title>
        <img :src="img_url" alt="Iniciar Sesion" />
      </center>
    </div>
    <f7-list no-hairlines-md>
      <f7-list-input
        :value="email"
        v-model="email"
        @input="email=$event.target.value"
        label="email"
        type="email"
        placeholder="Your email"
      ></f7-list-input>

      <f7-list-input
        :value="password"
        v-model="password"
        @input="password=$event.target.value"
        label="Password"
        type="password"
        placeholder="Password"
      ></f7-list-input>
    </f7-list>
    <button class="btn btn-primary" width="60%" @click="login">Iniciar Sesion</button>
    <center>
      <f7-link>Olvide mi contraseña</f7-link>|
      <f7-link href="/Registrate/">Registrarme</f7-link>|
      <f7-link>Cambiar contraseña</f7-link>
    </center>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    img_url() {
      return this.$store.getters.img_url;
    }
  },
  methods: {
    login() {
      var payload = {};
      payload.email = this.email;
      payload.password = this.password;
      this.$store.dispatch("login", payload);
    }
  }
};
</script>
