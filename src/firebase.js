import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAotYcHTdQ7MJe-Xh9Fd6kGOqp3ErlRiaA",
  authDomain: "baum-test-5f17d.firebaseapp.com",
  projectId: "baum-test-5f17d",
  storageBucket: "baum-test-5f17d.appspot.com",
  messagingSenderId: "24936556294",
  appId: "1:24936556294:web:0b2b2d4d5b0dc2f5c8e087",
  measurementId: "G-3NS4477JJ8",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
