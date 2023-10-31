// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD27d4RMBu7NntDSKfO3HDSA6X9ulHFrM",
  authDomain: "hackathon-4d87e.firebaseapp.com",
  projectId: "hackathon-4d87e",
  storageBucket: "hackathon-4d87e.appspot.com",
  messagingSenderId: "724988847644",
  appId: "1:724988847644:web:ffcf8d430db676a448e1d9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);