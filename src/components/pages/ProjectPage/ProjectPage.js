import React from 'react';
import './ProjectPage.css'; // Ensure to create a corresponding CSS file for styles
import NatalieWebsite from '../../images/natalie_website.png';

function ProjectPage() {
  return (
    <main className="main">
      <section className="project">
        <h1>Website Development for Natalie</h1>
        <article className="project-display">
            <img src={NatalieWebsite} />
            <div className="project-description">
              <div>
                <h3>Project overview</h3>
                <p>Natalie is an English-Italian translator who needed help integrating a language selector into her existing website.</p>
              </div>
              <div>
                <h3>Challange</h3>
                <p> The site needed to allow users to switch seamlessly between English and Italian, enhancing accessibility and user experience.</p>
              </div>
              <div>
                <h3>Solution</h3>
                <p>Implemented a dynamic language selector using JavaScript that updates text elements on the page in real time without reloading.</p>
              </div>
              <div>
                <h3>Result</h3>
                <p>The new feature has improved user engagement and broadened the site’s audience. Natali reported increased satisfaction from her international clients.</p>
              </div>
            </div>
        </article>
        <button>Interested in achieving similar results? Let’s talk!</button>
      </section>

      <section className="project">
        <h1>Building My Digital Transformation Agency</h1>
        <p><strong>Project Overview:</strong> Founded my own digital transformation and web development agency to fill a market gap for comprehensive digital services.</p>
        <p><strong>The Challenge:</strong> To create a robust, scalable website that showcases our services and attracts potential clients.</p>
        <p><strong>The Solution:</strong> Developed the site using React, integrated advanced SEO techniques, and ensured responsive design across all devices.</p>
        <p><strong>The Results:</strong> The site effectively represents our brand identity and has begun to generate leads and drive conversions.</p>
        <p><strong>Reflection:</strong> "Building this site was not only about showcasing services but also about embodying the core values and capabilities of our agency." - Myself</p>
        <button>Interested in achieving similar results? Let’s talk!</button>
      </section>
    </main>
  );
}

export default ProjectPage;
