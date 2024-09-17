import React from 'react';
import './HomePage.css'; // Ensure to create a corresponding CSS file for styles
import Portrait from '../../images/Portrait.jpeg'

const HomePage = () => {
  return (
    <main className="interactive-main">
      <section className="home-page">
        <div>
          <div className="animation">
            <h2 className='heading'>Welcome to my Portfolio</h2>
          </div>
          <p className='text'>Aspiring Web Developer. To have a look at my work navigate to the "Projects" tab and browse. I always welcome constructive feedback so please get in touch if you have some.🤗</p>
        </div>
        <img src={Portrait} className="portrait-image" alt="Portrait image of myself" />
      </section>
    </main>
  );
}

export default HomePage;
