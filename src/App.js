import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PortfolioItem from './pages/PortfolioItem';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/project/:id' element={<PortfolioItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
