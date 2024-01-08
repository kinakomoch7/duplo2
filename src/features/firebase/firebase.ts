import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD2QLxpMB1Ru7-Htw8qFVBVQhpOjZhuZk",
  authDomain: "duplo-410310.firebaseapp.com",
  projectId: "duplo-410310",
  storageBucket: "duplo-410310.appspot.com",
  messagingSenderId: "812724055388",
  appId: "1:812724055388:web:c14566fa708c394c036599",
  measurementId: "G-6M5SKEN7JW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();


export { auth, provider };
export default db;