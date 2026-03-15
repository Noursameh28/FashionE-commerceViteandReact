import React from 'react';
import { Mail, Phone, MapPin, Send, Twitter, Instagram, Facebook, Github } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [gridRef, gridVisible]     = useScrollAnimation();
    const [mapRef, mapVisible]       = useScrollAnimation();

    return (
        <div className="contact-page">
            {/* Header Section */}
            <div ref={headerRef} className={`contact-header container reveal${headerVisible ? ' visible' : ''}`}>
                <h1>Connect With Us</h1>
                <p>Have questions? We're here to help the rebellion.</p>
            </div>

            <div ref={gridRef} className={`container reveal${gridVisible ? ' visible' : ''}`}>
                <div className="contact-grid">
                    {/* Left Side: Contact Info & Socials */}
                    <div className="contact-info-wrapper">
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

                        {/* Social Links */}
                        <div className="social-connect card">
                            <h3>Follow the Glow</h3>
                            <p>Join our community across the grid.</p>
                            <div className="social-icons-contact">
                                <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                                <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                                <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
                                <a href="#" aria-label="Github"><Github size={24} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="contact-form-container card">
                        <h3>Send a Transmission</h3>
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
                                <input type="text" placeholder="Incoming Transmission Subject" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="How can we help?" rows="6" required></textarea>
                            </div>
                            <button type="submit" className="btn-primary form-submit">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div ref={mapRef} className={`map-section card reveal${mapVisible ? ' visible' : ''}`}>
                    <div className="map-overlay">
                        <div className="map-marker-info">
                            <MapPin size={32} color="#42f20d" />
                            <h4>Neon Fashion HQ</h4>
                            <p>Sector 4, Neon City</p>
                        </div>
                    </div>
                    {/* Using a stylized night-city image as a mock map background */}
                    <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=80" alt="Neon City Map View" className="map-image" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
