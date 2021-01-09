
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkEBmJfmsl9NCNpkmYSDqlcMLevW7ecdU",
    authDomain: "cig-colthing-db.firebaseapp.com",
    projectId: "cig-colthing-db",
    storageBucket: "cig-colthing-db.appspot.com",
    messagingSenderId: "779422052535",
    appId: "1:779422052535:web:f60e115452fdbcb0655d32",
    measurementId: "G-6M397ZSV43"
  };

  export const  createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
      return userRef;
  }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;