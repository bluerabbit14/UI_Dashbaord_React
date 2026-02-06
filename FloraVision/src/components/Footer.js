import React from 'react';
import './Footer.css';
import logo from '../assets/webicon.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        
        {/* row 1 col 1 */}
        <div className='footer-brand'>
          <div className='footer-logo'>
            <img src={logo} alt='FloraVision'></img>
            <h2>FloraVision.</h2>
          </div>
          <p>"From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."</p>
        </div>

        {/* row 1 col 2 */}
        <div className="footer-links">
          <h4>Quick Link's</h4>
          <ul>
            <li>Home</li>
            <li>Type's of plant's</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* row 1 col 3 */}
        <div className='footer-newsletter'>
          <h4>For  Every Update. </h4>
          <div className='newsletter-box'>
            <input type='email' placeholder='Enter Email'></input>
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* row 2 col 1 */}
        <div className='footer-social'>
          <span>FB</span>
          <span>TW</span>
          <span>LI</span>
        </div>

        {/* row 2 col 2 */}
        <div className="footer-spacer"></div>

        {/* row 2 col 3 */}
        <div className="footer-copy">
          FloraVision © all right reserve
        </div>

      </div>
    </footer>
  )
}
