import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
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

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAboutClick = () => {
    setAboutOpen(!aboutOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setToggleMenu(false);
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={images.blackbasil} alt="app__logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans" onClick={() => { setMenuOpen(false); setAboutOpen(false); }}>
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans" onClick={handleAboutClick}>
          About
          {aboutOpen && (
            <div className="app__navbarabout_open">
              <li className="app__p__opensans">
                <Link to="/farm" onClick={() => handleNavigate('/farm')}>Our Farm</Link>
              </li>
              <li className="app__p__opensans">
                <Link to="/kitchen" onClick={() => handleNavigate('/kitchen')}>Our Kitchen</Link>
              </li>
            </div>
          )}
        </li>
        <li className="p__opensans" onClick={() => { setMenuOpen(false); setAboutOpen(false); }}>
          <Link to="/team">Our Team</Link>
        </li>
        <li className="p__opensans" onClick={handleMenuClick}>
          Menu
          {menuOpen && (
            <div className="app__navbarmenu_open">
              <li className="app__p__opensans">
                <Link to="/menu" onClick={() => handleNavigate('/menu')}>Dine In</Link>
              </li>
              <li className="app__p__opensans">
                <Link to="/ToGo" onClick={() => handleNavigate('/ToGo')}>To Go</Link>
              </li>
            </div>
          )}
        </li>
        <li className="p__opensans" onClick={() => { setMenuOpen(false); setAboutOpen(false); }}>
          <Link to="/awards">Awards</Link>
        </li>
        <li className="p__opensans">
          <Link to="/" onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}>Contact</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/Specials" className="p__opensans">Specials</Link>
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
              <li><Link to="/" onClick={() => handleNavigate('/')}>Home</Link></li>
              <li>
                <div className="app__smallscreen-dropdown">
                  <span onClick={handleAboutClick}>About</span>
                  {aboutOpen && (
                    <div className="app__navbar-smallscreen_about">
                      <li className="app__p__opensans">
                        <Link to="/farm" onClick={() => handleNavigate('/farm')}>Our Farm</Link>
                      </li>
                      <li className="app__p__opensans">
                        <Link to="/kitchen" onClick={() => handleNavigate('/kitchen')}>Our Kitchen</Link>
                      </li>
                    </div>
                  )}
                </div>
              </li>
              <li><Link to="/team" onClick={() => handleNavigate('/team')}>Our Team</Link></li>
              <li>
                <div className="app__smallscreen-dropdown">
                  <span onClick={handleMenuClick}>Menu</span>
                  {menuOpen && (
                    <div className="app__navbar-smallscreen_menu">
                      <li className="app__p__opensans">
                        <Link to="/menu" onClick={() => handleNavigate('/menu')}>Dine In</Link>
                      </li>
                      <li className="app__p__opensans">
                        <Link to="/ToGo" onClick={() => handleNavigate('/ToGo')}>To Go</Link>
                      </li>
                    </div>
                  )}
                </div>
              </li>
              <li><Link to="/awards" onClick={() => handleNavigate('/awards')}>Awards</Link></li>
              <li>
                <Link to="/" onClick={(e) => { e.preventDefault(); setToggleMenu(false); handleScrollToSection('contact'); }}>Contact</Link>
              </li>
            </ul>
            <div className="app__navbar-smallscreen_footer">
              <Link to="/Specials" className="p__cormorant" onClick={() => handleNavigate('/Specials')}>Specials</Link>
              <Link to="/book" className="p__cormorant" onClick={() => handleNavigate('/book')}>Book a Table</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
