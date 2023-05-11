import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Fashionlution from './pages/Fashionlution';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/project/fashionlution' element={<Fashionlution />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
