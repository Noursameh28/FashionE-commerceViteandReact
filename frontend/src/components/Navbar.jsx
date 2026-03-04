import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { cart } = useCart();
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = React.useState(false);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">NEON FASHION</Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/#products" onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link to="/#about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

                <div className="nav-actions">
                    {user ? (
                        <div className="user-profile">
                            <Link to="/admin"><User size={20} /></Link>
                            <button onClick={logout} className="logout-btn">Logout</button>
                        </div>
                    ) : (
                        <Link to="/login" className="login-link">Login</Link>
                    )}

                    <Link to="/cart" className="cart-icon">
                        <ShoppingCart size={20} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
