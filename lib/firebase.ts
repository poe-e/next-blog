import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDUPXgwn9ivP-dm8FpxMMglPf1HPS2HMF0",
    authDomain: "next-blog-7066b.firebaseapp.com",
    projectId: "next-blog-7066b",
    storageBucket: "next-blog-7066b.appspot.com",
    messagingSenderId: "889149872263",
    appId: "1:889149872263:web:867e58b6e4a7119d62c022",
    measurementId: "G-H851MRWEW9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Auth exports
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  // Firestore exports
  export const firestore = firebase.firestore();

  export const storage = firebase.storage();