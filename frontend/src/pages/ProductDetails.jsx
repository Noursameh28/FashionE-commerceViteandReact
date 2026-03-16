import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock fetch for now
        const mockProducts = [
            { id: '1', title: 'Neon Cyber Jacket', price: 299, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1000&q=80', description: 'Glow in the dark cyberpunk jacket with weather-resistant fabric and multiple utility pockets.' },
            { id: '2', title: 'Fluorescent Sneakers', price: 159, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80', description: 'High-performance neon sneakers with glow-sole technology and breathable mesh.' },
            { id: '3', title: 'Electric Blue Hoodie', price: 89, image: '/images/electric_blue_hoodie_1773573370903.png', description: 'Vibrant electric blue oversized hoodie made from premium organic cotton.' },
            { id: '4', title: 'Luminous Cargo Pants', price: 129, image: '/images/reflective_cargo_pants_1773573386883.png', description: 'Reflective cargo pants with integrated 3M strips for high visibility.' },
            { id: '5', title: 'Cyber Specs', price: 49, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1000&q=80', description: 'Neon tinted futuristic sunglasses with UV protection.' },
            { id: '6', title: 'LED High-Tops', price: 189, image: '/images/led_sneakers_1773573400806.png', description: 'Sneakers with programmable LED soles and sleek cyberpunk design.' },
            { id: '7', title: 'Holographic Backpack', price: 79, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&q=80', description: 'Iridescent backpack that shifts colors in the light.' },
            { id: '8', title: 'UV Reactive Tee', price: 39, image: '/images/uv_reactive_tee_1773573461077.png', description: 'T-shirt with a subtle print that glows brightly under blacklight.' },
            { id: '9', title: 'Neon Beanie', price: 25, image: '/images/neon_beanie_1773573563327.png', description: 'Cyber-green knit beanie for those who won\'t go unnoticed.' },
            { id: '10', title: 'Reflective Windbreaker', price: 110, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=1000&q=80', description: 'Ultra-lightweight windbreaker with full body reflective coverage.' },
        ];

        const found = mockProducts.find(p => p.id === id);
        setProduct(found);
        setLoading(false);
    }, [id]);

    if (loading) return <div className="loading container">Loading product details...</div>;
    if (!product) return <div className="error container">Product not found. <Link to="/">Go back</Link></div>;

    return (
        <div className="product-details-page container">
            <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to Shop</Link>

            <div className="product-details-grid fade-in-up">
                <div className="product-gallery">
                    <div className="main-img card">
                        <img src={product.image} alt={product.title} />
                    </div>
                </div>

                <div className="product-info-details">
                    <span className="product-cat">Premium Collection</span>
                    <h1>{product.title}</h1>
                    <div className="price-row">
                        <span className="current-price">${product.price}</span>
                        <span className="stock-tag">In Stock</span>
                    </div>

                    <p className="description">{product.description}</p>

                    <div className="purchase-options">
                        <div className="quantity-selector">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>

                        <button
                            className="btn-primary add-to-cart-btn"
                            onClick={() => addToCart(product, quantity)}
                        >
                            <ShoppingCart size={20} /> Add to Cart
                        </button>
                    </div>

                    <div className="trust-badges card">
                        <div className="badge">
                            <Truck size={20} />
                            <span>Free Shipping</span>
                        </div>
                        <div className="badge">
                            <RefreshCcw size={20} />
                            <span>30-Day Returns</span>
                        </div>
                        <div className="badge">
                            <ShieldCheck size={20} />
                            <span>Secure Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
