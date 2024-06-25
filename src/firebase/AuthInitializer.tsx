import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authService } from "./firebase";
import { authState } from "../utils/atoms/authState";
import { onAuthStateChanged } from "firebase/auth";

/** Firebase 인증 상태 변화 감지 함수 */
const AuthInitializer = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService, (user) => {
      if (user) {
        setAuthState({ isLogin: true, user });
      } else {
        setAuthState({ isLogin: false, user: null });
      }
    });

    return () => unsubscribe();
  }, [setAuthState]);

  return null;
};

export default AuthInitializer;
