import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { client } from '../api/sanity';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real scenario, we'd fetch from Sanity
        // For now, providing placeholder data to match the "Neon Fashion" style
        const mockProducts = [
            { id: '1', title: 'Neon Cyber Jacket', price: 299, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80', description: 'Glow in the dark cyberpunk jacket.' },
            { id: '2', title: 'Fluorescent Sneakers', price: 159, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', description: 'High-performance neon sneakers.' },
            { id: '3', title: 'Electric Blue Hoodie', price: 89, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80', description: 'Vibrant electric blue oversized hoodie.' },
            { id: '4', title: 'Luminous Cargo Pants', price: 129, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80', description: 'Reflective cargo pants for night life.' },
        ];

        setProducts(mockProducts);
        setLoading(false);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <span className="hero-tag">New Collection 2026</span>
                    <h1>FUTURE OF <span className="highlight">FASHION</span> IS NEON</h1>
                    <p>Discover our latest collection of high-tech apparel designed for the modern trailblazer. Bold colors meet cutting-edge materials.</p>
                    <div className="hero-btns">
                        <Link to="#products" className="btn-primary">Shop Now <ArrowRight size={18} /></Link>
                        <Link to="#about" className="btn-outline">Our Story</Link>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Featured Products */}
            <section id="products" className="products-section container">
                <div className="section-header">
                    <h2>Featured Collection</h2>
                    <p>Our most popular pieces right now.</p>
                </div>

                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card card">
                            <div className="product-img">
                                <img src={product.image} alt={product.title} />
                                <button className="add-quick-btn">Quick Add</button>
                            </div>
                            <div className="product-info">
                                <div className="product-meta">
                                    <span className="product-cat">Apparel</span>
                                    <div className="rating"><Star size={14} fill="#42f20d" color="#42f20d" /> 4.9</div>
                                </div>
                                <h3>{product.title}</h3>
                                <div className="product-footer">
                                    <span className="price">${product.price}</span>
                                    <Link to={`/product/${product.id}`} className="view-link">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Promo Section */}
            <section className="promo-banner container">
                <div className="promo-card card">
                    <div className="promo-text">
                        <h2>GET 20% OFF YOUR FIRST ORDER</h2>
                        <p>Join the Neon Rebellion and stay updated with the latest drops.</p>
                    </div>
                    <form className="promo-form" onSubmit={e => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit" className="btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
