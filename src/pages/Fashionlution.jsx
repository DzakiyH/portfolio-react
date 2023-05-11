import Navbar from '../components/Navbar';
import WorkIntroduction from '../components/WorkIntroduction';
import Fashionlution from '../components/Fashionlution';

const PortfolioItem = () => {
  return (
    <>
      <Navbar home={false} />
      <WorkIntroduction
        title='Fashionlution'
        subtitle='A Simple Fashion Marketplace'
      />
      <Fashionlution />
    </>
  );
};

export default PortfolioItem;
