import { authService } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";

export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(authService, email, password);
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(authService, email, password);
  } catch (error) {
    console.error("Error signing in: ", error);
    throw error;
  }
};

// export const signOut = async () => {
//   try {
//     await firebaseSignOut(authService);
//   } catch (error) {
//     console.error("Error signing out", error);
//     throw error;
//   }
// };
