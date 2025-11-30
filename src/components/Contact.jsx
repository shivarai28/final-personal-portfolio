import React from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <article className="contact active">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.08711665223402!2d77.43699283674374!3d23.265134091224617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sbd!4v1763997898617!5m2!1sen!2sbd"
                        loading="lazy"
                        title="Google Map"
                    ></iframe>

                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form action="#" className="form" data-form>
                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <Send size={16} />
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;
