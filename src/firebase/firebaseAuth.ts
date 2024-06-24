import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUpWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const createAccount = await createUserWithEmailAndPassword(auth, email, password);
    const user = createAccount.user;
    console.log("Signed up user: ", user);
  } catch (error) {
    console.error("Error Signing up: ", error);
    throw error;
  }
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Firebase logged in user: ", user);
    return userCredential;
  } catch (error) {
    console.error("Error Signing in: ", error);
    throw error;
  }
};
