import React from 'react';
import '../../styles/myservices.css';

const MyServices = () => {
  return (
    <section className='my-services' id='services'>
      <h2 className='section-title section-title-services'>What I do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Design + Development</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est iure
            iusto dolores doloribus nostrum. Nisi, voluptatibus. Minus
            voluptatibus dicta magni recusandae, corporis quaerat, quae autem
            illo voluptatem culpa perferendis eos!
          </p>
        </div>
        <div className='service'>
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos quasi neque provident illum, in fugiat debitis beatae
            cumque unde nam suscipit sed accusamus molestias eveniet labore
            temporibus eaque ullam magni.
          </p>
        </div>
        <div className='service'>
          <h3>Wordpress</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            nemo ipsam dolore sit deserunt quae nostrum quaerat eveniet nam
            suscipit quas voluptatem, quidem in. Laboriosam quidem dolorum sequi
            totam veritatis.
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
