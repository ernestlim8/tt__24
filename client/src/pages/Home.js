import { Outlet } from "react-router-dom";
import BankDetail from "../components/BankDetail";
import BankList from "../components/BankList";
import Navbar from "../components/Navbar";

function Home(props) {
    return (
      <div className="App">
        <BankList navigateToAccount={props.navigateToAccount} />
      </div>
    );
  }
  
  export default Home;
  