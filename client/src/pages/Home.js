import { Outlet } from "react-router-dom";
import BankDetail from "../components/BankDetail";
import Navbar from "../components/Navbar";

function Home() {
    return (
      <div className="App">
        <BankDetail/>
      </div>
    );
  }
  
  export default Home;
  