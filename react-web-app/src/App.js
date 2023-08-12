import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';
import './styles/app.css'

export default function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}
