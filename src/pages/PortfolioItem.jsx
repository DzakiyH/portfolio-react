import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import ProjectDetails from '../components/ProjectDetails';

const PortfolioItem = () => {
  return (
    <>
      <Navbar home={false} />
      <Introduction />
      <ProjectDetails />
    </>
  );
};

export default PortfolioItem;
