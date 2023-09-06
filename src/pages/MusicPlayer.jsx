import Navbar from '../components/Navbar';
import WorkIntroduction from '../components/WorkIntroduction';
import MusicPlayerPage from '../components/MusicPlayerPage';

import musicPlayer from '../images/music-player.jpg';

const PortfolioItem = () => {
  return (
    <>
      <Navbar home={false} />
      <WorkIntroduction
        title='Music Player'
        subtitle='A Simple Music Player'
        photo={musicPlayer}
      />
      <MusicPlayerPage />
    </>
  );
};

export default PortfolioItem;
