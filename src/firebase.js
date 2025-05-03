// Import the functions you need from the SDKs you need
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEdJejFJkWI86My5EgheYlWtx8nu7yw0Q",
  authDomain: "pinkforum-ab68b.firebaseapp.com",
  projectId: "pinkforum-ab68b",
  storageBucket: "pinkforum-ab68b.firebasestorage.app",
  messagingSenderId: "512605001468",
  appId: "1:512605001468:web:987697645a68623672a979",
  measurementId: "G-PNPZHWKYG6"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

export { db }; // <-- We will use db in forum page
