// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI5hpEXH9DTTtqf9OVaqlNPXFeqdkPQrs",
  authDomain: "proyecto-edii-q2-2024.firebaseapp.com",
  projectId: "proyecto-edii-q2-2024",
  storageBucket: "proyecto-edii-q2-2024.appspot.com",
  messagingSenderId: "847088314437",
  appId: "1:847088314437:web:21e56a9f967111ffb3db2c",
  measurementId: "G-CRWJMW79W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);