import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";

function Dashboard() {
    return (
      <div className="App">
        <p>Dashboard</p>
        <Navbar/>
        <Outlet/>
      </div>
    );
  }
  
  export default Dashboard;
  