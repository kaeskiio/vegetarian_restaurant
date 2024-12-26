import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const handleVisitUsClick = () => {
    window.open('https://maps.app.goo.gl/crXipsgFMwz1ejDA7', '_blank');
  };

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">11850 Broadway Street, Pearland, TX, 77584</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 AM - 02:00 AM</p>
          <p className="p__opensans">Sat - Sun: 10:00 AM - 03:00 AM</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: '2rem' }}
          onClick={handleVisitUsClick}
        >
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus_img" />
      </div>
    </div>
  );
};

export default FindUs;
