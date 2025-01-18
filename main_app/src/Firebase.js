// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgih-D_-bEpudUz5fP7UUEfLOAy7L6LKM",
  authDomain: "incomeexpensesapp-fbc6f.firebaseapp.com",
  projectId: "incomeexpensesapp-fbc6f",
  storageBucket: "incomeexpensesapp-fbc6f.firebasestorage.app",
  messagingSenderId: "156315106687",
  appId: "1:156315106687:web:5276d9ca5e8afe5344ae4a",
  databaseURL: "https://incomeexpensesapp-fbc6f-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);