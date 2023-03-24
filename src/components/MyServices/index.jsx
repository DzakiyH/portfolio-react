import React from 'react';
import '../../styles/myservices.css';

const MyServices = () => {
  return (
    <section className='my-services' id='services'>
      <h2 className='section-title section-title-services'>What I do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Web Frontend</h3>
          <p>
            Always have interest in web development since college. experienced
            in HTML, CSS, Javascript, and React. interested and willing to learn
            other libraries such as Vue and Angular. Have several experiences in
            developing frontend in college and some job.
          </p>
        </div>
        <div className='service'>
          <h3>Backend</h3>
          <p>
            Primarily use Javascript to build backend for the frontend that i
            built. Have built some backend for project in college and some
            personal project. experienced in using RDBMS like MongoDB and also
            SQL. Also Experienced in making and using API.
          </p>
        </div>
        <div className='service'>
          <h3>Fullstack javascript</h3>
          <p>
            Since I have developed both frontend and backend, I am also capable
            of building a fullstack project. Have worked on several fullstack
            projects with full javascript.
          </p>
        </div>
      </div>
      <a href='#work' className='btn'>
        My Works
      </a>
    </section>
  );
};

export default MyServices;
