import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import classes from "./LoginPage.module.css";
import AuthContext from "../auth-context";

const LoginPage = () => {
  const navigate = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      // TODO: uncomment when backend api is up
      
      // const loginData = loginService.login(enteredUsername, enteredPassword);
      // if (loginData && loginData.ID) {
      //   authCtx.login(loginData.ID)
      //   navigate.replace("/")
      // } else {
      //   let errorMessage = "Authentication failed!";
      //   throw new Error(errorMessage);
      // }
      authCtx.login("1")
      navigate("/")

    } catch (error) {
      console.log(error)
      alert(error.message);
    } 

  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            required
            ref={usernameInputRef}
          />
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
