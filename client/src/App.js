import './App.css';
import {Login, Register, Dashboard, Home} from './pages'
import { BrowserRouter as Router, Route, Routes, Switch, useNavigate } from 'react-router-dom';
import CreateTransaction from './components/CreateTransaction';
import ProfilePage from './components/ProfilePage';
import { useContext } from 'react';
import TransactionList from './components/TransactionList';
import AuthContext from './auth-context';
import BankList from './components/BankList';

function App() {
 const authCtx = useContext(AuthContext);
 const navigate = useNavigate();

  function Logout() {
    authCtx.logout()
  }

  function navigateToAccount(id) {
    navigate(`/account/${id}`)
  }

   
  return (
    <div className="App">
      {!authCtx.isLoggedIn ? 
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      : <Routes>
          <Route element={<Dashboard Logout={Logout} />}>
            <Route index element={<BankList navigateToAccount={navigateToAccount}/>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create" element={<CreateTransaction />} />
            <Route path="/account/:id" element={<TransactionList />} />
          </Route>
          </Routes>
        }
    </div>
  );
}

export default App;