import React from 'react';
import './Hero.css';
import Navbar from './Navbar';
import heroBg from '../assets/heroImage01.jpg';
import plantImg1 from '../assets/plant02.png';
import plantImg2 from '../assets/plant03.png';
import plantImg3 from '../assets/plant06.png';
import profileImg from '../assets/profile2.png';
import rightArrow from '../assets/rightarrow.png';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.jpg';
import bagIcon from '../assets/bag.png';

export default function Hero() {
  return (
    <div className="main-wrapper">
      <div className="hero-container" style={{ backgroundImage: `url(${heroBg})` }}>

        <div className="hero-content">

          <div className="hero-left">
            <div className="hero-main-text">
              <h1 className="hero-title">Earth's Exhale</h1>
              <p className="hero-subtitle">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
              </p>
              <div className="hero-actions">
                <button className="btn-primary">Buy Now</button>
                <button className="btn-secondary">
                  <span className="play-icon">▶</span> Live Demo...
                </button>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src={profileImg} alt="Ronnie Hamill" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <p className="testimonial-name">Ronnie Hamill</p>
                  <div className="testimonial-stars">★★★★½</div>
                </div>
              </div>
              <p className="testimonial-text">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="plant-card">
              <div className="plant-image-container">
                <img src={plantImg1} alt="Aglaonema plant" className="main-plant-img" />
              </div>
              <div className="plant-details">
                <p className="plant-type-label">Indoor Plant</p>
                <div className="plant-title-row">
                  <h2 className="plant-name">Aglaonema plant</h2>
                  <img src={rightArrow} alt="Details" className="detail-arrow" />
                </div>
                <button className="plant-buy-btn">Buy Now</button>
                <div className="card-slider-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="trendy-plants-section">
          <div className="section-header">
            <h2 className="section-title">Our Trendy plants</h2>
          </div>

          <div className="trendy-cards-container">
            {/* Card 1: Image Left, Content Right */}
            <div className="trendy-card glass-card">
              <div className="trendy-card-image">
                <img src={plantImg2} alt="Desk Decoration" />
              </div>
              <div className="trendy-card-content">
                <h3 className="trendy-card-title">For Your Desks Decorations</h3>
                <p className="trendy-card-description">
                  I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                </p>
                <p className="trendy-card-price">Rs. 599/-</p>
                <div className="trendy-card-actions">
                  <button className="btn-explore">Explore</button>
                  <button className="btn-bag">
                    <img src={bagIcon} alt="Add to bag" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Image Right, Content Left */}
            <div className="trendy-card glass-card reverse">
              <div className="trendy-card-content">
                <h3 className="trendy-card-title">For Your Desks Decorations</h3>
                <p className="trendy-card-description">
                  The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
                </p>
                <p className="trendy-card-price">Rs. 399/-</p>
                <div className="trendy-card-actions">
                  <button className="btn-explore">Explore</button>
                  <button className="btn-bag">
                    <img src={bagIcon} alt="Add to bag" />
                  </button>
                </div>
              </div>
              <div className="trendy-card-image">
                <img src={plantImg3} alt="Desk Decoration" />
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
