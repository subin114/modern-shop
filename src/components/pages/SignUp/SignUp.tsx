import styles from "./SignUp.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import { signUpWithEmailAndPassword } from "../../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FirebaseCustomError } from "../../../types/FirebaseCustomError";
import { isValidEmail } from "../../../utils/isValidEmail";

const SignUp = () => {
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
      // 실제 계정 생성
      await signUpWithEmailAndPassword(email, password);
      console.log("Account created successfully");
      alert("Your account has been created!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating account: ", error);

      const firebaseError = (error as FirebaseCustomError).code;

      switch (firebaseError) {
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
    <div className={styles.SignUp}>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="email" id="email" value={email} onChange={onChange} required />
          <span className={clsx(styles.warning, { [styles.visible]: !emailValid })}>{emailError}</span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
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
        <Button type="submit" variant="outlined" color="secondary" className={styles.signUpBtn}>
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
