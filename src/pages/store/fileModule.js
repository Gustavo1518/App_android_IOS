import firebase from 'firebase';
const fileModule = {
    state: {
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVOLQf8KsEW0B0sfU8QjmICksllCuHbYyvi8KRL1azpYFpaA9",
        files: null,
        signed_in: false,
        show_resend_email: false,
        setShowResendEmail: null,
        photo_url: null,
        display_name: null,
        loading: false,
        error: null
    },
    getters: {
        signed_in: state => state.signed_in,
        img_url: state => state.img_url,
        files: state => state.files,
        show_resend_email: state => state.show_resend_email,
        photo_url: state => state.photo_url,
        display_name: state => state.display_name

    },
    mutations: {
        setImageURL(state, payload) {
            state.img_url = payload
        },
        setFiles(state, payload) {
            state.files = payload
        },
        setSignedIn(state, payload) {
            state.signed_in = payload
        },
        setShowResendEmail(state, payload) {
            state.show_resend_email = payload
        },
        setPhotoURL(state, payload) {
            state.photo_url = payload
        },
        setDisplayName(state, payload) {
            state.show_display_name = payload
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        setError(state) {
            state.error = null
        }
    },
    actions: {
        login({ commit }, payload) {
            firebase.auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    (user) => {
                        commit('setSignedIn', payload);
                        alert("Bienvenido");
                        firebase.auth().onAuthStateChanged(function (user) {
                            if (user.emailVerified) {
                                // User is signed in.
                                commit('setSignedIn', true);
                                commit('setAlertMessage', user.displayName)
                                commit('setShowResendEmail', false)
                                commit('setPhotoURL', user.photoURL)
                                commit('setDisplayName', user.displayName)

                            } else {
                                // No user is signed in.
                                commit('setSignedIn', false)
                                commit('setAlertMessage', "por favor verifica tu email");
                                commit('setShowResendEmail', true)
                            }
                        });
                    },
                    (err) => {
                        alert('eL usuario no existe' + err.message);
                    }
                )
        },
        // Subida de la imagen
        readFile({ commit }) {
            const files = event.target.files;
            commit('setFiles', files)
            const fileReader = new FileReader();
            let file = files[0]
            if (file['size'] < 20000) {
                fileReader.readAsDataURL(file)
                fileReader.addEventListener('load', () => {
                    var imageURL = fileReader.result;
                    commit('setImageURL', imageURL)
                });
            } else if (file['size'] > 20000) {
                alert("Imagen Demasiado Grande");
            } else if (this.file == null) {
                alert("Se Omite Foto De Perfil");
            } else {
                commit('setAlertMessage', 'the image size  is greater than 200 KB');
            }
        },
        signOut() {
            firebase.auth().signOut().then(() => {
                this.user = !null
            }).catch(err =>{
                console.log(err)
            })
        },
        uploadFile({ commit, state }) {
            return new Promise((resolve, reject) => {
                var file = state.files[0]
                var storageRef = firebase.storage().ref('profile/' + file.name)
                var uploadTask = storageRef.put(file);

                uploadTask.on('state_changed',
                    function (snapshot) {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    }, function (error) {
                        console.log(error);
                    }, function () {
                        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                            resolve(downloadURL)
                        });
                    });
            });
        },
        signUserInFacebook({ commit }) {
            commit('setLoading', true)
            commit('setError')
            firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then(
                    user => {
                        commit('setLoading', true)
                        const newuser = {
                            uid: data.user.uid,
                            name: payload.name,
                            email: payload.email,
                            password: payload.password
                        }
                        commit('setUser', newuser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
    }
}
export default fileModule