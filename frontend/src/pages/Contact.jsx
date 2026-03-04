import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page container">
            <div className="section-header">
                <h1>Connect With Us</h1>
                <p>Have questions? We're here to help the rebellion.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="contact-card card">
                        <div className="contact-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div>
                                <h3>Email</h3>
                                <p>support@neonfashion.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box"><Phone size={24} /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 000-NEON</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <div>
                                <h3>HQ</h3>
                                <p>2049 Cyber St, Neon City</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container card">
                    <form className="contact-form" onSubmit={e => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="How can we help?" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
