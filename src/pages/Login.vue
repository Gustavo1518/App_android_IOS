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
      <f7-link @click="onSigninFacebook">Iniciar Con Facebook</f7-link>|
      <f7-link href="/Registrate/">Registrarme</f7-link>|
      <f7-link @click="forgetpassword">Olvide Mi Contraseña</f7-link>
    </center>
  </f7-page>
</template>
<script>
//v-if="show_resend_email"
import firebase from 'firebase';
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
    },
    show_resend_email() {
      return this.$store.getters.show_resend_email;
    }
  },
  methods: {
    login() {
      var payload = {};
      payload.email = this.email;
      payload.password = this.password;
      if(this.email == null || this.password == null){
      alert('Faltan Campos Por llenar');
      }else{
      this.$store.dispatch("login", payload);
      }
    },
    forgetpassword() {
      console.log('forgetpassword');
      var auth = firebase.auth();
      if (this.email != null) {
        auth
          .sendPasswordResetEmail(this.password)
          .then(function() {
            // Email sent.
            this.payload.$store.commit(
              "setAlertMessage",
              "An reset email has been sent"
            );
          })
          .catch(function(error) {
            // An error happened.
            this.$store.commit("setAlertMessage", error);
          });
      } else if(this.email == null || this.password == null){
        alert('Error Campos Vacios');
      }else {
        this.$store.commit("setAlertMessage",'please enter yout email');
      }
    },
  onSigninFacebook () {
  this.$store.dispatch('signUserInFacebook');
      }
  }
};
</script>
