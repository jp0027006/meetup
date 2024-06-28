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
            <ul className='FDF_sec_to_flex'>
              <li><a href="#" className='FDF_sec1_text' >Find an event</a></li>
              <div className="standing_line"> | </div>
              <li><a href="#" className='FDF_sec1_text' > Start a group</a></li>
              <div className="standing_line"> | </div>
              <li><a href="#" className='FDF_sec1_text' >Get the app</a></li>
            </ul>
          </div>
          <div className="FDF_footer-section FDF_sec2_sec3">
            <ul className='FDF_sec2'>
            <li><a href="#">Sign in</a></li>
              <li><a href="#">Log in</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div className="FDF_footer-section FDF_sec2_sec3">
            <ul className='FDF_sec2'>
            <li><a href="#">About</a></li>
              <li><a href="#">Decide &<br />Conquer Book</a></li>
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
        <div className="FDF_footer-legal d-flex">
            <a href="#">Terms of Service</a>  
              <div className="standing_line"> | </div>
            <a href="#">Privacy Policy</a> 
              <div className="standing_line"> | </div>
            <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Friendships_Details_Footer;