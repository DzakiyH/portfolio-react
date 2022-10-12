import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import MyServices from './components/MyServices';
import AboutMe from './components/AboutMe';
import MyWorks from './components/MyWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Introduction />
      <MyServices />
      <AboutMe />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;
