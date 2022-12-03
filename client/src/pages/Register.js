import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import registrationService from "../services/registrationService";
import classes from "../components/Form.module.css"
import AuthContext from "../auth-context";
import RegisterPage from "../components/RegisterPage";
import { FormContainer } from "../components/FormContainer";
import { BackButton } from '../components/BackButton'

function Register() {
  return (
    <FormContainer>
      <RegisterPage />
      <BackButton/>
    </FormContainer>
  );
}

export default Register;
