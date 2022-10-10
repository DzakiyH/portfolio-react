import React from 'react';
import '../../styles/myworks.css';

const MyWorks = () => {
  return (
    <section className='my-work' id='work'>
      <h2 className='section-title section-title-work'>My Work</h2>
      <p className='section subtitle section-subtitle-work'>
        A selection of my range of work
      </p>

      <div className='portfolio'>
        <a href='#' className='portfolio-item'>
          <img src='' alt='project' className='portfolio-img' />
        </a>
        <a href='#' className='portfolio-item'>
          <img src='' alt='project' className='portfolio-img' />
        </a>
        <a href='#' className='portfolio-item'>
          <img src='' alt='project' className='portfolio-img' />
        </a>
      </div>
    </section>
  );
};

export default MyWorks;
