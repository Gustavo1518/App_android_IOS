<template>
  <f7-page name="Contactos">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <f7-navbar title="Contactos" back-link="Back"></f7-navbar>
    <f7-list media-list>
      <f7-list-item
        swipeout
        v-for="(contacto, index) in contactos"
        :key="index"
        link="#"
        :title="contacto.name"
      >
        <div class="block">
          <div class="row">
            <button class="col button button-fill"  @click="addFrd(contacto)" width="10%">Mandar Solicitud</button>
          </div>
        </div>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import firebase from "firebase";
export default {
  computed: {
    contactos() {
      return this.$store.getters.contactos;
    }
  },
  methods: { 
    addFrd(frd) {
      var request = {};
      request.sender = firebase.auth().currentUser;
      request.recipient = frd.uid;
      console.log("request", request);
      this.$store.dispatch("sendRequest", request);
    }
  },
  created() {
    this.$store.dispatch("getAllUsers");
  }
};
</script>
