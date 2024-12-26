import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const Header = () => {
  const navigate = useNavigate(); 

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <FadeInSection translateYAmount={50}>
          <SubHeading title="Chase the new flavor" />
        </FadeInSection>
        <FadeInSection translateYAmount={50}>
          <h1 className="app__header-h1">Guilt-free Fine Dining</h1>
        </FadeInSection>
        <FadeInSection translateYAmount={50}>
          <p className="p__opensans" style={{ margin: '2rem 0' }}>
            Fresh produce from our fully organic farms in Scarsborough, New York. Satisfy your cravings with our sustainable yet scrumptious creations. Book your reservation today!
          </p>
          <button
            type="button"
            className="custom__button"
            onClick={() => navigate('/menu')}
          >
            Explore Menu
          </button>
        </FadeInSection>
      </div>
      <div className="app__wrapper_img">
        <img src={images.header_image} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
