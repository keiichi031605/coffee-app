import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import './styles/app.css'

export default function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}
