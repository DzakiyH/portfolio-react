import photo from '../../images/me.jpg';
import '../../styles/aboutme.css';

const AboutMe = () => {
  return (
    <div className='about' id='about'>
      <div className='about-me'>
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

        <img src={photo} alt='me' className='about-me-img' />
      </div>
    </div>
  );
};

export default AboutMe;
