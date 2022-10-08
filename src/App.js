import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import MyServices from './components/MyServices';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Introduction />
      <MyServices />
    </div>
  );
}

export default App;
