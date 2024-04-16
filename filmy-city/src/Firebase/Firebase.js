
import { initializeApp } from "firebase/app";
import {getFirestore ,collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnYNQnXQpNfzMaJCenj5KyG-eOHLrInPg",
  authDomain: "filmy-city-6ab9d.firebaseapp.com",
  projectId: "filmy-city-6ab9d",
  storageBucket: "filmy-city-6ab9d.appspot.com",
  messagingSenderId: "311899069210",
  appId: "1:311899069210:web:2c1f373c2a43cdc3422aa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) // Access firebase Store
export const moviesRef = collection(db , "movies")
export const reviewsRef = collection(db , "reviews")
export const userRef = collection(db , "users")


export default app;