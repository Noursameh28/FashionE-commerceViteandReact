import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Zap, Target, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    const [heroRef, heroVisible]     = useScrollAnimation();
    const [valuesRef, valuesVisible] = useScrollAnimation();
    const [teamRef, teamVisible]     = useScrollAnimation();
    const [galleryRef, galleryVisible] = useScrollAnimation();
    const [ctaRef, ctaVisible]       = useScrollAnimation();

    return (
        <div className="about-page">
            {/* Story Hero Section */}
            <section ref={heroRef} className={`about-hero container reveal${heroVisible ? ' visible' : ''}`}>
                <div className="about-hero-text">
                    <span className="hero-tag">Our Story</span>
                    <h1>THE NEON <span className="highlight">REBELLION</span></h1>
                    <p>Born from the underground cyberpunk scene of neo-Tokyo, Neon Fashion was established in 2026 with a single vision: to bring futuristic, high-performance streetwear to the modern trailblazer. We merge cutting-edge glow-in-the-dark materials with classic streetwear silhouettes.</p>
                </div>
                <div className="about-hero-image card">
                    <img src="/images/neon_urban_hero_1773573346846.png" alt="Cyberpunk street style" />
                </div>
            </section>

            {/* Mission & Values */}
            <section ref={valuesRef} className={`values-section container reveal${valuesVisible ? ' visible' : ''}`}>
                <div className="section-header">
                    <h2>Our Core Values</h2>
                    <p>What drives the rebellion.</p>
                </div>
                <div className="values-grid">
                    <div className="value-card card">
                        <Zap className="value-icon" size={32} />
                        <h3>Innovation First</h3>
                        <p>We constantly experiment with UV-reactive threads, LED fabrics, and new synthetic blends to push the boundaries of what clothing can be.</p>
                    </div>
                    <div className="value-card card">
                        <Shield className="value-icon" size={32} />
                        <h3>Durable Design</h3>
                        <p>Our gear is built to withstand urban exploration. Reinforced stitching and weather-resistant coatings come standard.</p>
                    </div>
                    <div className="value-card card">
                        <Heart className="value-icon" size={32} />
                        <h3>Ethical Culture</h3>
                        <p>We believe the future should be bright for everyone. All our production lines adhere to strict ethical labor standards.</p>
                    </div>
                    <div className="value-card card">
                        <Target className="value-icon" size={32} />
                        <h3>Laser Focus</h3>
                        <p>We don't do basics. Every piece we drop is a statement piece, meticulously designed to turn heads in the dark.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className={`team-section container reveal${teamVisible ? ' visible' : ''}`}>
                <div className="section-header">
                    <h2>Meet The Creators</h2>
                    <p>The minds behind the glow.</p>
                </div>
                <div className="team-grid">
                    <div className="team-card card">
                        <div className="team-img">
                            <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80" alt="Sarah Connor" />
                        </div>
                        <div className="team-info">
                            <h3>Sarah Jensen</h3>
                            <span className="team-role">Lead Designer &amp; Founder</span>
                        </div>
                    </div>
                    <div className="team-card card">
                        <div className="team-img">
                            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" alt="Marcus Chen" />
                        </div>
                        <div className="team-info">
                            <h3>Marcus Chen</h3>
                            <span className="team-role">Head of Textile Tech</span>
                        </div>
                    </div>
                    <div className="team-card card">
                        <div className="team-img">
                            <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80" alt="Elena Rodriguez" />
                        </div>
                        <div className="team-info">
                            <h3>Elena Rodriguez</h3>
                            <span className="team-role">Creative Director</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Gallery */}
            <section ref={galleryRef} className={`gallery-section container reveal${galleryVisible ? ' visible' : ''}`}>
                <div className="section-header">
                    <h2>Aesthetic</h2>
                </div>
                <div className="gallery-grid">
                    <img src="/images/electric_blue_hoodie_1773573370903.png" alt="aesthetic 1" className="gallery-img tall" />
                    <img src="/images/reflective_cargo_pants_1773573386883.png" alt="aesthetic 2" className="gallery-img" />
                    <img src="/images/neon_beanie_1773573563327.png" alt="aesthetic 3" className="gallery-img" />
                    <img src="/images/led_sneakers_1773573400806.png" alt="aesthetic 4" className="gallery-img wide" />
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className={`about-cta container reveal${ctaVisible ? ' visible' : ''}`}>
                <div className="cta-card card">
                    <h2>Ready to join the rebellion?</h2>
                    <p>Check out our latest drops or get in touch with our team.</p>
                    <div className="cta-btns">
                        <Link to="/shop" className="btn-primary">Shop Collection <ArrowRight size={18} /></Link>
                        <Link to="/contact" className="btn-outline">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
