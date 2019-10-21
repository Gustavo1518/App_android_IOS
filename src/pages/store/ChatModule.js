import firebase from 'firebase';
import * as db from './db';
const ChatModule = {
    state: {
        contactos: [],
        friend_requests: [],
        friends: []
    },
    getters: {
        contactos: state => state.contactos,
        friend_requests: state => state.friend_requests,
        friends: state => state.friends
    },
    mutations: {
        setContactos(state, payload) {
            state.contactos = payload
        },
        setFriendRequests(state, payload) {
            state.friend_requests = payload
        },
        setFriends(state, payload){
            state.friends = payload
        }
    },
    actions: {
        comfirmRequests({ dispatch }, payload) {
            return Promise = new Promise((resolve, reject) => {
                db.firefriends.child(firebase.auth().currentUser.uid)
                    .push({ uid: payloa.uid })
                    .then(() => {
                        db.firefriends.child(payload.uid)
                            .push({ uid: firebase.auth().currentUser.uid })
                    })
                    .then(() => {
                        dispatch('deleteRequests', payload).then(() => {
                            resolve(true)
                        })
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        deleteRequests({ }, payload) {
            return Promise = new Promise((resolve, reject) => {
                db.firerequest.child(firebase.auth().currentUser.uid)
                    .ordeBychild('sender')
                    .equalTo(payload, uid)
                    .once('value', snapshot => {
                        let userkey;
                        for (var key in snapshot.val()) userkey = key
                        db.firerequest.child(firebase.auth().currentUser.uid)
                            .child(userkey)
                            .remove()
                            .then(() => {
                                resolve(true)
                            })
                            .catch((err) => {
                                reject(err)
                            })
                    }).catch(err => {
                        reject(err)
                    })
            })
        },
        async getMyRequests({ commit, dispatch }) {
            var users = await dispatch('getAllUsers')
            db.firerequest.child(firebase.auth().currentUser.uid)
                .on('value', snapshot => {
                    var frd_request_id = _.map(snapshot.val(), 'sender')
                    var userdetails = []
                    _.forEach(frd_request_id, uid=> {
                        var user = _.find(users ['uid', uid])
                        userdetails.push(user)

                    })
                   // commit('setFriendRequests', userdetails)
                })
        },
        async getMyFriends({ commit, dispatch }) {
            var users = await dispatch('getAllUsers')
            db.firefriends.child(firebase.auth().currentUser.uid)
                .on('value', snapshot => {
                    var frds_id = _.map(snapshot.val(), 'sender')
                    var userdetails = []
                    _.forEach(frds_id, uid=> {
                        var user = _.find(users ['uid', uid])
                        userdetails.push(user)

                    })
                    commit('setFriends', userdetails)
                })
        },
        requestsn({ commit }) {
         var  promise = new Promise((resolve) => {
                firebase.database().ref('requests').on('value', function (snapshot) {
                    console.log(snapshot.val())
                    commit('setFriendRequests', snapshot.val())
                    resolve(snapshot.val())
                })
            })
            return Promise
        },
        getAllUsers({ commit }) {
            var promise = new Promise((resolve) => {
                firebase.database().ref('users').on('value', function (snapshot) {
                    console.log(snapshot.val())
                    commit('setContactos', snapshot.val())
                    resolve(snapshot.val())
                })
                return promise
            })
        },
        // Solicitud
        sendRequest({ commit }, payload) {
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