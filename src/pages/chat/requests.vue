<template>
  <f7-page name="Requests">
    <f7-navbar title="Requests" back-link="Back"></f7-navbar>
    <f7-block-title>friend requests</f7-block-title>
    <div>
      <li v-for="(item, index) in friend_requests" :key="index">
        <i>{{ item }}</i>
        <button class="col button button-fill color-red" @click="confirm(item)">Confirmar</button>
        <button class="col button button-fill color-blue" @click="eliminar(item)">eliminar</button>
      </li>
    </div>
  </f7-page>
</template>
<script>
export default {
  computed: {
    friend_requests() {
      return this.$store.getters.friend_requests
    }
  },
  methods: {
    confirm(request) {
      this.$store.dispatch("comfirmRequests", request)
    },
    eliminar(request) {
      this.$store.dispatch("deleteRequests", request)
    }
  },
  created() {
    //this.$store.dispatch("getRequests");
    this.$store.dispatch("requestsn");
  }
};
</script> 