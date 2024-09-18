import React from 'react';
import { useTranslation } from 'react-i18next'; // Translation
import './AboutPage.css';

const AboutPage = () => {
    const { t } = useTranslation();
    
    return (
        <main>
        <section class="about-me">
            <article class="about-me-sections my-journey">
                <h2 class="hidden">{t('my-journey')}</h2>
                <p class="hidden">{t('my-journey-description')}</p>
            </article>
            <article class="about-me-sections">
                <h2 class="hidden">My skills</h2>
                <div class="skill-grid">
                    <i class="hidden skills fa-brands fa-html5"></i>
                    <i class="hidden skills fa-brands fa-css3-alt"></i>
                    <i class="hidden skills fa-brands fa-js"></i>
                    <i class="hidden skills fa-brands fa-react"></i>
                    <i class="hidden skills fa-solid fa-database"></i>
                    <i class="hidden skills fa-brands fa-git"></i>
                    <i class="hidden skills fa-brands fa-github"></i>
                    <i class="hidden skills fa-brands fa-wordpress"></i>
                    <i class="hidden skills fa-brands fa-elementor"></i>
                    <i class="hidden skills fa-brands fa-shopify"></i>
                    <i class="skills fa-brands fa-jira"></i>
                    <i class="skills fa-brands fa-yammer"></i>
                </div>
            </article>
        </section>
        <section class="my-work">
            <h2>What I do</h2>
            <div class="offers">
                <article class="features">
                    <div class="icon-holder">
                        <i class="fa-solid fa-code"></i>
                    </div>
                    <div class="features-content">
                        <h3>Web Development</h3>
                        <p>From Content Management Systems to Hand-coding, I have the ability to build <b>SEO optimised websites</b>, for diverse needs. This Portfolio itself was initially crafted with <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b> but for scalability reasons I transitioned to <b>React</b>. With sharp eye for details and design I ensure that every website I develop aligns with the <b>envisioned aesthetic.</b></p>
                    </div>
                </article>
                <article class="hidden features">
                    <div class="icon-holder">
                        <i class="fa-solid fa-pencil"></i>
                    </div>
                    <div class="features-content">
                        <h3>UI/UX</h3>
                        <p>Imagine a digital space that <b>feels</b> like a <b>cozy</b> coffee shop; <b>welcoming</b> and <b>easy to navigate</b>. That’s what I aim for with my UI/UX design. I listen to your needs and craft experiences that make your visitors feel right at home, ensuring they find what they need with a smile.</p>
                    </div>
                </article>
                <article class="hidden features">
                    <div class="icon-holder">
                        <i class="fa-solid fa-desktop"></i>
                    </div>
                    <div class="features-content">
                        <h3>Web Design</h3>
                        <p>Your <b>website is</b> the digital <b>face of your brand</b>, and it should be as welcoming and engaging as you are. I blend <b>colors</b>, <b>graphics</b>, and <b>typography</b> to not just catch the eye, but <b>to tell a story</b> and evoke emotions. <b>Let's collaborate</b> to make your website a place where visitors love to linger.</p>
                    </div>
                </article>          
            </div>
        </section>
        <section class="hidden contact-me">
            <h2>Let's work <b>together</b></h2>
            <a href="/contact.html"><button>Contact</button></a>
        </section>
        </main>
    );
}

export default AboutPage;