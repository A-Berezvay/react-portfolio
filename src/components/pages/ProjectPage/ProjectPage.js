import React from 'react';
import PageTitle from '../../utils/pageTitle';
import { useTranslation } from 'react-i18next'; // Translation
import './ProjectPage.css'; // Ensure to create a corresponding CSS file for styles
import NatalieWebsite from '../../images/natalie_website.png';
import ATLandingPage from '../../images/AT-Digital-Landing-page.png';

function ProjectPage() {
  const { t } = useTranslation();
  
  return (
    <main className="main">
      <PageTitle title={t('projects title')} />
      <section className="project">
        <h2>{t('project1')}</h2>
        <article className="project-display">
            <div className="display-image">
              <a href="https://www.natalieingham.com/en/home" target="_blank"><img src={NatalieWebsite} alt="Home page of Natalie's website" /></a>
              <p>{t('project image')}</p>
            </div>
            <div className="project-description">
              <div>
                <h3>{t('project overview')}</h3>
                <p>{t('Natalie overview')}</p>
              </div>
              <div>
                <h3>{t('challenge')}</h3>
                <p>{t('Natlaie challenge')}</p>
              </div>
              <div>
                <h3>{t('solution')}</h3>
                <p>{t('Natalie solution')}</p>
              </div>
              <div>
                <h3>{t('result')}</h3>
                <p>{t('Natalie result')}</p>
              </div>
            </div>
        </article>
        <a href="/contact"><button>{t('Natalie button')}</button></a>
      </section>
      <section className="project">
        <h2>{t('project2')}</h2>
        <article className="project-display"  id="AT-digital">
          <div className="display-image">
          <a href="https://atdigitalconsultancy.co.uk/" target="_blank"><img src={ATLandingPage} alt="AT Digital Consultancy's landing page" /></a>
          <p>{t('project image')}</p>
          </div>
          <div className="project-description">
            <div>
              <h3>{t('project overview')}</h3>
              <p>{t('AT overview')}</p>
            </div>
            <div>
              <h3>{t('challenge')}</h3>
              <p>{t('AT challenge')}</p>
            </div>
            <div>
              <h3>{t('solution')}</h3>
              <p>{t('AT solution')}</p>
            </div>
            <div>
              <h3>{t('result')}</h3>
              <p>{t('AT result')}</p>
            </div>
            <div>
              <h3>{t('reflection')}</h3>
              <p>{t('AT reflection')}</p>
            </div>
          </div>
        </article>
        <a href="/contact"><button>{t('AT button')}</button></a>
      </section>
    </main>
  );
}

export default ProjectPage;
