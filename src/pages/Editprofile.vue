<template>
  <f7-page name="Registrate">
    <f7-navbar title="Registrate" back-link="Blue"></f7-navbar>
    <div>
      <center>
        <img class="image--cover" :src="img_url" alt="Registro" @click="launchFilepicker" />
      </center>
    </div>
    <f7-list no-hairlines-md>
      <f7-list-input
        :value="display_name"
        @input="display_name=$event.target.value"
        label="name"
        type="text"
        placeholder="Your name"
      ></f7-list-input>
    </f7-list>
    <f7-block>
      <button class="button" width="60%" outline @click="Updateprofile">Actualizar perfil</button>
      <input type="file" ref="file" style="display:none;" @change="save" />
      {{ display_name }}
    </f7-block>
  </f7-page>
</template>
<script>
import firebase from "firebase";
import { storage } from "firebase";
import { fileURLToPath } from "url";
export default {
  data() {
    return {
      email: null,
      name: null,
      password: null
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
    photo_url() {
      return this.$store.getters.photo_url;
    },
    display_name: {
      get: function() {
        return this.$store.getters.display_name;
      },
      set: function() {
        return this.$store.commit("setDisplayName");
      }
    }
  },
  watch: {},
  methods: {
    verifi() {
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
        alert("Faltan Campos Por llenar Gustavo");
      } else {
        this.$store.dispatch("verifi", payload);
      }
      //alert(JSON.stringify(payload));
    },
    launchFilepicker() {
      this.$refs.file.click();
    },
    save() {
      this.$store.dispatch("readFile");
    },
    Updateprofile() {
      const self = this;
      var user = firebase.auth().currentUser;
      if (self.files) {
        if (this.photo_url != null) {
          var store = firebase.storage();
          var httpReference = storage.refFromURL(this.photo_url);
          httpReference
            .delete()
            .then(() => {})
            .catch(err => {
              console.log("se produjo un error", err);
            });
        }
        self.$store.dispatch("uploadFile").then(url => {
          user
            .updateProfile({
              displayName: self.display_name,
              photoURL: url
            })
            .then(function() {
              self.$store.commit("setPhotoURL", user.photoURL);
              self.$store.commit("setDisplayName", user.displayName);
              firebase
                .database()
                .ref("users/" + user.uid)
                .update({
                  photo_url: user.photoURL,
                  name: user.displayName
                });
            });
        });
      } else {
        user
          .updateProfile({
            displayName: self.display_name
          })
          .then(function() {
            self.$store.commit("setDisplayName", user.displayName);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  created() {
    if (this.photo_url != null) {
      this.$store.commit("setImageURL", this.photo_url);
      console.log("La imagen no es null");
    } else {
      console.log("la imagen es nula, ocurrio un error");
    }
  }
};
</script>