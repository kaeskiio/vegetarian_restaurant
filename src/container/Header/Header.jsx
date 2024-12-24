import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">Guilt-free Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Fresh produce from our fully organic farms in Scarsborough, New York. Satisfy your cravings with our sustainable yet scrumptious creations. Book your reservation today!</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.header_image} alt="header_img" />
    </div>
  </div>
);

export default Header;