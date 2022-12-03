import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

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
  