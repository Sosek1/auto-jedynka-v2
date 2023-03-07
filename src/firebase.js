// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn9x_l75vxei6I_n8fqUj6u1c8Sgy6wRM",
  authDomain: "autojedynka-projekt.firebaseapp.com",
  projectId: "autojedynka-projekt",
  storageBucket: "autojedynka-projekt.appspot.com",
  messagingSenderId: "157505757574",
  appId: "1:157505757574:web:59bd73fde3650202ae4c07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
