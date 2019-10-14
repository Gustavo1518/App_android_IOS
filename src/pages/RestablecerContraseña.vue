<template>
  <f7-page name="RestablecerContraseña">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <f7-navbar title="Restablecer Contraseña" back-link="Blue">conacyt</f7-navbar>
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
    <button class="btn btn-primary" width="60%" @click="forgetpassword">Restablecer</button>
  </f7-page>
</template>
<script>
//v-if="show_resend_email"
import firebase from "firebase";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {},
  methods: {
    forgetpassword() {
      console.log("forgetpassword");
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
            console.log("el correo no es vacio");
          })
          .catch(function(error) {
            // An error happened.
            this.$store.commit("setAlertMessage", error);
          });
      } else {
        this.$store.commit("setAlertMessage", "please enter yout email");
        console.log("Existe un error");
      }
    }
  }
};
</script>
