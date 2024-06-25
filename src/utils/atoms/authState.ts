import { atom } from "recoil";
import { User } from "firebase/auth";

interface AuthState {
  isLogin: boolean;
  user: User | null;
}

export const authState = atom<AuthState>({
  key: "authState",
  default: { isLogin: false, user: null },
});
