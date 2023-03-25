import { initializeApp } from "firebase/app"

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
  updateProfile,
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDppMueHUdhvn31jEweyRwrV1AyRvh3PYw",
  authDomain: "first-project-48bb8.firebaseapp.com",
  projectId: "first-project-48bb8",
  storageBucket: "first-project-48bb8.appspot.com",
  messagingSenderId: "1098721075386",
  appId: "1:1098721075386:web:ba8867e5885ab9fd132283",
}
const app = initializeApp(firebaseConfig)
const authService = getAuth()
const dbService = getFirestore(app)
const auth = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getFirestore,
  updateProfile,
}
export { auth, dbService, authService }
export default app
