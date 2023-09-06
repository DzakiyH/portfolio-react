import Tsparticles from '../Tsparticles';
import { option } from '../../utils/tsparticle';
import '../../styles/workintroduction.css';

const WorkIntroduction = ({ title, subtitle, photo }) => {
  return (
    <div className='work-introduction'>
      <Tsparticles cName='particles-gather' particlesOption={option} />
      <div className='intro' id='home'>
        <h1 className='section-title section-title-intro'>
          <strong>{title}</strong>
        </h1>
        <p className='section-subtitle section-subtitle-intro'>{subtitle}</p>
        <img src={photo} alt='me' className='intro-img' />
      </div>
    </div>
  );
};

export default WorkIntroduction;
