import React from 'react';
import './AboutPage.css'; // Ensure to create a corresponding CSS file for styles

const HomePage = () => {
  return (
    <main>
    <section class="about-me">
        <article class="about-me-sections my-journey">
            <h2 class="hidden">My Journey</h2>
            <p class="hidden">Born and raised in Budapest, my journey began with an interest in hospitality, a field that I studied in secondary school. After graduation I tried my luck and moved to London to gain experience, meet new people and see other cultures. This experience proved to be transformative, leading to a realisation that my passion lies in digital <b>web development</b>. Motivated by this newfound interest I pursued a degree in <b>Multimedia Design & Communication</b> at IBA in Kolding, Denmark. As soon as I’ve was introduced to the world of coding, I’ve been building not only smaller pages, but a bigger dream of getting a Job in <b>IT</b> in the near future.</p>
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
                    <p>From Content Management Systems to Hand-coding, I have the ability to build <b>SEO optimised websites</b>, for diverse needs. This Portfolio itself was crafted with <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>. With sharp eye for details and design I ensure that every website I develop aligns with the <b>envisioned aesthetic.</b></p>
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

export default HomePage;