import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtN7Cc5TZ9htMtXnzd8bF00cGeuvml1_M",
  authDomain: "music-scope.firebaseapp.com",
  projectId: "music-scope",
  storageBucket: "music-scope.appspot.com",
  messagingSenderId: "932564995151",
  appId: "1:932564995151:web:bbf5f34af62d459d19ae3a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);