import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="logo">NEON FASHION</Link>
                    <p>Elevate your style with our curated collection of neon-inspired fashion. Bold, bright, and unforgettable.</p>
                </div>

                <div className="footer-links">
                    <h4>Shop</h4>
                    <Link to="/">New Arrivals</Link>
                    <Link to="/">Best Sellers</Link>
                    <Link to="/">Sale</Link>
                </div>

                <div className="footer-links">
                    <h4>Support</h4>
                    <Link to="/">Shipping</Link>
                    <Link to="/">Returns</Link>
                    <Link to="/">FAQ</Link>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 Neon Fashion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
