// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcBT0lLLoXF9uThssc55FVpF3X5Ymv1lk",
  authDomain: "discord-clone-2e91b.firebaseapp.com",
  projectId: "discord-clone-2e91b",
  storageBucket: "discord-clone-2e91b.appspot.com",
  messagingSenderId: "431773031497",
  appId: "1:431773031497:web:836415f4be1dc86ba27398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore();
const auth = getAuth(app);
const database = getDatabase(app)


export {auth, database};