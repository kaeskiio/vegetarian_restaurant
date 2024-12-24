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
        <p className="p__opensans">11 Madison Avenue New York, NY 10010</p>
        <p className="p__opensans">+1 212 678 7235</p>
        <p className="p__opensans">+1 212 554 2789</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo"/>
        <p className="p__opensans">Dine with a purpose—savor the flavors of sustainable, plant-based meals that nourish both your body and our planet</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style = {{marginTop: 15}}/>
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday: </p>
        <p className="p__opensans">8AM-12AM</p>
        <p className="p__opensans">Saturday-Sunday: </p>
        <p className="p__opensans">+12PM-9PM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Black Basil. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
