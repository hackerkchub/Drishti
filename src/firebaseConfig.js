// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCcKodoXqEXtoHLgq4bQ6AHkiQmvTFC2a0",
  authDomain: "drishti-expert-hub.firebaseapp.com",
  projectId: "drishti-expert-hub",
 storageBucket: "drishti-expert-hub.appspot.com",
  messagingSenderId: "208532237673",
  appId: "1:208532237673:web:243b3fc7981ca1eff961f8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { app };