import { useState, useRef, useContext } from "react";
// import { useHistory } from "react-router-dom";
import classes from "./LoginPage.module.css";
import AuthContext from "../auth-context";

const LoginPage = () => {
  //   const history = useHistory();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  // const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    //   if (isLogin) {
    //     url =
    //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkEYjiFVfb6eAx6bELIwQhwnxOKIhyrJk";
    //   } else {
    //     url =
    //       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkEYjiFVfb6eAx6bELIwQhwnxOKIhyrJk";
    //   }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        // history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
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
