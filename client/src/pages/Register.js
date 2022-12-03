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
