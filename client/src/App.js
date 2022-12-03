import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import CreateTransaction from './components/CreateTransaction';
import ProfilePage from './components/ProfilePage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Login/>
      <Routes>
        <Route element={<Dashboard />}>
          <Route index element={<Home/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/createTransaction" element={<CreateTransaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
