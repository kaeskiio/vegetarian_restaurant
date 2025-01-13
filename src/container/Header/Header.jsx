import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import { BiFontSize } from 'react-icons/bi';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  const handleScroll = () => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <div
          ref={elementRef}
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <SubHeading title="Chase the New Flavor" />
          <h1 className="app__header-h1" >Guilt-free Fine Dining</h1>
          <p className="p__opensans" style={{ margin: '2rem 0' }}>
            Fresh produce from our fully organic farms. Satisfy your cravings with our sustainable yet scrumptious creations. Book your reservation today!
          </p>
          <Link to="/menu">
            <button type="button" className="custom__button">Explore Menu</button>
          </Link>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img
          src={images.header_image5}
          alt="header_img"
          className="header__image"
        />
      </div>
    </div>
  );
};

export default Header;
