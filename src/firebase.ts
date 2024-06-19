import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const API_KEY_FIREBASE = {
  key: import.meta.env.VITE_FIRESTORE_API,
};

const firebaseConfig = {
  apiKey: `${API_KEY_FIREBASE.key}`,
  authDomain: "modern-shop-firebase.firebaseapp.com",
  projectId: "modern-shop-firebase",
  storageBucket: "modern-shop-firebase.appspot.com",
  messagingSenderId: "205626819074",
  appId: "1:205626819074:web:ca6d83d1ac4d7d8ee19d1b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
