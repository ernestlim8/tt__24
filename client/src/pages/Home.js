import { Outlet } from "react-router-dom";
import BankDetail from "../components/BankDetail";
import Navbar from "../components/Navbar";

function Home(props) {
    return (
      <div className="App">
        <BankDetail navigateToAccount={props.navigateToAccount} />
      </div>
    );
  }
  
  export default Home;
  