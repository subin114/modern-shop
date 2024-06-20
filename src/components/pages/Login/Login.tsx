import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { Button } from "@mui/material";

/*
[추가]
1. 가입하지 않은 이메일을 입력한 경우 : "해당 이메일로 가입한 계정이 존재하지 않습니다" 라는 경고 메시지 출력
2. 이메일을 틀리게 입력한 경우 : "유효한 이메일을 입력하세요" 라는 경고 메시지 출력 (1번과 동일하게 할지 고민중)
3. 비밀번호를 틀리게 입력한 경우 : "비밀번호가 틀렸습니다" 라는 경고 메시지 출력
*/

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Login}>
      <h2>Login</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Email" id="email" required />
          <span>경고 메시지 입력</span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Password</label>
          <input name="password" type="password" placeholder="Password" id="password" required />
          <span>경고 메시지 입력</span>
        </div>
        <Button variant="outlined" color="secondary" className={styles.loginBtn}>
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
