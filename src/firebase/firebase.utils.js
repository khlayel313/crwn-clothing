import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCnq-D2UhSsNuw6irJUTlm-4ev4es-9te8",
    authDomain: "crwn-db-e13c7.firebaseapp.com",
    databaseURL: "https://crwn-db-e13c7.firebaseio.com",
    projectId: "crwn-db-e13c7",
    storageBucket: "crwn-db-e13c7.appspot.com",
    messagingSenderId: "518409779297",
    appId: "1:518409779297:web:c4e8709894f187c68e5220",
    measurementId: "G-S44SZ4G1W0"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;