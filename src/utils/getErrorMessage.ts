// SignUp과 Login에서 중복되는 코드라서 나중에 모듈로 가져올 수 있도록 수정해야 됨 (현재는 에러 발생해서 보류)

// export const getErrorMessage = (errorCode: string | undefined) => {
//   switch (errorCode) {
//     case "auth/user-not-found":
//     case "auth/wrong-password":
//       return "이메일 혹은 비밀번호가 일치하지 않습니다.";
//     case "auth/email-already-in-use":
//       return "이미 사용 중인 이메일입니다.";
//     case "auth/weak-password":
//       return "비밀번호는 6~12자리 이어야 합니다ㅠㅠ.";
//     case "auth/network-request-failed":
//       return "네트워크 연결에 실패 하였습니다.";
//     case "auth/invalid-email":
//       return "잘못된 이메일 형식입니다.";
//     case "auth/internal-error":
//       return "잘못된 요청입니다.";
//     default:
//       return "로그인에 실패 하였습니다.";
//   }
// };
