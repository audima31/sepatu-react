// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCgoCjpMqxBt100ja2cGH8AgQY0l9CDUm0",
  authDomain: "oktastudio-ff8ec.firebaseapp.com",
  databaseURL:
    "https://oktastudio-ff8ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oktastudio-ff8ec",
  storageBucket: "oktastudio-ff8ec.appspot.com",
  messagingSenderId: "980261534566",
  appId: "1:980261534566:web:d544df9e429662421666a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FIREBASE = getDatabase(app);

export default FIREBASE;
