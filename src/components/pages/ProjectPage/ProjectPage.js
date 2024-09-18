import React from 'react';
import { useTranslation } from 'react-i18next'; // Translation
import './ProjectPage.css'; // Ensure to create a corresponding CSS file for styles
import NatalieWebsite from '../../images/natalie_website.png';
import ATLandingPage from '../../images/AT-Digital-Landing-page.png';

function ProjectPage() {
  const { t } = useTranslation();
  
  return (
    <main className="main">
      <section className="project">
        <h2>{t('project1')}</h2>
        <article className="project-display">
            <img src={NatalieWebsite} alt="Home page of Natalie's website" />
            <div className="project-description">
              <div>
                <h3>{t('project overview')}</h3>
                <p>Natalie is an English-Italian translator who needed help integrating a language selector into her existing website.</p>
              </div>
              <div>
                <h3>{t('challange')}</h3>
                <p> The site needed to allow users to switch seamlessly between English and Italian, enhancing accessibility and user experience.</p>
              </div>
              <div>
                <h3>{t('solution')}</h3>
                <p>Implemented a dynamic language selector using JavaScript that updates text elements on the page in real time without reloading.</p>
              </div>
              <div>
                <h3>{t('result')}</h3>
                <p>The new feature has improved user engagement and broadened the site’s audience. Natali reported increased satisfaction from her international clients.</p>
              </div>
            </div>
        </article>
        <button>Need help with your website? Let’s talk!</button>
      </section>
      <section className="project">
        <h2>Building a Digital Transformation Agency</h2>
        <article className="project-display"  id="AT-digital">
          <img src={ATLandingPage} alt="AT Digital Consultancy's landing page" />
          <div className="project-description">
            <div>
              <h3>{t('project overview')}</h3>
              <p>Co-Founded a digital transformation and web development agency to fill a market gap for comprehensive digital services.</p>
            </div>
            <div>
              <h3>{t('challange')}</h3>
              <p>To create a robust, scalable website that showcases our services and attracts potential clients.</p>
            </div>
            <div>
              <h3>{t('solution')}</h3>
              <p>Developed the site using HTML, CSS, JavaScript, integrated advanced SEO techniques, and ensured responsive design across all devices.</p>
            </div>
            <div>
              <h3>{t('result')}</h3>
              <p>The site effectively represents our brand identity and has begun to generate leads.</p>
            </div>
            <div>
              <h3>{t('reflection')}</h3>
              <p>"Building this site was not only about showcasing services but also about embodying the core values and capabilities of our agency." - Myself</p>
            </div>
          </div>
        </article>
        <button>Interested in making affordable website? Get in touch!</button>
      </section>
    </main>
  );
}

export default ProjectPage;
