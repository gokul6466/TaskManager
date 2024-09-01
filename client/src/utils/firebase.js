// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "task-manager-project123.firebaseapp.com",
    projectId: "task-manager-project123",
    storageBucket: "task-manager-project123.appspot.com",
    messagingSenderId: "855915674070",
    appId: "1:855915674070:web:995a04be85a443721d8c77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);