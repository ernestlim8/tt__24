import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (

    <div className="App">
      <Login/>
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
