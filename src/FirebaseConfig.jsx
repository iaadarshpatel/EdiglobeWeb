import { initializeApp } from "firebase/app";
import { getDatabase  } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAKd7c2e__1z8HFBwZ8cmYy82eW4WIHIWk",
    authDomain: "ediglobe-1b491.firebaseapp.com",
    databaseURL: "https://ediglobe-1b491-default-rtdb.firebaseio.com",
    projectId: "ediglobe-1b491",
    storageBucket: "ediglobe-1b491.appspot.com",
    messagingSenderId: "450149643696",
    appId: "1:450149643696:web:a154f877f7bb0dafeb9275"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

export default db; 