
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2hGbyUxsNb0XMHhOX1GRhltIlpxm0n2k",
  authDomain: "firestore-36eb7.firebaseapp.com",
  projectId: "firestore-36eb7",
  storageBucket: "firestore-36eb7.appspot.com",
  messagingSenderId: "894424170453",
  appId: "1:894424170453:web:f6ecd99b379657005e875c",
  measurementId: "G-JBC25CCJXG"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { auth, db, storage };
