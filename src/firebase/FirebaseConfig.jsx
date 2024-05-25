// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApCKxHQhWOU7eU0gEuEH6nPwGcJ1ubSGI",
  authDomain: "myecom-e561b.firebaseapp.com",
  projectId: "myecom-e561b",
  storageBucket: "myecom-e561b.appspot.com",
  messagingSenderId: "840416344272",
  appId: "1:840416344272:web:16175f787b3815e3d386d5"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }