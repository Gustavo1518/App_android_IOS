<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Consejo Nacional De Ciencia Y Tecnologia</f7-nav-title>
      <f7-nav-right>
        <f7-link href="/requests/">
          <f7-icon f7="persons">
            <f7-badge color="red">3</f7-badge>
          </f7-icon>
        </f7-link>
        <f7-link icon-f7="add" href="/Contactos/"></f7-link>

        <f7-link icon-f7="chat" href="/Chat/"></f7-link>

         <f7-link icon-f7="info" href="/Informacion/">
         </f7-link>
      </f7-nav-right>
      <f7-nav-title-large sliding>Conacyt</f7-nav-title-large>
    </f7-navbar> 
    <div>
      <li v-for="(item, index) in friend_requests" :key="index">
       <i>
        {{ index }} {{ item }}
       </i>
      </li>
    </div>
  </f7-page>
</template>
<script>
import firebase from 'firebase'
import { encode } from 'punycode'
export default {
 computed:{
   friends(){
    return this.$store.getters.friends
   },
   friend_requests(){
     return this.$store.getters.friend_requests
   }
 },
 created(){
    this.$store.dispatch('requestsn')
    // this.$store.dispatch('getMyFriends')
 }
}
</script>