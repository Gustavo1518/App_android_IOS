<template>
  <f7-page name="Requests">
    <f7-navbar title="Requests" back-link="Back"></f7-navbar>
    <f7-block-title>friend requests</f7-block-title>
    <pre>{{friend_requests}}</pre>
  </f7-page>
</template>
<script>
export default {
  computed: {
    friend_requests() {
      return this.$store.getters.friend_requests;
    }
  },
  methods: {
    confirm(request) {
      this.$store.dispatch("comfirmRequests", request);
    },
    eliminar(request) {
      this.$store.dispatch("deleteRequests", request);
    }
  },
  created() {
    this.$store.dispatch("getMyRequests");
  }
};
</script> 