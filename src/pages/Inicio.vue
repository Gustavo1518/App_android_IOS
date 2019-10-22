<template>
  <f7-page name="inicio">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <!-- Navbar content -->
    <div class="navbar">
      <div class="navbar-inner">
        <div class="right">
          <a>
            <span>
              <button width="10%" @click="signOut" class="btn btn-danger">Cerrar sesion</button>
            </span><br/>
          </a> 
          <center><a>
            <span>
              <button width="10%" class="btn btn-danger">Contactos</button>
            </span>
          </a></center>
        </div>
      </div>
    </div>
    <div>
      <img :src="img_url" />
    </div>
  </f7-page>
</template>
<script>
export default {
  data(){
    return {
      error: '',
    };
  },
  methods: {
    signOut(){
      const app = this.$f7;
      this.$store.dispatch("signOut");
      app.panel.close();
    }
  },
  computed: {
    img_url(){
      return this.$store.getters.img_url;
    },
  }
};
</script>