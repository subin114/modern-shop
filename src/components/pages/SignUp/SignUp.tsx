import styles from "./SignUp.module.scss";
import { Button } from "@mui/material";

const SignUp = () => {
  return (
    <div className={styles.SignUp}>
      <h2>Sign Up</h2>
      <form>
        <div className={styles.fromGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.fromGroup}>
          <label htmlFor="email">Password</label>
          <input type="password" id="password" required />
        </div>
        <Button variant="outlined" color="secondary" className={styles.signUpBtn}>
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
