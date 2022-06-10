// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsdpPNIzlB47oiQlNyHC9hjlYLO0j-DoE",
    authDomain: "personal-protfolio-ec70e.firebaseapp.com",
    projectId: "personal-protfolio-ec70e",
    storageBucket: "personal-protfolio-ec70e.appspot.com",
    messagingSenderId: "1071978477568",
    appId: "1:1071978477568:web:534febb15836dbc19f00e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;