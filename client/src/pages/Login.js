import LoginPage from "../components/LoginPage";
import { Link } from "react-router-dom";
import { FormContainer } from "../components/FormContainer";

function Login() {
  return (
    <FormContainer>
      <LoginPage />
      <p>Not a user yet? Click <Link to="register">here</Link> to register now!</p>
    </FormContainer>
  );
}

export default Login;
