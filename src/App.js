import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Fashionlution from './pages/Fashionlution';
import MusicPlayer from './pages/MusicPlayer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/project/fashionlution' element={<Fashionlution />} />
          <Route path='/project/music-player' element={<MusicPlayer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
