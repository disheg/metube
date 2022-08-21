import React from "react";

import styles from "./Login.module.scss";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>Login</h1>
      <form className={styles.loginForm}>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <button className={styles.btn}>
          <span>Login</span>
        </button>
      </form>
      <a className={styles.restorePassword}>Forgot your password?</a>
    </div>
  );
};

export default Login;
