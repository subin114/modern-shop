import { useEffect } from "react";
import { authService } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { authState } from "../utils/atoms/authState";

/** Firebase 인증 상태 변화 감지 함수 */
// const AuthInitializer = () => {
//   const setAuthState = useSetRecoilState(authState);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(authService, (user) => {
//       if (user) {
//         const userData = {
//           uid: user.uid,
//           displayName: user.displayName,
//           email: user.email,
//           photoURL: user.photoURL,
//         };
//         localStorage.setItem("user", JSON.stringify(userData));
//         setAuthState({ isLogin: true, user });
//       } else {
//         localStorage.removeItem("user");
//         setAuthState({ isLogin: false, user: null });
//       }
//     });

//     return () => unsubscribe();
//   }, [setAuthState]);

//   return null;
// };

// export default AuthInitializer;

const AuthInitializer = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService, (user) => {
      if (user) {
        // const uid = user.uid;
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

// const auth = getAuth();

// onAuthStateChanged(auth, (user) => {
//   const setAuthState = useSetRecoilState(authState);

//   if (user) {
//     const uid = user.uid;
//     setAuthState({isLogin: true, user: uid})
//   } else {
//     setAuthState({isLogin: false, user: null})
//   }
// })
