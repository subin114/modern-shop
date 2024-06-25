import { authService } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUpWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(authService, email, password);
  } catch (error) {
    console.error("Error Signing up: ", error);
    throw error;
  }
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(authService, email, password);
  } catch (error) {
    console.error("Error Signing in: ", error);
    throw error;
  }
};
