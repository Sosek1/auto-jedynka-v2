// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYYnZp2ewKMevuKs5eeS4G5M3AV3eZQL8",
  authDomain: "autojedynka-73a74.firebaseapp.com",
  databaseURL:
    "https://autojedynka-73a74-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autojedynka-73a74",
  storageBucket: "autojedynka-73a74.appspot.com",
  messagingSenderId: "679297722751",
  appId: "1:679297722751:web:9f655d6efc1c2281ef124a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
