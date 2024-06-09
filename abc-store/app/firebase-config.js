import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyCHN4Zjw5072TSLpnpmXF_RNPjVaniKIR8",
     authDomain: "abc-store-123.firebaseapp.com",
     projectId: "abc-store-123",
     storageBucket: "abc-store-123.appspot.com",
     messagingSenderId: "285455922954",
     appId: "1:285455922954:web:5a9b36cef2d20b6c1b2cf3",
     measurementId: "G-865RQL9YC7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);