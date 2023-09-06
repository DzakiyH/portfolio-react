import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/myworks.css';
import fashionlution from '../../images/fashionlution.jpg';
import musicPlayer from '../../images/music-player.jpg';

const MyWorks = () => {
  return (
    <section className='my-work' id='work'>
      <h2 className='section-title section-title-work'>My Work</h2>
      <p className='section subtitle section-subtitle-work'>
        A selection of my range of work
      </p>

      <div className='portfolio'>
        <Link to='project/fashionlution' className='portfolio-item'>
          <img src={fashionlution} alt='project' className='portfolio-img' />
          <p className='portfolio-name'>Fashionlution</p>
        </Link>
        <Link to='project/music-player' className='portfolio-item'>
          <img src={musicPlayer} alt='project' className='portfolio-img' />
          <p className='portfolio-name'>Music Player</p>
        </Link>
      </div>
    </section>
  );
};

export default MyWorks;
