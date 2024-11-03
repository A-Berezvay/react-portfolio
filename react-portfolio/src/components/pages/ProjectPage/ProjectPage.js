import React from 'react';
import PageTitle from '../../utils/pageTitle';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Translation
import './ProjectPage.css'; // Ensure to create a corresponding CSS file for styles
import NatalieWebsite from '../../images/natalie_website.png';
import ATLandingPage from '../../images/AT-Digital-Landing-page.png';
import ArkadenHomePage from '../../images/Arkaden_homepage.png';

function ProjectPage() {
  const { t } = useTranslation();
  
  return (
    <main className="main">
      <PageTitle title={t('projects title')} />
      <section className="project">
        <h2>{t('project1')}</h2>
        <article className="project-card">
            <Link to="https://www.natalieingham.com/en/home" target="_blank"><img src={NatalieWebsite} alt="Home page of Natalie's website" /></Link>
            <div className="project-content">
              <h3>{t('project overview')}</h3>
              <p>{t('Natalie overview')}</p>
              <h3>{t('challenge')}</h3>
              <p>{t('Natlaie challenge')}</p>
              <h3>{t('solution')}</h3>
              <p>{t('Natalie solution')}</p>
              <h3>{t('result')}</h3>
              <p>{t('Natalie result')}</p>
              <Link to="https://www.natalieingham.com/en/home" target="_blank"><i class="fa-solid fa-link"></i></Link>
            </div>
        </article>
      </section>
      <section className="project">
        <h2>{t('project2')}</h2>
        <article className="project-card" id="AT-digital">
          <Link to="https://atdigitalconsultancy.co.uk/" target="_blank"><img src={ATLandingPage} alt="AT Digital Consultancy's landing page" /></Link>
          <div className="project-content">
            <h3>{t('project overview')}</h3>
            <p>{t('AT overview')}</p>
            <h3>{t('challenge')}</h3>
            <p>{t('AT challenge')}</p>
            <h3>{t('solution')}</h3>
            <p>{t('AT solution')}</p>
            <h3>{t('result')}</h3>
            <p>{t('AT result')}</p>
            <h3>{t('reflection')}</h3>
            <p>{t('AT reflection')}</p>
            <Link to="https://atdigitalconsultancy.co.uk/" target="_blank"><i class="fa-solid fa-link"></i></Link>
          </div>
        </article>
      </section>
      <section className="project">
        <h2>{t('project3')}</h2>
        <article className="project-card">
          <Link to="https://www.arkadenkolding.dk/" target="_blank"><img src={ArkadenHomePage} alt="Arkaden's landing page" /></Link>
          <div className="project-content">
            <h3>{t('project overview')}</h3>
            <p>{t('Arkaden overview')}</p>
            <h3>{t('challenge')}</h3>
            <p>{t('Arkaden challenge')}</p>
            <h3>{t('solution')}</h3>
            <p>{t('Arkaden solution')}</p>
            <h3>{t('result')}</h3>
            <p>{t('Arkaden result')}</p>
            <h3>{t('reflection')}</h3>
            <p>{t('Arkaden reflection')}</p>
            <Link to="https://www.arkadenkolding.dk/" target="_blank"><i class="fa-solid fa-link"></i></Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ProjectPage;

