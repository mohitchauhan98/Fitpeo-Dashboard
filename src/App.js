import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Navbar>
    </Router>

  );
}

export default App;
