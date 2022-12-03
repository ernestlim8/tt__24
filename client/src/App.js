import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Switch, useNavigate } from 'react-router-dom';
import CreateTransaction from './components/CreateTransaction';
import ProfilePage from './components/ProfilePage';
import Home from './pages/Home';
import { useState } from 'react';
import TransactionList from './components/TransactionList';

function App() {
  const [user, setUser] = useState("1");
  const navigate = useNavigate();

  function Logout() {
    setUser(null);
  }

  function navigateToAccount(id) {
    navigate(`/account/${id}`)
  }


  return (
    <div className="App">
      {!user
      ? <Login/>
      : <Routes>
          <Route element={<Dashboard Logout={Logout} />}>
            <Route index element={<Home navigateToAccount={navigateToAccount}/>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create" element={<CreateTransaction />} />
            <Route path="/account/:id" element={<TransactionList />} />
          </Route>
        </Routes>}
    </div>
  );
}

export default App;
