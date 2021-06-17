import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyDafxjJa_CkqZCj1_FReUA6Grng2PgBwng",
    authDomain: "crown-clothing-5901c.firebaseapp.com",
    projectId: "crown-clothing-5901c",
    storageBucket: "crown-clothing-5901c.appspot.com",
    messagingSenderId: "592359022299",
    appId: "1:592359022299:web:46576c130c0378eea536fe",
    measurementId: "G-FVCDGCZTER" 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;