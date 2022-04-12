import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBYZE1KR0AOukSbk46kARW-60Lo-IwoL1w",
    authDomain: "genius-car-service-projects.firebaseapp.com",
    projectId: "genius-car-service-projects",
    storageBucket: "genius-car-service-projects.appspot.com",
    messagingSenderId: "315402072116",
    appId: "1:315402072116:web:bacced53bf1bff02d6da61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;