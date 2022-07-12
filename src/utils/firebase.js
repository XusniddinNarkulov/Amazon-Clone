import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyCEPjwlBPBsCUHi6s4s-4qXMJ81XhsDgcA",
   authDomain: "clone-e9342.firebaseapp.com",
   projectId: "clone-e9342",
   storageBucket: "clone-e9342.appspot.com",
   messagingSenderId: "502999367259",
   appId: "1:502999367259:web:d4ff541e9210bf95ae497e",
};

const firebasApp = firebase.initializeApp(firebaseConfig);

export const db = firebasApp.firestore();
export const auth = firebase.auth();
