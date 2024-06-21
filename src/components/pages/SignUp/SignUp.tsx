import styles from "./SignUp.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import { signUpWithEmailAndPassword } from "../../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../../utils/isValidEmail";
import clsx from "clsx";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setEmailValid(isValidEmail(value));
    } else if (name === "password") {
      setPassword(value);
      if (value.length < 6 || value.length > 12) {
        setPasswordValid(false);
        setPasswordError("6~12자리의 비밀번호를 입력하세요");
      } else {
        setPasswordValid(true);
        setPasswordError("");
      }
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signUpWithEmailAndPassword(email, password);
      console.log("Account created successfully");
      alert("Your account has been created!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating account: ", error);
      const firebaseError = error as { code?: string };

      if (firebaseError.code === "auth/email-already-in-use") {
        setEmailValid(false);
        setEmailError("해당 이메일로 가입한 계정이 있습니다.");
      } else {
        setEmailValid(false);
        setEmailError("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
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
