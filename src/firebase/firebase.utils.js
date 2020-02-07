
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDGFBP2Q4SQPtkt3t1ZQiyI0xy8djqDXCo",
    authDomain: "crwn-db-463a4.firebaseapp.com",
    databaseURL: "https://crwn-db-463a4.firebaseio.com",
    projectId: "crwn-db-463a4",
    storageBucket: "crwn-db-463a4.appspot.com",
    messagingSenderId: "599177569050",
    appId: "1:599177569050:web:c7acf2ce58f492db1102a3",
    measurementId: "G-G501R6E10R"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;