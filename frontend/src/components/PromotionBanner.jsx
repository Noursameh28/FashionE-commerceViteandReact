import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Sparkles } from 'lucide-react';

const PromotionBanner = forwardRef(({ revealClass }, ref) => {
  return (
    <section ref={ref} className={`promotion-custom-banner container ${revealClass}`}>
      <div className="promo-overlay-wrapper card">
        <div className="promo-content-grid">
          <div className="promo-info">
            <div className="promo-tag">
              <Sparkles size={16} /> Limited Time Offer
            </div>
            <h2>UPGRADE YOUR <span className="highlight">AESTHETIC</span></h2>
            <p>
              Take your style to the next level with our exclusive Neon Rebellion collection. 
              Power up your wardrobe with cutting-edge designs.
            </p>
            <div className="discount-box">
              <span className="discount-value">30% OFF</span>
              <span className="discount-text">SITEWIDE DISCOUNT</span>
            </div>
            <Link to="/shop" className="btn-primary promo-btn">
              Shop Now <ArrowRight size={18} />
            </Link>
          </div>
          <div className="promo-visual">
            <div className="neon-circle"></div>
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
              alt="Promo Fashion" 
              className="promo-img"
            />
            <div className="promo-badge">
              <Zap size={20} fill="currentColor" />
              <span>FLASH SALE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

PromotionBanner.displayName = 'PromotionBanner';

export default PromotionBanner;
