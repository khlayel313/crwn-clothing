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

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //const userRef = firestore.doc('users/dfsdfjhdjfh');
    const snapShot = await userRef.get();

    //console.log(snapShot);

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })

      }
      catch (error) {
        console.log('error creating user', error.message)
      } 

    }

    return userRef;

  }

  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;