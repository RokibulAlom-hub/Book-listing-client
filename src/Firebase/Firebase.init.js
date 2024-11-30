// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCniQEKzy-olve4vTkCmsSSBIazUFUH9LQ",
  authDomain: "books-listing-authentication.firebaseapp.com",
  projectId: "books-listing-authentication",
  storageBucket: "books-listing-authentication.firebasestorage.app",
  messagingSenderId: "651690334003",
  appId: "1:651690334003:web:7dee3652d07a091c29d046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
