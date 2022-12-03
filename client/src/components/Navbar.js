import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
    function OnLogout() {
        try {
            props.Logout();

        } catch(e) {
            console.log(e);
        }
    }
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/" onClick={OnLogout}>Logout</Link>
        <Link to="/profile">User Profile</Link>
      </div>
    );
  }
  
  export default Navbar;
  