import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

import './styles/app.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
