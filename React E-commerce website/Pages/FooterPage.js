// Footer.js
import React from 'react';
import '../Pages/FooterPage.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Passionately Creating Beautiful, Functional Spaces That Reflect Your Unique Style and Personality</p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Interior Design</li>
            <li>Home Renovation</li>
            <li>Furniture Design</li>
            <li>Landscape Architecture</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>55 Main Street, Mumbai</p>
          <p>Email: moderninteriors@gmail.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Modern Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
