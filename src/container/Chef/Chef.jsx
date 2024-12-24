import React from 'react';

import { SubHeading } from '../../components';
import { images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper__img app__wrapper__img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we believe in.</h1>

      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote"/>
        </div>
        <p className="p__opensans">In every dish we prepare, there is a story—one that begins with fresh, locally-sourced ingredients and ends with a plate filled with care and passion.</p>
        <p className="p__opensans">
            We believe that the process of creating food is just as important as the flavors it brings, and we take time to honor each vegetable, each herb, and each step in the journey to bring you a meal that’s nourishing, vibrant, and full of heart.
          </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
