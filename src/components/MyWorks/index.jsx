import React from 'react';
import '../../styles/myworks.css';
import fashionlution from '../../images/fashionlution.jpg';

const MyWorks = () => {
  return (
    <section className='my-work' id='work'>
      <h2 className='section-title section-title-work'>My Work</h2>
      <p className='section subtitle section-subtitle-work'>
        A selection of my range of work
      </p>

      <div className='portfolio'>
        <a href='project/fashionlution' className='portfolio-item'>
          <img src={fashionlution} alt='project' className='portfolio-img' />
          <p className='portfolio-name'>Fashionlution</p>
        </a>
      </div>
    </section>
  );
};

export default MyWorks;
