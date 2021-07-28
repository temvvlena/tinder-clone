import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlglJ_KNHWt1yls8FlDs2xtnZ7AFkB1DA",
    authDomain: "tinder-clone-2cd4f.firebaseapp.com",
    projectId: "tinder-clone-2cd4f",
    storageBucket: "tinder-clone-2cd4f.appspot.com",
    messagingSenderId: "281635053792",
    appId: "1:281635053792:web:49ee7dc793f34eb2c83085",
    measurementId: "G-YFXV4VP25J",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;