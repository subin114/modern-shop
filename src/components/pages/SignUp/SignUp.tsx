import styles from "./SignUp.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import { signUpWithEmailAndPassword } from "../../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../../utils/isValidEmail";
import clsx from "clsx";

/*
[추가]
1. 이미 계정이 있는 이메일을 입력한 경우 : "이미 해당 이메일로 가입한 계정이 있습니다" 라는 경고 메시지 출력
2. 비밀번호를 13자리 이상 입력한 경우 : "6~12자리의 비밀번호를 입력하세요" 라는 경고 메시지 출력
*/

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setEmailValid(isValidEmail(value));
    } else if (name === "password") {
      setPassword(value);
      setPasswordValid(value.length >= 6);
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
    }
  };

  return (
    <div className={styles.SignUp}>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="email" id="email" value={email} onChange={onChange} required />
          <span className={clsx(styles.warning, { [styles.visible]: !emailValid })}>유효한 이메일을 입력하세요.</span>
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
          <span className={clsx(styles.warning, { [styles.visible]: !passwordValid })}>
            비밀번호 6자리 이상 입력하세요.
          </span>
        </div>
        <Button type="submit" variant="outlined" color="secondary" className={styles.signUpBtn}>
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
