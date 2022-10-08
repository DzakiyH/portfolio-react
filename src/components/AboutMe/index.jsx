import React from 'react';
import '../../styles/aboutme.css';

const AboutMe = () => {
  return (
    <section className='about-me' id='about'>
      <h2 className='section-title section-title-about'>Who I am</h2>
      <p className='section-subtitle section-subtitle-about'>
        tell about yourself
      </p>

      <div className='about-me-body'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cumque
          nemo nesciunt? Eligendi maxime molestias molestiae ab velit. Eveniet
          laudantium perferendis harum nihil excepturi consectetur inventore
          quibusdam laborum cupiditate deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aliquid nemo, assumenda, porro iste illum distinctio vero dolore sit
          perspiciatis qui delectus unde vel rem veritatis minus amet.
          Quibusdam, sapiente.
        </p>
      </div>

      <img src='' alt='me' className='about-me-img' />
    </section>
  );
};

export default AboutMe;
