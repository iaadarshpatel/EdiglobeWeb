import { initializeApp } from "firebase/app";
import { getDatabase  } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_apiKey,
  authDomain: process.env.REACT_authDomain,
  databaseURL: process.env.REACT_databaseURL,
  projectId: "onboarding-b9e49",
  storageBucket: "onboarding-b9e49.appspot.com",
  messagingSenderId: "779678839483",
  appId: "1:779678839483:web:fea39f0d2df8844926ef9e"
};



  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

export default db; 