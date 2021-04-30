// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXg2mbwtJqZLsFJGo-ngIHbORiVmUbk0U",
  authDomain: "challenge-dff11.firebaseapp.com",
  projectId: "challenge-dff11",
  storageBucket: "challenge-dff11.appspot.com",
  messagingSenderId: "456139667343",
  appId: "1:456139667343:web:bfb8254bb8ca71caadbdfa",
  measurementId: "G-V4HJJM57WT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
