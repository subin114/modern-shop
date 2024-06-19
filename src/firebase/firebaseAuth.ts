import { authService } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUpWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const createAccount = await createUserWithEmailAndPassword(authService, email, password);
    const user = createAccount.user;
    console.log("Signed up user: ", user);
  } catch (error) {
    console.error("Error Signing up: ", error);
    throw error;
  }
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(authService, email, password);
    const user = userCredential.user;
    console.log("Logged in user: ", user);
  } catch (error) {
    console.error("Error Signing in: ", error);
    throw error;
  }
};
