import Tsparticles from '../Tsparticles';
import photo from '../../images/me.jpg';
import { option } from '../../utils/tsparticle';
import '../../styles/introduction.css';

const Introduction = () => {
  return (
    <div className='introduction'>
      <Tsparticles cName='particles-gather' particlesOption={option} />
      <div className='intro' id='home'>
        <h1 className='section-title section-title-intro'>
          Hi, I am <strong>Dzakiy Harissalam</strong>
        </h1>
        <p className='section-subtitle section-subtitle-intro'>Web Developer</p>
        <img src={photo} alt='me' className='intro-img' />
      </div>
    </div>
  );
};

export default Introduction;
