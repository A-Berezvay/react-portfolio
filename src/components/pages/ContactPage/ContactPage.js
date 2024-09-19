import React from 'react';
import { useTranslation } from 'react-i18next'; // Translation
import './ContactPage.css';

function ContactPage() {
    const { t } = useTranslation();

    return (
        <main className='contactForm'>
            <form>
                <label for="name">{t('full name')}</label>
                <input type="text" id="name" name="name" placeholder="Joe Doe" required />
                <label for="email">{t('email address')}</label>
                <input type="email" id="email" name="email" placeholder="joedoe@email.com" required />                   
                <label for="subject">{t('subject')}</label>
                <input type="text" id="subject" name="subject" placeholder={t('subject placeholder')} required />
                <label for="message">{t('message')}</label>
                <textarea id="message" name="message" rows="8" cols="40" placeholder={t('message')} required></textarea>                    
                <button type="submit">{t('submit button')}</button>
            </form>
        </main>
    )
}

export default ContactPage;