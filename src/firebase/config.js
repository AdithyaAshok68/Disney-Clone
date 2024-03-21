import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJFwPWmu5Xc_OxDjZkHZxfVqg4brEr4sE",
    authDomain: "disney-clone-55f22.firebaseapp.com",
    projectId: "disney-clone-55f22",
    storageBucket: "disney-clone-55f22.appspot.com",
    messagingSenderId: "64967183049",
    appId: "1:64967183049:web:5f7d4757a5e1e9d5bf1b18",
    measurementId: "G-EBCPCBR4FK"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
