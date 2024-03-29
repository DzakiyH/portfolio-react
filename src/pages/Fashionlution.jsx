import Navbar from '../components/Navbar';
import WorkIntroduction from '../components/WorkIntroduction';
import FashionlutionPage from '../components/FashionlutionPage';

import fashionlution from '../images/fashionlution.jpg';

const PortfolioItem = () => {
  return (
    <>
      <Navbar home={false} />
      <WorkIntroduction
        title='Fashionlution'
        subtitle='A Simple Fashion Marketplace'
        photo={fashionlution}
      />
      <FashionlutionPage />
    </>
  );
};

export default PortfolioItem;
