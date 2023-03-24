import photo from '../../images/me.jpg';
import '../../styles/aboutme.css';

const AboutMe = () => {
  return (
    <div className='about' id='about'>
      <div className='about-me'>
        <h2 className='section-title section-title-about'>Who I am</h2>
        <p className='section-subtitle section-subtitle-about'>
          Web developing enthusiast
        </p>

        <div className='about-me-body'>
          <p>
            Born in Tangerang, Banten but raised in Salatiga, Central Java.
            Spent my childhood in Salatiga until highschool. Then continue my
            study in Gadjah Mada University in Yogyakarta.
          </p>
          <p>
            Got into programming once i admitted to college. Started liking web
            development after discovered and started learning it in the second
            semester of my college. Joined some of my college events as a web
            developer and also took web development course. took a bootcamp
            while doing my thesis because i wasn't confident enough with my
            skill which i was wrong as i graduated as the best student.
          </p>
        </div>

        <img src={photo} alt='me' className='about-me-img' />
      </div>
    </div>
  );
};

export default AboutMe;
