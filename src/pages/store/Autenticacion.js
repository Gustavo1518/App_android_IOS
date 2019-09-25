import firebase from 'firebase';

const Autenticacion = {

    actions: {
        // Creacion de nuevo usuario y almacanado
        verifi({ commit, dispatch }, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(data => {
                    firebase.database().ref('users').child(data.user.uid).set({
                        uid: data.user.uid,
                        name: payload.name,
                        email: payload.email,
                        emailverified: true,
                        password: payload.password
                    });
                    let newuser = data.user;
                    newuser.updateProfile({
                        displayName: payload.name,
                        img_url: payload.img_url
                    }).then(() => {
                        dispatch('verification')
                    })
                }).catch(error => {
                    console.log(commit('setAlertMessage', error));
                })
        },
        // Correo de verificacion automatico
        verification({ commit }) {
            var user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function () {
                commit('setAlertMessage', 'Se envio correo de confirmacion ${user.email}');
                alert('Se Envio Correo De Confirmacion');
            }).catch(function (error) {
                alert('Se produjo un error', error);
            });

        }
    }
}
export default Autenticacion