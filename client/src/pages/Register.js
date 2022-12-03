import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import registrationService from "../services/registrationService";
import classes from "../components/Form.module.css"
import AuthContext from "../auth-context";

const Register = () => {
  const navigate = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;
    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const email = emailInputRef.current.value;
    const address = addressInputRef.current.value;

    if (confirmPassword !== password) {
        alert("Passwords do not match!")
        return;
    }

    // TODO: hash password and confirm password matches
    const user = {
        username,
        password,
        firstName,
        lastName,
        email,
        address,
    }

    try {
      // TODO: uncomment when backend api is up
      
      const registrationData = registrationService.register(user);
      if (registrationData && registrationData.ID) {
        authCtx.login(registrationData.ID)
        navigate("/")
      } else {
        let errorMessage = "Registration failed!";
        throw new Error(errorMessage);
      }
      
      navigate("/")

    } catch (error) {
      console.log(error)
      alert(error.message);
    } 

  };

  return (
    <section className={classes.auth}>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
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
        <div className={classes.control}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            ref={confirmPasswordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            required
            ref={firstNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            required
            ref={lastNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            required
            ref={addressInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default Register;