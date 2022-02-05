import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBwgk7LYJ2JcRv8I-36EPKLe_dsDscZQk",
  authDomain: "netflix-f36b0.firebaseapp.com",
  projectId: "netflix-f36b0",
  storageBucket: "netflix-f36b0.appspot.com",
  messagingSenderId: "703892128958",
  appId: "1:703892128958:web:2bccef0764d5da7d004aef",
  measurementId: "G-PGBKV8L5EE"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export default storage;