import React from 'react';
import PageTitle from '../../utils/pageTitle';
import { useTranslation } from 'react-i18next'; // Translation
import './ContactPage.css';

function ContactPage() {
    const { t } = useTranslation();

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission to allow custom handling

        // Trigger Google Ads conversion tracking
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                send_to: 'AW-11118720386/wDhyCLHX19QZEILr6LUp', // Use your specific conversion ID
            });
        }

        // After triggering the conversion, submit the form
        event.target.submit(); // This manually submits the form to Formspree
    };
    
    return (
        <main className='contactForm'>
            <PageTitle title={t('contact title')} />
            <form 
                action="https://formspree.io/f/xnnaygkj" 
                method="POST"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">{t('full name')}</label>
                <input type="text" id="name" name="name" placeholder="Joe Doe" required />
                <label htmlFor="email">{t('email address')}</label>
                <input type="email" id="email" name="email" placeholder="joedoe@email.com" required />                   
                <label htmlFor="subject">{t('subject')}</label>
                <input type="text" id="subject" name="subject" placeholder={t('subject placeholder')} required />
                <label htmlFor="message">{t('message')}</label>
                <textarea id="message" name="message" rows="8" cols="40" placeholder={t('message')} required></textarea>                    
                <button type="submit">{t('submit button')}</button>
            </form>
        </main>
    )
}

export default ContactPage;