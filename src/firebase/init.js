// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn3s6a17M-RUEiJLfprqhrpUaroE5hzd0",
  authDomain: "vuethird-b8074.firebaseapp.com",
  projectId: "vuethird-b8074",
  storageBucket: "vuethird-b8074.appspot.com",
  messagingSenderId: "402457525128",
  appId: "1:402457525128:web:7a5f7d06faf55a0d38183d"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const db = getFirestore()

export default db;
export const auth = getAuth()