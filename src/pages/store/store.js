import Vue from 'vue';
import Vuex from 'Vuex';
import Autenticacion from './Autenticacion';
import fileModule from './fileModule';
import ChatModule from './ChatModule';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: Autenticacion,
        file: fileModule,
        chat: ChatModule
    },
    state: {
        title: 'Hola Mundo Del Vue.js',
        alert_message: null,
    },
    mutations: {
        setAlertMessage() {
            this.state.alert_message = this.payload
        }
    },
    getters: {
        alert_message: state => this.state.alert_message
    }
})