import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import './AboutUs.css';

import FadeInSection from '../../components/FadeInSection/FadeInSection';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/farm');
    window.scrollTo(0, 0); 
  };

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.B} alt="B_overlay" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_wrapper">
          <FadeInSection translateXAmount={-30}>
            <div className="app__aboutus-content_about">
              <h1 className="headtext__cormorant">About Us</h1>
              <img src={images.spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">At Black Basil, we seek to promote a sustainable community through innovative approaches to fine dining. Featuring an entirely plant-based menu, we hope to build a better future for humanity one meal at a time.</p>
              <button type="button" className="custom__button" onClick={handleNavigate}>Know More</button>
            </div>
          </FadeInSection>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>
        <div className="app__aboutus-content_wrapper">
          <FadeInSection translateXAmount={30}>
            <div className="app__aboutus-content_history">
              <h1 className="headtext__cormorant">Our History</h1>
              <img src={images.spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">Black Basil was founded by Executive Chef Kacem Ettahali and Head Chef Joshua Wu in 2020. During the Covid 19 Pandemic, Black Basil was created as an attempt to encourage a sustainable living that would support our planet. After a year of careful experimentation with plant-based menus, Black Basil had its grand opening in the fall of 2020.</p>
              <button type="button" className="custom__button" onClick={handleNavigate}>Know More</button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
