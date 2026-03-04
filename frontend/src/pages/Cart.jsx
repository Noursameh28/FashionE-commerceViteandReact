import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart container">
                <ShoppingBag size={64} color="#42f20d" />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1>Your Shopping Cart</h1>

            <div className="cart-grid">
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item card">
                            <div className="item-img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="item-details">
                                <h3>{item.title}</h3>
                                <span className="item-price">${item.price}</span>
                                <div className="item-actions">
                                    <div className="quantity-selector small">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="item-total">
                                ${item.price * item.quantity}
                            </div>
                        </div>
                    ))}

                    <button className="clear-cart-link" onClick={clearCart}>Clear Shopping Cart</button>
                </div>

                <div className="cart-summary card">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${total}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>
                    <button className="btn-primary checkout-btn">
                        Proceed to Checkout <ArrowRight size={18} />
                    </button>
                    <p className="secure-checkout">100% Secure Checkout</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
