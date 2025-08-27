// src/firebase.js

// Import required SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPM0vd3vTOWr6c_q6ML0w452oNqu9MlIk",
  authDomain: "findme-b235f.firebaseapp.com",
  projectId: "findme-b235f",
  storageBucket: "findme-b235f.appspot.com",
  messagingSenderId: "938261184052",
  appId: "1:938261184052:web:4421dcf9db90ad1bb79461",
  measurementId: "G-3PWCHD92HN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Export Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
