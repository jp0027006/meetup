import React from 'react';
import './Friendships_Details_Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Friendships_Details_Footer = () => {
  return (
    <div className="FDF_footer">
      <div className="FDF_container">
        <div className="FDF_footer-content">
          <div className="FDF_footer-section">
            <h3>Do more of what you love</h3>
            <ul>
              <li><a href="#" className='footer_part1_sec1'>Find an event</a></li>
              <li><a href="#" className='footer_part1_sec1'>Start a group</a></li>
              <li><a href="#" className='footer_part1_sec1'>Get the app</a></li>
            </ul>
          </div>
          <div className="FDF_footer-section">
            <ul>
            <li><a href="#">Sign in</a></li>
              <li><a href="#">Log in</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div className="FDF_footer-section">
            <ul>
            <li><a href="#">About</a></li>
              <li><a href="#">Decide & Conquer Book</a></li>
              <li><a href="#">Pro</a></li>
            </ul>
          </div>
          <div className="FDF_footer-section">
            <h3>Follow us</h3>
            <ul className="FDF_social-icons">
            <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
        <div className="FDF_footer-legal">
            <a href="#">Terms of Service</a>  
              <div className="standing_line">|</div>
            <a href="#">Privacy Policy</a> 
              <div className="standing_line">|</div>
            <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Friendships_Details_Footer;