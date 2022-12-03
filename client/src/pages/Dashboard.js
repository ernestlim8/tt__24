import BankDetail from "../components/BankDetail";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";

function Dashboard() {
    return (
      <div className="App">
        <p>Dashboard</p>
        <Navbar/>
        <Transaction/>     
        <BankDetail />
      </div>
    );
  }
  
  export default Dashboard;
  