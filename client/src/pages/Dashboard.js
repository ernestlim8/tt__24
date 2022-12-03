import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard(props) {
    return (
      <div className="App">
        <p>Dashboard</p>
        <Navbar Logout={props.Logout}/>
        <Outlet/>
      </div>
    );
  }
  
  export default Dashboard;
  