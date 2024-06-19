import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { Button } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Login}>
      <h2>Login</h2>
      <form>
        <div className={styles.fromGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.fromGroup}>
          <label htmlFor="email">Password</label>
          <input type="password" id="password" required />
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
