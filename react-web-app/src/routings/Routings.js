import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext'; 
import Home from '../components/Home.js';
import Login from '../components/Login.js';
import SignUp from '../components/SignUp.js';
import NewCoffee from '../components/coffees/New.js';

export default function Routings() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* COFFEES */}
          <Route path="/coffees/new" element={<NewCoffee />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
