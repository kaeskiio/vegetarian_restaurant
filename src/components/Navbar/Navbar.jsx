import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/farm">About</Link></li>
        <li className="p__opensans"><Link to="/team">Our Team</Link></li>
        <li className="p__opensans"><Link to="/menu">Menu</Link></li>
        <li className="p__opensans">
          <Link to="/" onClick={(e) => { e.preventDefault(); handleScrollToSection('awards'); }}>Awards</Link>
        </li>
        <li className="p__opensans">
          <Link to="/" onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}>Contact</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">Specials</a>
        <div />
        <Link to="/book" className="p__opensans">Book Table</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="/farm" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="/team" onClick={() => setToggleMenu(false)}>Our Team</Link></li>
              <li><Link to="/menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li>
                <Link to="/" onClick={(e) => { e.preventDefault(); setToggleMenu(false); handleScrollToSection('awards'); }}>Awards</Link>
              </li>
              <li>
                <Link to="/" onClick={(e) => { e.preventDefault(); setToggleMenu(false); handleScrollToSection('contact'); }}>Contact</Link>
              </li>
            </ul>
            {}
            <div className="app__navbar-smallscreen_footer">
              <Link to="/" className="p__cormorant" onClick={() => setToggleMenu(false)}>Specials</Link>
              <Link to="/book" className="p__cormorant" onClick={() => setToggleMenu(false)}>Book a Table</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
