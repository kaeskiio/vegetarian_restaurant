import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import  { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">11850 Broadway Street, Pearland, TX 77584</p>
        <p className="p__opensans">&nbsp;</p>
        <p className="p__opensans">+1 281 245 3800</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.blackbasil} alt="footer_logo"/>
        <p className="p__opensans">Dine with a purpose—savor the flavors of sustainable, plant-based meals that nourish both your body and our planet</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style = {{marginTop: 15}}/>
        <div className="app__footer-links_icons">
          <a 
            href="https://www.instagram.com/the.blackbasil?igsh=MWNiNXNnMm5ka3UzNg%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday: </p>
        <p className="p__opensans">10AM-2AM</p>
        <p className="p__opensans">Saturday-Sunday: </p>
        <p className="p__opensans">10AM-3AM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 Black Basil. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
