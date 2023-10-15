
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
               apiKey: "AIzaSyBbrCD6D4c__Q30Zyi6_FEU9UKs8drNW0w",
               authDomain: "weather-app-8f46c.firebaseapp.com",
               projectId: "weather-app-8f46c",
               storageBucket: "weather-app-8f46c.appspot.com",
               messagingSenderId: "135147983533",
               appId: "1:135147983533:web:933eadd204a6abbd93ac24",
               measurementId: "G-1136YY98S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
