<template>
  <f7-app :params="f7params">
    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar></f7-statusbar>

    <!-- Left panel with cover effect-->
    <f7-panel left cover theme-dark>
      <f7-view>
        <f7-page>
          <center>
          <div class="image"><img :src="img_url" alt=""></div>
        <f7-block>{{ display_name }}</f7-block></center>
          <f7-list>
            <f7-list-item link="/Login/" view=".view-main" panel-close title="Login"></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas" v-if="signed_in">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom>
        <f7-link
          tab-link="#view-home"
          tab-link-active
          icon-ios="f7:home_fil"
          icon-aurora="f7:home_fil"
          icon-md="material:home"
          text="Home"
        ></f7-link>
        <f7-link
          tab-link="#view-catalog"
          icon-ios="f7:list_fill"
          icon-aurora="f7:list_fill"
          icon-md="material:view_list"
          text="Catalog"
        ></f7-link>
        <f7-link
          tab-link="#view-settings"
          icon-ios="f7:settings_fill"
          icon-aurora="f7:settings_fill"
          icon-md="material:settings"
          text="Editar Perfil"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Catalog View -->
      <f7-view id="view-catalog" name="catalog" tab url="/catalog/"></f7-view>

      <!-- Settings View -->
      <f7-view id="view-settings" name="settings Perfil" tab url="/Editprofile/"></f7-view>
    </f7-views>
    <f7-view v-if="!signed_in" url="/Inicio/" :main="true"></f7-view>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Hola Conacyt.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Your username"
              :value="username"
              @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close @click="alertLoginData"></f7-list-button>
            <f7-block-footer>
              Some text about login information.
              <br />Click "Sign In" to close Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
import firebase from "firebase";
import cordovaApp from "../js/cordova-app.js";
import routes from "../js/routes.js";

// Mi aplicacion web en Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBH-k2f9zkQAbRGmkhOV_xBP6XUXzMfW7w",
  authDomain: "my-app-c27c3.firebaseapp.com",
  databaseURL: "https://my-app-c27c3.firebaseio.com",
  projectId: "my-app-c27c3",
  storageBucket: "my-app-c27c3.appspot.com",
  messagingSenderId: "394399994275",
  appId: "1:394399994275:web:17ce90c93f80249b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        id: "io.framework7.myapp", // App bundle ID
        name: "My App", // App name
        theme: "auto", // Automatic theme detection
        // App root data
        data: function() {
          return {
            user: {
              firstName: "John",
              lastName: "Doe"
            },
            // Demo products for Catalog section
            products: [
              {
                id: "1",
                title: "Apple iPhone 8",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."
              },
              {
                id: "2",
                title: "Apple iPhone 8 Plus",
                description:
                  "Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"
              },
              {
                id: "3",
                title: "Apple iPhone X",
                description:
                  "Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."
              }
            ]
          };
        },

        // App routes
        routes: routes,

        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron
        },
        // Cordova Statusbar settings
        statusbar: {
          overlay: (this.$device.cordova && this.$device.ios) || "auto",
          iosOverlaysWebView: true,
          androidOverlaysWebView: false
        }
      },

      // Login screen data
      username: "",
      password: ""
    };
  },
  computed: {
    signed_in() {
      return this.$store.getters.signed_in;
    },
    display_name() {
      return this.$store.getters.display_name;
    },
    img_url() {
      return this.$store.getters.img_url;
    }
  },
  methods: {
    alertLoginData() {
      this.$f7.dialog.alert(
        "Username: " + this.username + "<br>Password: " + this.password
      );
    }
  },
  mounted() {
    this.$f7ready(f7 => {
      // Init cordova APIs (see cordova-app.js)
      if(f7.device.cordova) {
        cordovaApp.init(f7);
      }else{
       console.log('existe un error para iniciar la applicacion ');      }
      // Call F7 APIs here
    });
  }
};
</script>