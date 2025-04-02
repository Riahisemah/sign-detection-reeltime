import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2OkFy-yiGh7JOQ9ZiE_ZmA8SIVL1qKKQ",
  authDomain: "sign-detection-99b84.firebaseapp.com",
  projectId: "sign-detection-99b84",
  storageBucket: "sign-detection-99b84.firebasestorage.app",
  messagingSenderId: "509268925927",
  appId: "1:509268925927:web:a48687aff7c35d97153142",
  measurementId: "G-Z0Z63EM9HG",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
