// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwju5WSf_5DDQQFQigce2dRtx-FBC5QKg",
  authDomain: "fir-intrigation-b961e.firebaseapp.com",
  projectId: "fir-intrigation-b961e",
  storageBucket: "fir-intrigation-b961e.firebasestorage.app",
  messagingSenderId: "958735241155",
  appId: "1:958735241155:web:a5b9af30ddaf53213b7776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
