import { initializeApp } from "firebase/app";
import { getDatabase  } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAN0ZvG_xGj7pFzpPp4HKKYG5EAT0dpCGM",
  authDomain: "onboarding-b9e49.firebaseapp.com",
  databaseURL: "https://onboarding-b9e49-default-rtdb.firebaseio.com",
  projectId: "onboarding-b9e49",
  storageBucket: "onboarding-b9e49.appspot.com",
  messagingSenderId: "779678839483",
  appId: "1:779678839483:web:fea39f0d2df8844926ef9e"
};


  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

export default db; 