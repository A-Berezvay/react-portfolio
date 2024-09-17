import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <main className='contactForm'>
            <form>
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Joe Doe" required />
                <label for="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="joedoe@email.com" required />                   
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Create a stunning website" required />
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="8" cols="40" placeholder="Message" required></textarea>                    
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default ContactPage;