<template>
  <f7-page name="inicio">
    <!-- Navbar content -->
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a>
            <i></i>
            <span>Bienvenido</span>
          </a>
        </div>
        <div class="title">user</div>
        <div class="right">
          <a>
            <i class="icon another-icon"></i>
            <span>
              <button width="10%" @click="signOut" class="button color-red">Cerrar sesion</button>
            </span>
          </a>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {
  methods: {
    signOut() {
      const app = this.$f7;
      this.$store.dispatch("signOut");
      app.panel.close();
    }
  }
};
</script>