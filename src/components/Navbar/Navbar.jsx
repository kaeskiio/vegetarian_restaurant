import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Use Link for routing instead of anchor tags
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to = "/">Home</Link></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><Link to ="/menu">Menu</Link></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        {/* Link to login page */}
        <a href="/"  className="p__opensans">Log In / Registration</a>
        <div />
        <Link to="/book" className="p__opensans">Book Table</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)} // Ensure this toggles the menu
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)} // Ensure the close button works
            />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="/#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="/#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="/#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
