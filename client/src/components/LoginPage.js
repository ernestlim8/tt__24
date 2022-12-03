import { useState, useRef, useContext } from "react";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const submitHandler = () => {};
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Username</label>
          <input type="email" id="username" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
