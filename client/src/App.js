import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Switch, useNavigate } from 'react-router-dom';
import CreateTransaction from './components/CreateTransaction';
import ProfilePage from './components/ProfilePage';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("1");
  
  function Logout() {
    setUser(null);
  }

  return (
    <div className="App">
      {!user 
      
      ? <Login/>
      : <Routes>
          <Route element={<Dashboard Logout={Logout} />}>
            <Route index element={<Home/>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create" element={<CreateTransaction />} />
          </Route>
        </Routes>}
      
     
    </div>
  );
}

export default App;
