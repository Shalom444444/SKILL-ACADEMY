// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
    const firebaseConfig = {
    apiKey: "AIzaSyBUtXJdUBEMPMqTy5o_Zez-wWWYZOcZNlc",
    authDomain: "skillacademy-93644.firebaseapp.com",
    projectId: "skillacademy-93644",
    storageBucket: "skillacademy-93644.appspot.com",
    messagingSenderId: "213475290339",
    appId: "1:213475290339:web:daf3b01ee102beca74e9d6",
    measurementId: "G-Q1RPC2F873"
    };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(initializeApp(firebaseConfig));
export const db = getFirestore(app);