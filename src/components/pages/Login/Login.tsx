import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import { isValidEmail } from "../../../utils/isValidEmail";
import clsx from "clsx";
import { loginWithEmailAndPassword } from "../../../firebase/firebaseAuth";
import { FirebaseCustomError } from "../../../types/FirebaseCustomError";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailIsValid = isValidEmail(email);
  const passwordIsValid = password.length >= 6 && password.length <= 12;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setEmailValid(true);
    } else if (name === "password") {
      setPassword(value);
      setPasswordValid(true);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. 이메일 유효성 검사
    if (!emailIsValid) {
      setEmailValid(false);
      setEmailError("잘못된 이메일 형식입니다.");
    } else {
      setEmailValid(true);
      setEmailError("");
    }

    // 2. 비밀번호 유효성 검사
    if (!passwordIsValid) {
      setPasswordValid(false);
      setPasswordError("비밀번호는 6~12자리 이어야 합니다.");
    } else {
      setPasswordValid(true);
      setPasswordError("");
    }

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    try {
      // 실제 계정으로 로그인
      await loginWithEmailAndPassword(email, password);
      alert("로그인에 성공하였습니다.");
      navigate("/");
    } catch (error) {
      console.error("Error creating account: ", error);

      const firebaseError = (error as FirebaseCustomError).code;

      switch (firebaseError) {
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
          setEmailValid(false);
          setPasswordValid(false);
          setEmailError("이메일 혹은 비밀번호가 일치하지 않습니다.");
          break;
        case "auth/email-already-in-use":
          setEmailValid(false);
          setEmailError("이미 사용 중인 이메일입니다.");
          break;
        case "auth/weak-password":
          setPasswordValid(false);
          setPasswordError("비밀번호는 6~12자리 이어야 합니다.");
          break;
        case "auth/invalid-email":
          setEmailValid(false);
          setEmailError("잘못된 이메일 형식입니다.");
          break;
        default:
          setEmailValid(false);
          setEmailError("오류가 발생했습니다. 다시 시도해 주세요.");
          break;
      }
    }
  };

  return (
    <div className={styles.Login}>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="email" id="email" value={email} onChange={onChange} required />
          <span className={clsx(styles.warning, { [styles.visible]: !emailValid })}>{emailError}</span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={onChange}
            required
          />
          <span className={clsx(styles.warning, { [styles.visible]: !passwordValid })}>{passwordError}</span>
        </div>
        <Button variant="outlined" color="secondary" className={styles.loginBtn} type="submit">
          Login
        </Button>
        <Button variant="outlined" color="secondary" className={styles.signUpBtn} onClick={() => navigate("/signUp")}>
          SignUp
        </Button>
      </form>
      <div className={styles.find}>
        <span>
          Forgot your email or password? <b>Click!</b>
        </span>
      </div>
    </div>
  );
};

export default Login;
