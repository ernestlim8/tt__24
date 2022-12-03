import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import registrationService from "../services/registrationService";
import classes from "../components/Form.module.css"
import AuthContext from "../auth-context";
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
