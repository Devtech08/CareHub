// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "carehub-v9tub",
  appId: "1:1039108942865:web:f8797fa196a6bc626b15b0",
  storageBucket: "carehub-v9tub.firebasestorage.app",
  apiKey: "AIzaSyCf9-QhW43_2Lmz1A3HNhK1EyZ-ssLDY-k",
  authDomain: "carehub-v9tub.firebaseapp.com",
  messagingSenderId: "1039108942865"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
