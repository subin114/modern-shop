import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);

// 세션 유지 설정
setPersistence(authService, browserSessionPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});
