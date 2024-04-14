// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv_XKcNshnhNXBOhgQeo7KVcLvVTiBbxM",
  authDomain: "job-portal-8f413.firebaseapp.com",
  projectId: "job-portal-8f413",
  storageBucket: "job-portal-8f413.appspot.com",
  messagingSenderId: "939385489284",
  appId: "1:939385489284:web:41c79969be77e9856a3fd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
