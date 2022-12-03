import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TransactionList from "../components/TransactionList";

function Dashboard(props) {
    return (
      <div className="App">
        <p>Dashboard</p>
        <Navbar Logout={props.Logout}/>
        <TransactionList />
        <Outlet/>
      </div>
    );
  }
  
  export default Dashboard;
  