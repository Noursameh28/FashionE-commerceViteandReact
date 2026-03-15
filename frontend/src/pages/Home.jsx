import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Tag, Zap } from 'lucide-react';
import { client } from '../api/sanity';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // In a real scenario, we'd fetch from Sanity
        // For now, providing placeholder data to match the "Neon Fashion" style
        const mockProducts = [
            { id: '1', title: 'Neon Cyber Jacket', price: 299, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80', description: 'Glow in the dark cyberpunk jacket.' },
            { id: '2', title: 'Fluorescent Sneakers', price: 159, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', description: 'High-performance neon sneakers.' },
            { id: '3', title: 'Electric Blue Hoodie', price: 89, image: '/images/electric_blue_hoodie_1773573370903.png', description: 'Vibrant electric blue oversized hoodie.' },
            { id: '4', title: 'Luminous Cargo Pants', price: 129, image: '/images/reflective_cargo_pants_1773573386883.png', description: 'Reflective cargo pants for night life.' },
        ];
        
        const mockBestSellers = [
            { id: '8', title: 'UV Reactive Tee', price: 39, image: '/images/uv_reactive_tee_1773573461077.png', description: 'T-shirt that glows under blacklight.' },
            { id: '5', title: 'Cyber Specs', price: 49, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80', description: 'Neon tinted futuristic sunglasses.' },
            { id: '6', title: 'LED High-Tops', price: 189, image: '/images/led_sneakers_1773573400806.png', description: 'Sneakers with programmable LED soles.' },
            { id: '9', title: 'Neon Beanie', price: 25, image: '/images/neon_beanie_1773573563327.png', description: 'Bright neon green winter beanie.' },
        ];

        setProducts(mockProducts);
        setBestSellers(mockBestSellers);
        setLoading(false);
    }, []);

    const handleCategoryClick = (category) => {
        navigate('/shop');
    };

    // Scroll animation refs
    const [catRef, catVisible]       = useScrollAnimation();
    const [featRef, featVisible]     = useScrollAnimation();
    const [offerRef, offerVisible]   = useScrollAnimation();
    const [bestRef, bestVisible]     = useScrollAnimation();
    const [promoRef, promoVisible]   = useScrollAnimation();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <span className="hero-tag">New Collection 2026</span>
                    <h1>FUTURE OF <span className="highlight">FASHION</span> IS NEON</h1>
                    <p>Discover our latest collection of high-tech apparel designed for the modern trailblazer. Bold colors meet cutting-edge materials.</p>
                    <div className="hero-btns">
                        <Link to="/shop" className="btn-primary">Shop Now <ArrowRight size={18} /></Link>
                        <Link to="/about" className="btn-outline">Our Story</Link>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>
            
            {/* Categories Section */}
            <section ref={catRef} className={`categories-section container reveal${catVisible ? ' visible' : ''}`}>
                <div className="section-header">
                    <h2>Shop by Category</h2>
                    <p>Find exactly what you need for the grid.</p>
                </div>
                <div className="categories-grid">
                    <div className="category-card card" onClick={() => handleCategoryClick('Apparel')}>
                        <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80" alt="Apparel" />
                        <div className="category-overlay">
                            <h3>APPAREL</h3>
                            <button className="btn-outline-small">Explore <ArrowRight size={14} /></button>
                        </div>
                    </div>
                    <div className="category-card card" onClick={() => handleCategoryClick('Footwear')}>
                        <img src="/images/led_sneakers_1773573400806.png" alt="Footwear" />
                        <div className="category-overlay">
                            <h3>FOOTWEAR</h3>
                            <button className="btn-outline-small">Explore <ArrowRight size={14} /></button>
                        </div>
                    </div>
                    <div className="category-card card" onClick={() => handleCategoryClick('Accessories')}>
                        <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80" alt="Accessories" />
                        <div className="category-overlay">
                            <h3>ACCESSORIES</h3>
                            <button className="btn-outline-small">Explore <ArrowRight size={14} /></button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Featured Products */}
            <section ref={featRef} id="products" className={`products-section container reveal${featVisible ? ' visible' : ''}`}>
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
                                    <span className="product-cat">Featured</span>
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
                <div className="view-all-container">
                    <Link to="/shop" className="btn-outline">View All Gear</Link>
                </div>
            </section>
            
            {/* Special Offer Section */}
            <section ref={offerRef} className={`special-offer-section reveal${offerVisible ? ' visible' : ''}`}>
                <div className="container">
                    <div className="offer-banner card">
                        <div className="offer-content">
                            <div className="offer-badge"><Tag size={16} /> Flash Sale</div>
                            <h2>NEON SYNTHESIS BUNDLE</h2>
                            <p>Get a complete cyberpunk outfit set and save over 30%.</p>
                            <div className="countdown">
                                <div className="time-box"><span>12</span><small>HRS</small></div>
                                <div className="time-box"><span>45</span><small>MINS</small></div>
                                <div className="time-box"><span>09</span><small>SECS</small></div>
                            </div>
                            <Link to="/shop" className="btn-primary">Claim Offer <Zap size={18} /></Link>
                        </div>
                        <div className="offer-image">
                            <img src="/images/uv_reactive_tee_1773573461077.png" alt="Flash Sale Items" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Best Sellers */}
            <section ref={bestRef} className={`products-section container reveal${bestVisible ? ' visible' : ''}`}>
                <div className="section-header">
                    <h2>Best Sellers</h2>
                    <p>Highly rated by the rebellion.</p>
                </div>

                <div className="product-grid">
                    {bestSellers.map(product => (
                        <div key={product.id} className="product-card card">
                            <div className="product-img">
                                <img src={product.image} alt={product.title} />
                                <button className="add-quick-btn">Quick Add</button>
                            </div>
                            <div className="product-info">
                                <div className="product-meta">
                                    <span className="product-cat">Top Rated</span>
                                    <div className="rating"><Star size={14} fill="#42f20d" color="#42f20d" /> 4.8</div>
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

            {/* Promo / Newsletter Section */}
            <section ref={promoRef} className={`promo-banner container reveal${promoVisible ? ' visible' : ''}`}>
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
