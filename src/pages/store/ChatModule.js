import firebase from 'firebase';
import * as db from './db';
const ChatModule = {
    state: {
        contactos: []
    },
    getters: {
        contactos:state => state.contactos
    },
    mutations: {
        setContactos(state, payload) {
            state.contactos = payload
        }
    },
    actions: {
    async getMyRequests({ commit, dispatch }) {
            var users = await  dispatch('getAllUsers')
            db.firerequest.child(firebase.auth().currentUser.uid)
                .on('value', snapshot => {
                    console.log('getMyRequests', snapshot.val())
                    var frd_request_id_ = _.map(snapshot.val(),'sender')
                    console.log('frd_request_id_',frd_request_id_)
                    console.log('users', users)
                    _.forEach(frd_request_id_, uid => {  
                    });
                })
        },
        getAllUsers({ commit }) {
          var promise = new Promise((resolve, reject) => {
                firebase.database().ref('users').on('value', function (snapshot) {
                    //console.log(snapshot.val())
                    commit('setContactos', snapshot.val())
                    resolve(snapshot.val())
                })
                return promise
            })
        },
        // Solicitud
        sendRequest(payload) {
            var promise = new Promise((resolve, reject) => {
                db.firerequest.child(payload.recipient).push({ sender: payload.sender })
                    .then(() => {
                        resolve({ success: true })
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            return promise
        }
    }
}
export default ChatModule