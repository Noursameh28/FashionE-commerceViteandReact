import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const mockProducts = [
    { id: '1', title: 'Neon Cyber Jacket', price: 299, category: 'Apparel', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80', description: 'Glow in the dark cyberpunk jacket.', rating: 4.9 },
    { id: '2', title: 'Fluorescent Sneakers', price: 159, category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', description: 'High-performance neon sneakers.', rating: 4.8 },
    { id: '3', title: 'Electric Blue Hoodie', price: 89, category: 'Apparel', image: '/images/electric_blue_hoodie_1773573370903.png', description: 'Vibrant electric blue oversized hoodie.', rating: 4.7 },
    { id: '4', title: 'Luminous Cargo Pants', price: 129, category: 'Apparel', image: '/images/reflective_cargo_pants_1773573386883.png', description: 'Reflective cargo pants for night life.', rating: 4.6 },
    { id: '5', title: 'Cyber Specs', price: 49, category: 'Accessories', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80', description: 'Neon tinted futuristic sunglasses.', rating: 4.5 },
    { id: '6', title: 'LED High-Tops', price: 189, category: 'Footwear', image: '/images/led_sneakers_1773573400806.png', description: 'Sneakers with programmable LED soles.', rating: 4.9 },
    { id: '7', title: 'Holographic Backpack', price: 79, category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', description: 'Iridescent backpack that changes color.', rating: 4.4 },
    { id: '8', title: 'UV Reactive Tee', price: 39, category: 'Apparel', image: '/images/uv_reactive_tee_1773573461077.png', description: 'T-shirt that glows under blacklight.', rating: 4.3 },
    { id: '9', title: 'Neon Beanie', price: 25, category: 'Accessories', image: '/images/neon_beanie_1773573563327.png', description: 'Bright neon green winter beanie.', rating: 4.7 },
    { id: '10', title: 'Reflective Windbreaker', price: 110, category: 'Apparel', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80', description: 'Lightweight jacket with 3M reflective details.', rating: 4.8 },
];

const Shop = () => {
    const [products] = useState(mockProducts);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('none');
    const [currentPage, setCurrentPage] = useState(1);

    const [headerRef, headerVisible]   = useScrollAnimation(0.05);
    const [controlsRef, controlsVisible] = useScrollAnimation(0.05);
    const [gridRef, gridVisible]       = useScrollAnimation(0.05);
    
    const itemsPerPage = 6;
    const categories = ['All', 'Apparel', 'Footwear', 'Accessories'];

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, categoryFilter, sortOrder]);

    const filteredAndSortedProducts = useMemo(() => {
        let result = products;

        // Search Filter
        if (searchQuery) {
            result = result.filter(product => 
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Category Filter
        if (categoryFilter !== 'All') {
            result = result.filter(product => product.category === categoryFilter);
        }

        // Sort
        if (sortOrder === 'low-high') {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-low') {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, searchQuery, categoryFilter, sortOrder]);

    const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
    const paginatedProducts = filteredAndSortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="shop-page container">
            <div ref={headerRef} className={`shop-header reveal${headerVisible ? ' visible' : ''}`}>
                <h1>Shop All Collections</h1>
                <p>Gear up for the neon future.</p>
            </div>

            <div ref={controlsRef} className={`shop-controls card reveal${controlsVisible ? ' visible' : ''}`}>
                <div className="search-bar">
                    <Search className="search-icon" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                
                <div className="filters-row">
                    <div className="category-filters">
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                className={`filter-btn ${categoryFilter === cat ? 'active' : ''}`}
                                onClick={() => setCategoryFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    
                    <div className="sort-filter">
                        <SlidersHorizontal size={18} />
                        <select 
                            value={sortOrder} 
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="sort-select"
                        >
                            <option value="none">Sort By</option>
                            <option value="low-high">Price: Low to High</option>
                            <option value="high-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div ref={gridRef} className={`product-grid reveal${gridVisible ? ' visible' : ''}`}>
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map(product => (
                        <div key={product.id} className="product-card card">
                            <div className="product-img">
                                <img src={product.image} alt={product.title} />
                                <button className="add-quick-btn">Quick Add</button>
                            </div>
                            <div className="product-info">
                                <div className="product-meta">
                                    <span className="product-cat">{product.category}</span>
                                    <div className="rating"><Star size={14} fill="#42f20d" color="#42f20d" /> {product.rating}</div>
                                </div>
                                <h3>{product.title}</h3>
                                <div className="product-footer">
                                    <span className="price">${product.price}</span>
                                    <Link to={`/product/${product.id}`} className="view-link">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-products-msg">
                        <p>No products found matching your criteria.</p>
                        <button className="btn-outline" onClick={() => {
                            setSearchQuery('');
                            setCategoryFilter('All');
                            setSortOrder('none');
                        }}>Clear Filters</button>
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    <button 
                        className="page-btn" 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    
                    <div className="page-numbers">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button 
                                key={i + 1}
                                className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    
                    <button 
                        className="page-btn" 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Shop;
