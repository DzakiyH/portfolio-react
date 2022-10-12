import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import MyServices from '../components/MyServices';
import AboutMe from '../components/AboutMe';
import MyWorks from '../components/MyWorks';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <MyServices />
      <AboutMe />
      <MyWorks />
      <Footer />
    </>
  );
};

export default Dashboard;
