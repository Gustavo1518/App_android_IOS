<template>
  <f7-page name="Registrate">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <f7-navbar title="Registrate" back-link="Blue"></f7-navbar>
    <f7-list no-hairlines-md>
      <div>
        <center>
          <div class="alert alert-success" role="alert" v-if="error">{{error}}</div>
          <img class="image--cover" :src="img_url" alt="Registro" @click="launchFilepicker" />
        </center>
      </div>
      <f7-list-input
        :value="name"
        @input="name=$event.target.value"
        label="Name"
        type="text"
        placeholder="Your name"
      ></f7-list-input>

      <f7-list-input
        :value="email"
        @input="email=$event.target.value"
        label="email"
        type="email"
        placeholder="Your email"
      ></f7-list-input>

      <f7-list-input
        :value="password"
        @input="password=$event.target.value"
        label="Password"
        type="password"
        placeholder="Password"
      ></f7-list-input>
    </f7-list>
    <button class="btn btn-primary" width="60%" @click="verifi">Registrarme</button>
    <center>
      <f7-link @click="verification">reenviar correo de confirmacion</f7-link>
    </center>
    <input type="file" ref="file" style="display:none;" @change="save" />
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      name: null,
      password: null,
      error: ''
      
    };
  },
  computed: {
    alert_message() {
      const self = this;
      return self.$store.getters;
    },
    img_url() {
      return this.$store.getters.img_url;
    },
    files() {
      return this.$store.getters.files;
    },
    signed_in() {
      return this.$store.getters.signed_in;
    }
  },
  watch: {
    alert_message(value) {
      const self = this;
      this.showToastBotton(value);
      setTimeout(() => {
        self.$store.commit("setAlertMessage");
      }, 200);
    }
  },
  methods: {
    verification() {
      var payload = {};
      if (
        this.email == null ||
        this.password == null ||
        this.password == null
      ) {
        this.error=("No existe Correo");
      } else {
        this.$store.dispatch("verification", payload);
      }
    },
    verifi(value) {
      const self = this;
      var payload = {};
      payload.email = this.email;
      payload.name = this.name;
      payload.password = this.password;
      payload.img_url = this.img_url;
      if (self.files) {
        self.$store.dispatch("uploadFile").then(url => {
          payload.img_url = url;
          self.$store.dispatch("verifi", payload);
        });
      } else if (
        this.email == null ||
        this.password == null ||
        this.password == null
      ) {
        this.error=("Campos Vacios");
      } else {
        this.$store.dispatch("verifi", payload);
      }
      return (this.email = ""), (this.password = ""), (this.name = "");
    },
    launchFilepicker() {
      this.$refs.file.click();
    },
    save() {
      this.$store.dispatch("readFile");
    },
    showToastBotton(text) {
      const self = this;
      if (!self.toastBotton || self.toastBotton.destroyed) {
        self.toastBotton = self.$f7.toast.create({
          text: text,
          closetimeout: 2000,
          destroyOnClose: true
        });
      }
      self.toastBotton.open();
    }
  }
};
</script>