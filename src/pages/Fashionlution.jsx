import Navbar from '../components/Navbar';
import WorkIntroduction from '../components/WorkIntroduction';
import FashionlutionPage from '../components/FashionlutionPage';

const PortfolioItem = () => {
  return (
    <>
      <Navbar home={false} />
      <WorkIntroduction
        title='Fashionlution'
        subtitle='A Simple Fashion Marketplace'
      />
      <FashionlutionPage />
    </>
  );
};

export default PortfolioItem;
