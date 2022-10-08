import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import MyServices from './components/MyServices';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Introduction />
      <MyServices />
      <AboutMe />
    </div>
  );
}

export default App;
