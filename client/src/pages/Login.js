import LoginPage from "../components/LoginPage";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <LoginPage />
      <p>Not a user yet? Click <Link to="register">here</Link> to register now!</p>
    </div>
  );
}

export default Login;
