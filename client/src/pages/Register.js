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
import RegisterPage from "../components/RegisterPage";
import { Link } from "react-router-dom";
import { FormContainer } from "../components/FormContainer";

function Register() {
  return (
    <FormContainer>
      <RegisterPage />
    </FormContainer>
  );
}

export default Register;
