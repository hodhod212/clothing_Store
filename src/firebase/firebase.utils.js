import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBipQKL_EZY5fMeZtt4WCorgFjcdsjUiko",
    authDomain: "store-db-c5310.firebaseapp.com",
    databaseURL: "https://store-db-c5310.firebaseio.com",
    projectId: "store-db-c5310",
    storageBucket: "store-db-c5310.appspot.com",
    messagingSenderId: "254986398759",
    appId: "1:254986398759:web:31976daebff31f8c0bf202"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



  