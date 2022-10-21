import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import photo from '../../images/me.jpg';
import { option } from '../../utils/tsparticle';
import '../../styles/introduction.css';

const Introduction = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className='introduction'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={option}
      />
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
